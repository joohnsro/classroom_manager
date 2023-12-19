import { Router } from "express";
const courses = require('./courses');
const course = require('./course');
const didacticMaterial = require('./didacticMaterial');
const didacticMaterials = require('./didacticMaterials');
const classSchedule = require('./classSchedule');
const classSchedules = require('./classSchedules');
const professor = require('./professor');
const professors = require('./professors');

const router = Router();

router.get('/courses', courses.get);
router.get('/courses/:courseId', course.get);
router.post('/courses', course.post);
router.put('/courses/:courseId', course.put);
router.delete('/courses/:courseId', course.delete);
router.get('/courses/:courseId/didactic-materials', didacticMaterials.get);
router.post('/courses/:courseId/didactic-materials', didacticMaterials.post);
router.get('/courses/:courseId/didactic-materials/:didacticMaterialId', didacticMaterial.get);
router.put('/courses/:courseId/didactic-materials/:didacticMaterialId', didacticMaterials.put);
router.delete('/courses/:courseId/didactic-materials/:didacticMaterialId', didacticMaterials.delete);
router.get('/courses/:courseId/class-schedules', classSchedules.get);
router.post('/courses/:courseId/class-schedules', classSchedules.post);
router.get('/courses/:courseId/class-schedules/:classScheduleId', classSchedule.get);
router.put('/courses/:courseId/class-schedules/:classScheduleId', classSchedules.put);
router.delete('/courses/:courseId/class-schedules/:classScheduleId', classSchedules.delete);
router.get('/courses/:courseId/professors', professors.get);
router.post('/courses/:courseId/professors', professors.post);
router.get('/courses/:courseId/professors/:professorId', professor.get);
router.put('/courses/:courseId/professors/:professorId', professors.put);
router.delete('/courses/:courseId/professors/:professorId', professors.delete);

module.exports = router