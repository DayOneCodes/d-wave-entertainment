import { Router } from "express";
import { readSiteData } from "../controllers/site-data.controller.js";

const router = Router();

router.route("/").get(readSiteData);

export default router;