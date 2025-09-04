import express from "express";
import { getSalesAnalytics } from "./analytics.Controller.js";

const router = express.Router();

router.get("/sales", getSalesAnalytics);

export default router;