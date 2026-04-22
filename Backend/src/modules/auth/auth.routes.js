import { Router } from "express";
import { SignupController } from "./auth.controller.js";
import { SignupValidation } from "./auth.validation.js";
import { LoginValidation } from "./auth.validation.js";
import { LoginController } from "./auth.controller.js";

const router = Router();

router.post('/signup', SignupValidation, SignupController);
router.post('/login', LoginValidation, LoginController);

export default router;