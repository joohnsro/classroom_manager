import { Request, Response } from "express";
import MariaDBCourseReporsitory from "../../../driven/db/mariaDBCourseRepository";
import CourseService from "../../../../core/application/services/courseService";

const repository = new MariaDBCourseReporsitory();
const service = new CourseService(repository);

module.exports = {
    get: async (req: Request, res: Response) => {
        await service.getAllDidacticMaterialsByCourseId(req.params.courseId)
            .then(response => res.send(response))
            .catch(error => res.send({error: error.message}))
    },
    post: async (req: Request, res: Response) => {
        let didacticMaterial = {
            ...req.body,
            courseId: req.params.courseId
        }
        await service.addDidacticMaterial(didacticMaterial)
            .then(didacticMaterialId => res.send({id: didacticMaterialId}))
            .catch(error => res.send({error: error.message}))
    },
    put: async (req: Request, res: Response) => {
        let didacticMaterial = {
            ...req.body,
            courseId: req.params.courseId,
            id: req.params.didacticMaterialId
        }
        await service.updateDidacticMaterial(didacticMaterial)
            .then(response => res.send(response))
            .catch(error => res.send({error: error.message}))
    },
    delete: async (req: Request, res: Response) => {
        await service.deleteDidacticMaterial(req.params.didacticMaterialId)
            .then(response => res.send(response))
            .catch(error => res.send({error: error.message}))
    },
};