import { Router } from "express";
import { createEvent, readEvents } from "../controllers/events.controller.js";

const router = Router();

router.route("/").get(readEvents);
router.route("/create-event").post(createEvent);

export default router;