import { Request, Response } from "express";
import MariaDBStudentReporsitory from "../../../driven/db/mariaDBStudentRepository";
import StudentService from "../../../../core/application/services/studentService";

const repository = new MariaDBStudentReporsitory();
const service = new StudentService(repository);

module.exports = {
    get: async (req: Request, res: Response) => {
        await service.getAcademicHistoryById(req.params.academicHistoryId)
            .then(response => res.send(response))
            .catch(error => res.send({error: error.message}))
    },
};