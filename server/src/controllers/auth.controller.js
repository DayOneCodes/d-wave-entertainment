import { User } from "../models/user.model.js";
//save a version of the refresh token to be deleted on login.
import bcrypt from "bcryptjs";
import { generateVerificationToken } from "../utils/generateVerificationToken.js";
import { generateTokenAndSetCookie } from "../utils/generateTokenAndSetCookie.js";
import { sendVerificationEmail } from "../mailtrap/email.js";
import validator from "validator";
import crypto from "crypto";

const signUp = async (req, res) => {
  const { email, password, name } = req.body;


  try 
  {
    if (!email || !password || !name ) throw new Error ("All Fields Required");

    const isValidEmail = validator.isEmail(email);

    if (!isValidEmail) return res.status(400).json({success: false, message: "Invalid email format"});

    const isStrongPassword = validator.isStrongPassword(password, {
      minLength: 8,
      minLowercase: 1,
      minUppercase: 1,
      minNumbers: 1,
      minSymbols: 1
    });

    if (!isStrongPassword) return res.status(400).json({success: false, message: "Password must be at least 12 characters and include uppercase, lowercase, number, and symbol."})

    const userExists = await User.findOne({email});

    if (userExists) return res.status(400).json({success: false, message: "If an account with this email can be created, you will receive a verification email", userExists});

    const passwordHash = await bcrypt.hash(password, 10);

    const verificationToken = generateVerificationToken();
    const hashedToken = crypto.createHash("sha256").update(verificationToken).digest("hex");

    const user = new User ({
      email,
      passwordHash,
      name,
      verificationToken: hashedToken,
      verificationTokenExpiresAt: Date.now() + 24 * 60 * 60 * 1000,
    })

    await user.save();

    // generateTokenAndSetCookie(res, user._id, user.role);
    // const payload = {
    //   ...user._doc,
    //   passwordHash: undefined,
    // }

    const verificationLink = `https://dwaveentertainment.com/verify-email/${verificationToken}`;
    await sendVerificationEmail(user.email, verificationLink)

    res.status(201).json({
      success: true, 
      message: "User created successfully brada", 
      // user: payload 
    });
  }
  catch (error) 
  {
    res.status(500).json({success: false, message: error.message})
  }
}


const login = async (req,res) => {
  const { email, password } = req.body;

  try 
  {
    const user = await User.findOne({
      email
    });

    if (!user) {
      return res.status(400).json({
        success: false,
        message: "Invalid credentials"
      });
    }

    if (!user.isVerified) {
      return res.status(400).json({
        success: false,
        message: "Invalid credentials"
      })
    }

    const isPasswordValid = await bcrypt.compare(password, user.passwordHash);

    if (!isPasswordValid) {
      return res.status(400).json({
        success: false,
        message: "Invalid credentials"
      });
    }

    generateTokenAndSetCookie(res, user._id, user.role);

    user.lastLogin = new Date();
    await user.save();

    const payload = {
      ...user._doc,
      passwordHash: undefined,
    }

    res.status(200).json({
      success: true,
      message: "Logged in successfully",
      user: payload,
    }); 
  }
  catch (error)
  {
    res.status(500).json({
      success: false,
      message: error.message
    })
  }
};


const logout = async (req, res) => {
  res.clearCookie("jwt_token");
  res.status(200).json({
    success: true,
    message: "Logged out successfully",
  })
};

const checkAuth = async (req, res) => {
  try 
  {
    const user = await User.findById(req.userId).select("-passwordHash");
    
    if (!user) {
      return res.status(400).json({
        success: false,
        message: "User not found"
      })
    };

    res.status(200).json({
      success: true,
      user
    })
  }
  catch (error) 
  {
    console.log("Error in checkAuth", error);
    res.status(400).json({
      success: false,
      message: error.message,
    })
  }
}

const verifyEmail = async (req, res) => {
  const { token } = req.body;

  try 
  {
    const hashedToken = crypto.createHash("sha256").update(token).digest("hex");

    const user = await User.findOne({
      verificationToken: hashedToken,
      verificationTokenExpiresAt: { $gt: Date.now()}
    });

    if (!user) return res.status(400).json({success: false, message: "invalid or expired verification code"});

    user.isVerified = true;
    user.verificationToken = undefined;
    user.verificationTokenExpiresAt = undefined;

    await user.save();

    res.status(200).json({success: true, message: "Email verified successfully"})

  } catch (error) 
  {
   console.log("error in verifyEmail", err)
   res.status(500).json({success: false, message: "Verification failed"})
  }
}


export {
  signUp,
  login,
  logout,
  checkAuth,
  verifyEmail,
}