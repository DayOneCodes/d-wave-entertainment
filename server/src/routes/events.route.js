import { Router } from "express";
import { createEvent, readEvents, deleteEvent, updateEvent } from "../controllers/events.controller.js";
import { requireAuth, requireAdmin } from "../middleware/auth.js";

const router = Router();

router.route("/").get(readEvents);
router.route("/create-event").post(requireAuth, requireAdmin, createEvent);
router.route("/delete-event/:id").delete(requireAuth, requireAdmin, deleteEvent)
router.route("/update-event/:id").put(requireAuth, requireAdmin, updateEvent);
export default router;