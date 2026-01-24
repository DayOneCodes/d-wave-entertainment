import jwt from "jsonwebtoken";

import {User} from "../models/user.model.js";

const JWT_SECRET = process.env.JWT_SECRET || "seupersecret";

export async function requireAuth(req, res, next){
  const token = req.cookies.access_token;
  if (!token) return res.status(401).json({message: "Unauthorized"});

  try {
    const payload = jwt.verify(token, JWT_SECRET);
    const user = await User.findById(payload.id);
    if (!user) return res.status(401).json({message: "User not found"})

    req.user = user;
    next();
  } catch (err) {
    return res.status(401).json({message: "Invalid token"});
  }
}

export function requireAdmin (req, res, next) {
  if (!req.user || req.user.role !== "admin") return res.status(403).json({message: "Forbidden"});
  next(); 
}