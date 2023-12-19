import { Router } from "express";
const student = require('./student');
const students = require('./students');
const academicHistory = require('./academicHistory')
const academicHistories = require('./academicHistories');

const router = Router();

router.get('/students', students.get);
router.get('/students/:studentId', student.get);
router.post('/students', student.post);
router.put('/students/:studentId', student.put);
router.delete('/students/:studentId', student.delete);
router.get('/students/:studentId/academic-histories', academicHistories.get);
router.post('/students/:studentId/academic-histories', academicHistories.post);
router.get('/students/:studentId/academic-histories/:academicHistoryId', academicHistory.get);
router.put('/students/:studentId/academic-histories/:academicHistoryId', academicHistories.put);
router.delete('/students/:studentId/academic-histories/:academicHistoryId', academicHistories.delete);

module.exports = router