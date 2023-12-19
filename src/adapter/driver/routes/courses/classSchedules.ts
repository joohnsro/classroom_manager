import { Request, Response } from "express";
import MariaDBCourseReporsitory from "../../../driven/db/mariaDBCourseRepository";
import CourseService from "../../../../core/application/services/courseService";

const repository = new MariaDBCourseReporsitory();
const service = new CourseService(repository);

module.exports = {
    get: async (req: Request, res: Response) => {
        await service.getAllClassSchedulesByCourseId(req.params.courseId)
            .then(response => res.send(response))
            .catch(error => res.send({error: error.message}))
    },
    post: async (req: Request, res: Response) => {
        let classSchedule = {
            ...req.body,
            courseId: req.params.courseId
        }
        await service.addClassSchedule(classSchedule)
            .then(classScheduleId => res.send({id: classScheduleId}))
            .catch(error => res.send({error: error.message}))
    },
    put: async (req: Request, res: Response) => {
        let classSchedule = {
            ...req.body,
            courseId: req.params.courseId,
            id: req.params.classScheduleId
        }
        await service.updateClassSchedule(classSchedule)
            .then(response => res.send(response))
            .catch(error => res.send({error: error.message}))
    },
    delete: async (req: Request, res: Response) => {
        await service.deleteClassSchedule(req.params.classScheduleId)
            .then(response => res.send(response))
            .catch(error => res.send({error: error.message}))
    },
};