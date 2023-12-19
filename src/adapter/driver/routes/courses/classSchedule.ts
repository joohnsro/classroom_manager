import { Request, Response } from "express";
import MariaDBCourseReporsitory from "../../../driven/db/mariaDBCourseRepository";
import CourseService from "../../../../core/application/services/courseService";

const repository = new MariaDBCourseReporsitory();
const service = new CourseService(repository);

module.exports = {
    get: async (req: Request, res: Response) => {
        await service.getClassScheduleById(req.params.classScheduleId)
            .then(response => res.send(response))
            .catch(error => res.send({error: error.message}))
    },
};