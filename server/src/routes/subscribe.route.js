import { Router } from "express";
import { createSubscriber } from "../controllers/subscribe.controller.js"

const router = Router();

router.route("/").post(createSubscriber)

export default router;