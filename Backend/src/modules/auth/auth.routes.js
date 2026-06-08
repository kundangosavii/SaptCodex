import { Router } from "express";
import { SignupController, LoginController, LogoutController } from "./auth.controller.js";
import { SignupValidation, LoginValidation } from "./auth.validation.js";



const router = Router();

router.post('/signup', SignupValidation, SignupController);
router.post('/login', LoginValidation, LoginController);
router.post('/logout', LogoutController);

export default router;