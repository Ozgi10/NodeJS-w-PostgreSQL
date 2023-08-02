import express from 'express';
import { getStudents, getStudentById, createStudent, deleteStudent, updateStudent } from './controllers.js';

const router = express.Router();

router.get('/', getStudents);
router.post('/', createStudent);
router.get('/:id', getStudentById);
router.delete('/:id', deleteStudent);
router.put('/:id', updateStudent);

export default router;
