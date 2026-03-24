import express from "express";
import { signUp, login, logout, checkAuth, verifyEmail, } from "../controllers/auth.controller.js";
import { verifyToken } from "../middleware/verifyToken.js";
import { verifyRole } from "../middleware/verifyRole.js";

const route = express.Router();

route.get("/check-auth", verifyToken, checkAuth)
route.post("/signup", signUp);
route.post("/login", login);
route.post("/logout", verifyToken, logout);
route.post("/verify-email", verifyEmail);

export default route;