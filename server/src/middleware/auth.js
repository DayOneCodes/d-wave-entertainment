import jwt from "jsonwebtoken";
import { verifyAccessToken } from "../services/token.service.js";

import {User} from "../models/user.model.js";

export async function requireAuth(req, res, next){
  const token = req.cookies.access_token;
  if (!token) return res.status(401).json({message: "Unauthorized"});

  try {
    const payload = verifyAccessToken(token);
    const user = await User.findById(payload.id);
    if (!user) return res.status(401).json({message: "User not found"})

    req.user = user;
    req.auth = payload;
    next();
  } catch (err) {
    return res.status(401).json({message: "Invalid token"});
  }
}

export function requireAdmin (req, res, next) {
  if (!req.user || req.user.role !== "admin" || req.auth.audience !== "d-wave-ent-admins") return res.status(403).json({message: "Forbidden"});
  next(); 
}