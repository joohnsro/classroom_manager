"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const students = require('./routes/students');
const courses = require('./routes/courses');
const router = (0, express_1.Router)();
router.use(students);
router.use(courses);
module.exports = router;
