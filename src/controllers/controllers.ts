import { Request, Response } from 'express';
import { ResultSetHeader, RowDataPacket } from 'mysql2';
import { Task, TaskStatus } from '../models/models';

export const createTask = async (req: Request, res: Response) => {
    const { title, description } = req.body;
  
    if (!title || !description) {
      return res.status(400).json({ error: 'Title and description are required.' });
    }
  
    try {
      const connection = req.db;
      const result = await connection.query('INSERT INTO tasks (title, description) VALUES (?, ?)', [title, description]);
       // console.log(typeof result);
       // console.log("result: ", result);

        // const parseresult = JSON.parse(result.insertId)
        const insertId = (result[0] as ResultSetHeader).insertId;
        const newTask = {
        id: insertId.toString(),
        title,
        description,
        status: 'pending',
      };
  
      return res.status(201).json(newTask);
    } catch (error) {
      console.error(error);
      return res.status(500).json({ error: 'An error occurred while creating the task.' });
    }
  };

 export const getAllTasks = async (req: Request, res: Response) => {
    try {
      const connection = req.db;
      const [results] = await connection.query('SELECT * FROM tasks');
      return res.json(results);
    } catch (error) {
      console.error(error);
      return res.status(500).json({ error: 'An error occurred while retrieving tasks.' });
    }
  };
  
  export const getTaskById = async (req: Request, res: Response) => {
    const taskId = req.params.id;
  
    try {
      const [rows] = await req.db.query('SELECT * FROM tasks WHERE id = ?', [taskId]);
  
      if (!Array.isArray(rows) || rows.length === 0) {
        return res.status(404).json({ error: 'Task not found' });
      }
  
      const row = (rows[0] as RowDataPacket);
      console.log("row: ", row);
   
       const task: Task = {
        id: row.id.toString(),
        title: row.title,
        description: row.description,
        status: row.status as TaskStatus,
      };
  
      return res.json(task) ;
    } catch (error) {
      console.error('Error retrieving task:', error);
      return res.status(500).json({ error: 'Failed to retrieve task.' });
    }
  };