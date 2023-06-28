"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const controllers_1 = require("../controllers/controllers");
const router = express_1.default.Router();
router.post('/', controllers_1.createTask);
router.get('/', controllers_1.getAllTasks);
router.get('/:id', controllers_1.getTaskById);
exports.default = router;
