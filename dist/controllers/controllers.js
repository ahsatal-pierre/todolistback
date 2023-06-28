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
exports.getAllTasks = exports.createTask = void 0;
const createTask = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const { title, description } = req.body;
    if (!title || !description) {
        return res.status(400).json({ error: 'Title and description are required.' });
    }
    try {
        const connection = req.db;
        const result = yield connection.query('INSERT INTO tasks (title, description) VALUES (?, ?)', [title, description]);
        console.log(typeof result);
        console.log("result: ", result);
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
