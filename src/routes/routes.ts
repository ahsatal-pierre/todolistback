import express, { Router } from 'express';
import { createTask, getAllTasks } from '../controllers/controllers';

const router: Router = express.Router();

router.post('/', createTask);
router.get('/', getAllTasks);

export default router;