import express from "express";
import { googlePlayScrapperController } from "../controllers/googlePlayScrapperController.js";

const router = express.Router();

// API: GET /api/app-details?appId=com.google.android.apps.translate
router.get("/app-details", googlePlayScrapperController);

export default router;
