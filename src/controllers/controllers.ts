import { Request, Response } from 'express';
import { ResultSetHeader, RowDataPacket } from 'mysql2';
import { Task } from '../models/models';

export const createTask = async (req: Request, res: Response) => {
    const { title, description } = req.body;
  
    if (!title || !description) {
      return res.status(400).json({ error: 'Title and description are required.' });
    }
  
    try {
      const connection = req.db;
      const result = await connection.query('INSERT INTO tasks (title, description) VALUES (?, ?)', [title, description]);
        console.log(typeof result);
        console.log("result: ", result);

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