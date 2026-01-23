import { Router } from "express";

const router = Router();

router.route("/initialize").post();
router.route("/webhook").post()

export default router;