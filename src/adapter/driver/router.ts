import { Router } from "express";
const students = require('./routes/students');
const courses = require('./routes/courses');

const router = Router();

router.use(students)
router.use(courses);

module.exports = router;