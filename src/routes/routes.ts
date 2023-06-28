import express, { Router } from 'express';
import { createTask, getAllTasks, getTaskById } from '../controllers/controllers';

const router: Router = express.Router();

router.post('/', createTask);
router.get('/', getAllTasks);
router.get('/:id', getTaskById);

export default router;