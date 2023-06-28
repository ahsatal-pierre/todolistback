import express, { Router } from 'express';
import { createTask } from '../controllers/controllers';

const router: Router = express.Router();

router.post('/', createTask);

export default router;