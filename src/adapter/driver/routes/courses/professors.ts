import { Request, Response } from "express";
import MariaDBCourseReporsitory from "../../../driven/db/mariaDBCourseRepository";
import CourseService from "../../../../core/application/services/courseService";

const repository = new MariaDBCourseReporsitory();
const service = new CourseService(repository);

module.exports = {
    get: async (req: Request, res: Response) => {
        await service.getAllProfessorsByCourseId(req.params.courseId)
            .then(response => res.send(response))
            .catch(error => res.send({error: error.message}))
    },
    post: async (req: Request, res: Response) => {
        let professor = {
            ...req.body,
            courseId: req.params.courseId
        }
        await service.addProfessor(professor)
            .then(professorId => res.send({id: professorId}))
            .catch(error => res.send({error: error.message}))
    },
    put: async (req: Request, res: Response) => {
        let professor = {
            ...req.body,
            courseId: req.params.courseId,
            id: req.params.professorId
        }
        await service.updateProfessor(professor)
            .then(response => res.send(response))
            .catch(error => res.send({error: error.message}))
    },
    delete: async (req: Request, res: Response) => {
        await service.deleteProfessor(req.params.professorId)
            .then(response => res.send(response))
            .catch(error => res.send({error: error.message}))
    },
};