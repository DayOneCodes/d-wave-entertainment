import express from "express";
import jwt from "jsonwebtoken";
import { User } from "../models/user.model.js";
import bcrypt from "bcryptjs";
import { issueAccessToken, issueRefreshToken, verifyRefreshToken } from "../services/token.service.js";
import isValidEmail from "../utils/emailValidator.js";

const router = express.Router();

router.post("/register", async (req, res) => {
  try {
    const {email, username, password} = req.body;

    if (!email|| !username || !password) return res.status(400).json({message: "Missing fields"});

    if (!isValidEmail(email)) return res.status(400).json({message: "Invalid email address"});

    const existingUser = await User.findOne({email});
    if (existingUser) return res.status(400).json({message: "Account with this email already exists"});

    if (req.body.role && req.body.role !== "user") {
      console.log("Attempt to register with invalid role:", req.body.role)
    }

    const user = await User.create({email, username, password, role: "user"});

    res.status(201).json({message: "User created successfully"});
  } catch (err) {
    console.log(err);
    res.status(500).json({message: "Server error"});
  }
});

router.post("/login", async (req, res) => {
  const {email, password} = req.body;
  const user = await User.findOne({email});
  if (!user) return res.status(400).json({message: "Invalid credentials"});

  const isMatch = await user.comparePassword(password);
  if (!isMatch) return res.status(400).json({message: "Invalid credentials"});

  //LATER: add active account check

  const accessToken = issueAccessToken(user);

  const refreshToken = issueRefreshToken(user);

  user.refreshTokenHash = await bcrypt.hash(refreshToken, 10);
  await user.save();

  res
  .cookie("access_token", accessToken, {
    httpOnly: true,
    secure: process.env.NODE_ENV === "production",
    sameSite: "Strict",
    maxAge: 15 * 60 * 1000,
  })
  .cookie("refresh_token", refreshToken, {
    httpOnly: true,
    secure: process.env.NODE_ENV === "production",
    sameSite: "Strict",
    maxAge: 7 * 24 * 60 * 60 * 1000, 
  })
  .json({ id: user._id, username: user.email, role: user.role });
});

router.post("/refresh", async (req, res) => {
  const {refresh_token} = req.cookies;
  if (!refresh_token) return res.status(401).json({message: "No refresh token"});

  try {
    const payload = verifyRefreshToken(refresh_token);
    const user = await User.findById(payload.id);
    if (!user) return res.status(401).json({message: "Invalid user"})

    //LATER: add active account check

    const isValid = await bcrypt.compare(refresh_token, user.refreshTokenHash || "");

    if (!isValid) return res.status(401).json({message: "Invalid refresh token"});

    const newAccessToken = issueAccessToken(user);
    const rotatedRefreshToken = issueRefreshToken(user);
    user.refreshTokenHash = await bcrypt.hash(rotatedRefreshToken, 10);
    await user.save();

    res
    .cookie("access_token", newAccessToken, {
      httpOnly: true,
      secure: process.env.NODE_ENV === "production",
      sameSite: "Strict",
      maxAge: 15 * 60 * 1000
    })
    .cookie("refresh_token", rotatedRefreshToken, {
      httpOnly: true,
      secure: process.env.NODE_ENV === "production",
      sameSite: "Strict",
      maxAge: 7 * 24 * 60 * 60 * 1000
    });

    res.json({message: "Access token refreshed"});
  } catch {
    res.status(401).json({message: "Invalid refresh token"});
  }
});

router.post("/logout", async (req, res) => {

  try {
    const refreshToken = req.cookies.refresh_token;

  if (refreshToken) {
    const payload = verifyRefreshToken(refreshToken);
    const user = await User.findById(payload.id);

    if (user) {
      user.refreshTokenHash = null;
      await user.save();
    }
  }
 }
  catch (_) {}

 res.clearCookie("access_token").clearCookie("refresh_token").json({message: "Logged out"});
});

export default router;