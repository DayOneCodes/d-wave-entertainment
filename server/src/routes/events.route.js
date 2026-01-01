import { Router } from "express";
import { createEvent, readEvents, deleteEvent } from "../controllers/events.controller.js";

const router = Router();

router.route("/").get(readEvents);
router.route("/create-event").post(createEvent);
router.route("/delete-event:id").delete(deleteEvent)

export default router;