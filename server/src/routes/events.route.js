import { Router } from "express";
import { createEvent } from "../controllers/events.controller.js";

const router = Router();

router.route("/create-event").post(createEvent);

export default router;