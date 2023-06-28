import express, { Router } from 'express';
import { createTask, getAllTasks, getTaskById, updateTask } from '../controllers/controllers';

const router: Router = express.Router();

router.post('/', createTask);
router.get('/', getAllTasks);
router.get('/:id', getTaskById);
router.put('/:id', updateTask);

export default router;