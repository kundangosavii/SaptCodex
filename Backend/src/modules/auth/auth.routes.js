import { Router } from "express";
import { SignupController } from "./auth.controller.js";
import { SignupValidation } from "./auth.validation.js";

const router = Router();

router.post('/signup', SignupValidation, SignupController);

export default router;