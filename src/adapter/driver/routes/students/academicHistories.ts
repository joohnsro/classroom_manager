import { Request, Response } from "express";
import MariaDBStudentReporsitory from "../../../driven/db/mariaDBStudentRepository";
import StudentService from "../../../../core/application/services/studentService";

const repository = new MariaDBStudentReporsitory();
const service = new StudentService(repository);

module.exports = {
    get: async (req: Request, res: Response) => {
        await service.getAllAcademicHistoryByStudentId(req.params.studentId)
            .then(response => res.send(response))
            .catch(error => res.send({error: error.message}))
    },
    post: async (req: Request, res: Response) => {
        let academicHistory = {
            ...req.body,
            studenId: req.params.studentId
        }
        await service.addAcademicHistory(academicHistory)
            .then(studentId => res.send({id: studentId}))
            .catch(error => res.send({error: error.message}))
    },
    put: async (req: Request, res: Response) => {
        let academicHistory = {
            ...req.body,
            studenId: req.params.studentId,
            id: req.params.academicHistoryId
        }
        await service.updateAcademicHistory(academicHistory)
            .then(response => res.send(response))
            .catch(error => res.send({error: error.message}))
    },
    delete: async (req: Request, res: Response) => {
        await service.deleteAcademicHistory(req.params.academicHistoryId)
            .then(response => res.send(response))
            .catch(error => res.send({error: error.message}))
    },
};