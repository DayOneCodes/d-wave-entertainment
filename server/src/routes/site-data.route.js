import { Router } from "express";
import { readSiteData } from "../controllers/site-data.controller";

const router = Router();

router.route("/").get(readSiteData);

export default router;