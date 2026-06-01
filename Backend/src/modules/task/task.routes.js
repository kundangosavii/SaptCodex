import { Router } from 'express'; 
import { getTasksController } from './task.controller.js';

const router = Router();

router.post('/gettasks', getTasksController);

export default router;