import { Router } from 'express';
import { OnboardController } from './user.controller.js';
import { OnboardValidation } from './user.validation.js';

const router = Router();

router.post('/onboard', OnboardValidation ,OnboardController);

export default router;