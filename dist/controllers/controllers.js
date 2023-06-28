"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.updateTask = exports.getTaskById = exports.getAllTasks = exports.createTask = void 0;
const createTask = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const { title, description } = req.body;
    if (!title || !description) {
        return res.status(400).json({ error: 'Title and description are required.' });
    }
    try {
        const connection = req.db;
        const result = yield connection.query('INSERT INTO tasks (title, description) VALUES (?, ?)', [title, description]);
        // console.log(typeof result);
        // console.log("result: ", result);
        // const parseresult = JSON.parse(result.insertId)
        const insertId = result[0].insertId;
        const newTask = {
            id: insertId.toString(),
            title,
            description,
            status: 'pending',
        };
        return res.status(201).json(newTask);
    }
    catch (error) {
        console.error(error);
        return res.status(500).json({ error: 'An error occurred while creating the task.' });
    }
});
exports.createTask = createTask;
const getAllTasks = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const connection = req.db;
        const [results] = yield connection.query('SELECT * FROM tasks');
        return res.json(results);
    }
    catch (error) {
        console.error(error);
        return res.status(500).json({ error: 'An error occurred while retrieving tasks.' });
    }
});
exports.getAllTasks = getAllTasks;
const getTaskById = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const taskId = req.params.id;
    try {
        const [rows] = yield req.db.query('SELECT * FROM tasks WHERE id = ?', [taskId]);
        if (!Array.isArray(rows) || rows.length === 0) {
            return res.status(404).json({ error: 'Task not found' });
        }
        const row = rows[0];
        console.log("row: ", row);
        const task = {
            id: row.id.toString(),
            title: row.title,
            description: row.description,
            status: row.status,
        };
        return res.json(task);
    }
    catch (error) {
        console.error('Error retrieving task:', error);
        return res.status(500).json({ error: 'Failed to retrieve task.' });
    }
});
exports.getTaskById = getTaskById;
const updateTask = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const taskId = req.params.id;
    const { title, description, status } = req.body;
    try {
        let updatedTitle = title;
        let updatedDescription = description;
        let updatedStatus = status;
        const [existingTask] = yield req.db.query('SELECT * FROM tasks WHERE id = ?', [taskId]);
        if (!title) {
            updatedTitle = existingTask[0].title;
        }
        if (!description) {
            updatedDescription = existingTask[0].description;
        }
        if (!status) {
            updatedStatus = existingTask[0].status;
        }
        yield req.db.query('UPDATE tasks SET title = ?, description = ?, status = ? WHERE id = ?', [updatedTitle, updatedDescription, updatedStatus, taskId]);
        const [updatedTask] = yield req.db.query('SELECT * FROM tasks WHERE id = ?', [taskId]);
        return res.json(updatedTask[0]);
    }
    catch (error) {
        console.error('Error updating task:', error);
        return res.status(500).json({ error: 'Failed to update task.' });
    }
});
exports.updateTask = updateTask;
