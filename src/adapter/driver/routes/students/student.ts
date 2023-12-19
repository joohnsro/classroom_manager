import { Request, Response } from "express";
import MariaDBStudentReporsitory from "../../../driven/db/mariaDBStudentRepository";
import StudentService from "../../../../core/application/services/studentService";

const repository = new MariaDBStudentReporsitory();
const service = new StudentService(repository);

module.exports = {
    get: async (req: Request, res: Response) => {
        await service.getById(req.params.studentId)
            .then(response => res.send(response))
            .catch(error => res.send({error: error.message}))
    },
    post: async (req: Request, res: Response) => {
        await service.insert({...req.body})
            .then(studentId => res.send({id: studentId}))
            .catch(error => res.send({error: error.message}))
    },
    put: async (req: Request, res: Response) => {
        let student = {
            ...req.body,
            id: req.params.studentId,
        }
        await service.update(student)
            .then(response => res.send(response))
            .catch(error => res.send({error: error.message}))
    },
    delete: async (req: Request, res: Response) => {
        await service.delete(req.params.studentId)
            .then(response => res.send(response))
            .catch(error => res.send({error: error.message}))
    },
};