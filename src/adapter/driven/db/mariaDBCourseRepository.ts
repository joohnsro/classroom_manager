import connection from "./connection";
import {Course, DidacticMaterial, ClassSchedule, Professor} from "../../../core/domain/course";
import CourseRepository from "../../../core/application/ports/courseRepository";

export default class MariaDBCourseRepository implements CourseRepository {
    
    async insert({name}: Course): Promise<string> {
        let conn = await connection();
        return await conn.query(
            `INSERT INTO courses (name) VALUES ('${name}')`, 
            (err: any, rows: any, meta: any) => {
                if (err) return err;
                return rows;
            })
            .then((id: any) => id.insertId)
    }

    async getById(id: string): Promise<Course> {
        let conn = await connection();
        return await conn.query(
            `SELECT * FROM courses WHERE id = ${parseInt(id)}`, 
            (err: any, rows: Course[], meta: any) => {
                if (err) return err;
                if ( rows.length == 0 ) {
                    throw new Error(`Course with id ${id} not found`);
                }
                return rows;
            })
            .then((response:Course[]) => response[0]);
    }

    async update({id, name}: Course): Promise<boolean> {
        let conn = await connection();
        return await conn.query(
            `UPDATE courses SET name = '${name}' WHERE id = ${parseInt(String(id))}`, 
            (err: any, rows: Course[], meta: any) => {
                if (err) return err;
                return rows;
            })
            .then((response: any) => response.affectedRows > 0);
    }

    async delete(id: string): Promise<boolean> {
        let conn = await connection();
        return await conn.query(
            `DELETE FROM courses WHERE id = ${parseInt(id)}`, 
            (err: any, rows: any, meta: any) => {
                if (err) return err;
                return rows;
            })
            .then((response: any) => response.affectedRows > 0);
    }

    async getAll(): Promise<Course[]> {
        let conn = await connection();
        return await conn.query(
            'SELECT * FROM courses', 
            (err: any, rows: Course[], meta: any) => {
                if (err) return err;
                return rows;
            });
    }
    
    async getAllDidacticMaterialsByCourseId(id: string): Promise<DidacticMaterial[]> {
        let conn = await connection();
        return await conn.query(
            `SELECT * FROM didactic_materials WHERE courseId = ${parseInt(id)}`, 
            (err: any, rows: DidacticMaterial[], meta: any) => {
                if (err) return err;
                if ( rows.length == 0 ) {
                    throw new Error(`Didactic material with id ${id} not found`);
                }
                return rows;
            });
    }

    async addDidacticMaterial({courseId, type, content}: DidacticMaterial): Promise<string> {
        let conn = await connection();
        return await conn.query(
            `INSERT INTO didactic_materials (courseId, type, content) 
            VALUES ('${courseId}', '${type}', '${content}')`, 
            (err: any, rows: DidacticMaterial[], meta: any) => {
                if (err) return err;
                return rows;
            })
            .then((id: any) => id.insertId);
    }

    async getDidacticMaterialById(id: string): Promise<DidacticMaterial> {
        let conn = await connection();
        return await conn.query(
            `SELECT * FROM didactic_materials WHERE id = ${parseInt(id)}`, 
            (err: any, rows: DidacticMaterial[], meta: any) => {
                if (err) return err;
                return rows;
            })
            .then((response:DidacticMaterial[]) => response[0]);
    }

    async updateDidacticMaterial({id, type, content}: DidacticMaterial): Promise<boolean> {
        let conn = await connection();
        return await conn.query(
            `UPDATE didactic_materials SET type = '${type}', content = '${content}'
            WHERE id = ${parseInt(String(id))}`, 
            (err: any, rows: DidacticMaterial[], meta: any) => {
                if (err) return err;
                return rows;
            })
            .then((response: any) => response.affectedRows > 0);
    }

    async deleteDidacticMaterial(id: string): Promise<boolean> {
        let conn = await connection();
        return await conn.query(
            `DELETE FROM didactic_materials WHERE id = ${parseInt(id)}`, 
            (err: any, rows: DidacticMaterial, meta: any) => {
                if (err) return err;
                return rows;
            })
            .then((response: any) => response.affectedRows > 0);
    }

    async getAllClassSchedulesByCourseId(id: string): Promise<ClassSchedule[]> {
        let conn = await connection();
        return await conn.query(
            `SELECT * FROM class_schedules WHERE courseId = ${parseInt(id)}`, 
            (err: any, rows: ClassSchedule[], meta: any) => {
                if (err) return err;
                if ( rows.length == 0 ) {
                    throw new Error(`Class schedule with id ${id} not found`);
                }
                return rows;
            });
    }

    async addClassSchedule({courseId, from, to}: ClassSchedule): Promise<string> {
        let conn = await connection();
        return await conn.query(
            `INSERT INTO class_schedules (courseId, fromDate, toDate) 
            VALUES ('${courseId}', '${from}', '${to}')`, 
            (err: any, rows: ClassSchedule[], meta: any) => {
                if (err) return err;
                return rows;
            })
            .then((id: any) => id.insertId);
    }

    async getClassScheduleById(id: string): Promise<ClassSchedule> {
        let conn = await connection();
        return await conn.query(
            `SELECT * FROM class_schedules WHERE id = ${parseInt(id)}`, 
            (err: any, rows: ClassSchedule[], meta: any) => {
                if (err) return err;
                return rows;
            })
            .then((response:ClassSchedule[]) => response[0]);
    }

    async updateClassSchedule({id, from, to}: ClassSchedule): Promise<boolean> {
        let conn = await connection();
        return await conn.query(
            `UPDATE class_schedules SET fromDate = ${from}, toDate = '${to}'
            WHERE id = ${parseInt(String(id))}`, 
            (err: any, rows: ClassSchedule[], meta: any) => {
                if (err) return err;
                return rows;
            })
            .then((response: any) => response.affectedRows > 0);
    }

    async deleteClassSchedule(id: string): Promise<boolean> {
        let conn = await connection();
        return await conn.query(
            `DELETE FROM class_schedules WHERE id = ${parseInt(id)}`, 
            (err: any, rows: ClassSchedule, meta: any) => {
                if (err) return err;
                return rows;
            })
            .then((response: any) => response.affectedRows > 0);
    }
    
    async getAllProfessorsByCourseId(id: string): Promise<Professor[]> {
        let conn = await connection();
        return await conn.query(
            `SELECT * FROM professors WHERE courseId = ${parseInt(id)}`, 
            (err: any, rows: Professor[], meta: any) => {
                if (err) return err;
                if ( rows.length == 0 ) {
                    throw new Error(`Class schedule with id ${id} not found`);
                }
                return rows;
            });
    }

    async addProfessor({courseId, name}: Professor): Promise<string> {
        let conn = await connection();
        return await conn.query(
            `INSERT INTO professors (courseId, name) 
            VALUES ('${courseId}', '${name}')`, 
            (err: any, rows: Professor[], meta: any) => {
                if (err) return err;
                return rows;
            })
            .then((id: any) => id.insertId);
    }

    async getProfessorById(id: string): Promise<Professor> {
        let conn = await connection();
        return await conn.query(
            `SELECT * FROM professors WHERE id = ${parseInt(id)}`, 
            (err: any, rows: Professor[], meta: any) => {
                if (err) return err;
                return rows;
            })
            .then((response:Professor[]) => response[0]);
    }

    async updateProfessor({id, name}: Professor): Promise<boolean> {
        let conn = await connection();
        return await conn.query(
            `UPDATE professors SET name = '${name}' WHERE id = ${parseInt(String(id))}`, 
            (err: any, rows: Professor[], meta: any) => {
                if (err) return err;
                return rows;
            })
            .then((response: any) => response.affectedRows > 0);
    }

    async deleteProfessor(id: string): Promise<boolean> {
        let conn = await connection();
        return await conn.query(
            `DELETE FROM professors WHERE id = ${parseInt(id)}`, 
            (err: any, rows: Professor, meta: any) => {
                if (err) return err;
                return rows;
            })
            .then((response: any) => response.affectedRows > 0);
    }
}