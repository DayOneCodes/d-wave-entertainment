import { Router } from "express";
import { uploadImage, createEvent, readEvents, deleteEvent, updateEvent } from "../controllers/events.controller.js";
import upload from "../middleware/upload.middleware.js";
import { verifyToken } from "../middleware/verifyToken.js";
import { verifyRole } from "../middleware/verifyRole.js";


const router = Router();

router.route("/").get(readEvents);
router.route("/upload-image").post(verifyToken, verifyRole("admin"), upload.single("imageUrl"), uploadImage)
router.route("/create-event").post(verifyToken, verifyRole("admin"), createEvent);
router.route("/delete-event/:id").delete(verifyToken, verifyRole("admin"), deleteEvent)
router.route("/update-event/:id").put(verifyToken, verifyRole("admin"), updateEvent);

export default router;