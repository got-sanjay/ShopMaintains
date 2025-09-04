// src/modules/orders/order.routes.js
import { Router } from "express";
import { createOrder, getOrders } from "./order.controller.js";
import { requireAuth } from "../../middlewares/auth.js";

const router = Router();

router.post("/", requireAuth, createOrder);
router.get("/", requireAuth, getOrders);

export default router;
