import { Router } from "express";
const router = Router();
import { register } from "../controller/user.controller.js";
router.route("/register").post(register);

export default router;
