import { Request, Response } from "express";
import MariaDBCourseReporsitory from "../../../driven/db/mariaDBCourseRepository";
import CourseService from "../../../../core/application/services/courseService";

const repository = new MariaDBCourseReporsitory();
const service = new CourseService(repository);

module.exports = {
    get: async (req: Request, res: Response) => {
        await service.getById(req.params.courseId)
            .then(response => res.send(response))
            .catch(error => res.send({error: error.message}))
    },
    post: async (req: Request, res: Response) => {
        await service.insert({...req.body})
            .then(studentId => res.send({id: studentId}))
            .catch(error => res.send({error: error.message}))
    },
    put: async (req: Request, res: Response) => {
        let course = {
            ...req.body,
            id: req.params.courseId,
        }
        await service.update(course)
            .then(response => res.send(response))
            .catch(error => res.send({error: error.message}))
    },
    delete: async (req: Request, res: Response) => {
        await service.delete(req.params.courseId)
            .then(response => res.send(response))
            .catch(error => res.send({error: error.message}))
    },
};