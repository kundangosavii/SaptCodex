import { Router } from 'express';
import { OnboardController } from './user.controller.js';
import { OnboardValidation } from './user.validation.js';
import { verifyJWT } from '../../middleware/auth.middleware.js';

const router = Router();

router.post('/onboard',verifyJWT, OnboardValidation ,OnboardController);

export default router;