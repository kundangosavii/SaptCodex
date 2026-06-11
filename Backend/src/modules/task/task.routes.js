import { Router } from 'express'; 
import { getTasksController } from './task.controller.js';
import { verifyJWT } from '../../middleware/auth.middleware.js';

const router = Router();

router.get('/gettasks', verifyJWT, getTasksController);

export default router;