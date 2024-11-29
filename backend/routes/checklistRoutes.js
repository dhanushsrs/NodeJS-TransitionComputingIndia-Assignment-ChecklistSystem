import express from "express";
import { checkApplication } from "../controllers/checklistController.js";

const router = express.Router();

router.get("/checklist", checkApplication);

export default router;
