import { Router } from 'express';
import { OnboardController, getUserController } from './user.controller.js';
import { OnboardValidation } from './user.validation.js';
import { verifyJWT } from '../../middleware/auth.middleware.js';

const router = Router();

router.post('/onboard',verifyJWT, OnboardValidation ,OnboardController);
router.get('/getuser', verifyJWT, getUserController);
router.post('/getuser', verifyJWT, getUserController);

export default router;