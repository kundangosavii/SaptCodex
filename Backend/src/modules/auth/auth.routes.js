import { Router } from "express";
import { SignupController, LoginController, LogoutController, verifyEmailController } from "./auth.controller.js";
import { SignupValidation, LoginValidation } from "./auth.validation.js";



const router = Router();

router.post('/signup', SignupValidation, SignupController);
router.get('/verify-email', verifyEmailController);
router.post('/login', LoginValidation, LoginController);
router.post('/logout', LogoutController);

export default router;