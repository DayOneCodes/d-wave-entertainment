import express from "express";
import jwt from "jsonwebtoken";
import { User } from "../models/user.model.js";

const router = express.Router();

//GENERATE JWT SECRET
const JWT_SECRET = process.env.JWT_SECRET || "superscret";

router.post("/register", async (req, res) => {
  try {
    const {username, password, role} = req.body;

    if (!username || !password) return res.status(400).json({message: "Missing fields"});

    const existingUser = await User.findOne({username});
    if (existingUser) return res.status(400).json({message: "Username already exists"});

    const user = new User({username, passwordHash: password, role: role || "user"});
    await user.save();

    res.status(201).json({message: "User created successfully"});
  } catch (err) {
    console.log(err);
    res.status(500).json({message: "Server error"});
  }
});

router.post("/login", async (req, res) => {
  const {username, password} = req.body;
  const user = await User.findOne({username});
  if (!user) return res.status(400).json({message: "Invalid credentials"});

  const isMatch = await user.comparePassword(password);
  if (!isMatch) return res.status(400).json({message: "Invalid credentials"});

  const accessToken = jwt.sign({id: user._id, role: user.role}, JWT_SECRET, {expiresIn: "15m"});
  const refreshToken = jwt.sign({id: user._id}, JWT_SECRET, {expiresIn: "7d"});

  res
  .cookie("access_token", accessToken, {
    httpOnly: true,
    secure: true,
    sameSite: "Strict",
    maxAge: 15 * 60 * 1000,
  })
  .cookie("refresh_token", refreshToken, {
    httpOnly: true,
    secure: true,
    sameSite: "Strict",
    maxAge: 7 * 24 * 60 * 60 * 1000,
  })
  .json({message: "Login successful"})
});

router.post("/refresh", async (req, res) => {
  const {refresh_token} = req.cookies;
  if (!refresh_token) return res.status(401).json({message: "No refresh token"});

  try {
    const payload = jwt.verify(refresh_token, JWT_SECRET);
    const user = await User.findById(payload.id);
    if (!user) return res.status(401).json({message: "Invalid user"})

    const newAccessToken = jwt.sign({id: user._id, role: user.role}, JWT_SECRET, {expiresIn: "15m"});

    res.cookie("access_token", newAccessToken, {
      httpOnly: true,
      secure: true,
      sameSite: "Strict",
      maxAge: 15 * 60 * 1000
    });

    res.json({message: "Access token refreshed"});
  } catch {
    res.status(401).json({message: "Invalid refresh token"});
  }
});

router.post("/logout", (req, res) => {
  res.clearCookie("access_token").clearCookie("refresh_token").json({message: "Logged out successfully"});
})

export default router;