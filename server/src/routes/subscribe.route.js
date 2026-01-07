import { Router } from "express";
import { createSubscriber } from "../controllers/subscribe.controller.js"
import { newsletterLimiter } from "../middleware/newsLetterLimiter.js";

const router = Router();

router.route("/").post(newsletterLimiter, createSubscriber)

export default router;