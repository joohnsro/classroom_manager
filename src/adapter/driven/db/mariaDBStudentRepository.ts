import connection from "./connection";
import {Student , AcademicHistory} from "../../../core/domain/student";
import StudentRepository from "../../../core/application/ports/studentRepository";

export default class MariaDBStudentRepository implements StudentRepository {
    
    async insert({name, age, email, phone}: Student): Promise<string> {
        let conn = await connection();
        return await conn.query(
            `INSERT INTO students
            (name, age, email, phone)
            VALUES ('${name}', ${age}, '${email}', '${phone}')`, 
            (err: any, rows: any, meta: any) => {
                if (err) return err;
                return rows;
            })
            .then((id: any) => id.insertId)
    }

    async getById(id: string): Promise<Student> {
        let conn = await connection();
        return await conn.query(
            `SELECT * FROM students WHERE id = ${parseInt(id)}`, 
            (err: any, rows: Student[], meta: any) => {
                if (err) return err;
                if ( rows.length == 0 ) {
                    throw new Error(`Student with id ${id} not found`);
                }
                return rows;
            })
            .then((response:Student[]) => response[0]);
    }

    async update({id, name, age, email, phone}: Student): Promise<boolean> {
        let conn = await connection();
        return await conn.query(
            `UPDATE students 
            SET name = '${name}', age = ${age}, email = '${email}', phone = '${phone}' 
            WHERE id = ${parseInt(String(id))}`, 
            (err: any, rows: Student[], meta: any) => {
                if (err) return err;
                return rows;
            })
            .then((response: any) => response.affectedRows > 0);
    }

    async delete(id: string): Promise<boolean> {
        let conn = await connection();
        return await conn.query(
            `DELETE FROM students WHERE id = ${parseInt(id)}`, 
            (err: any, rows: any, meta: any) => {
                if (err) return err;
                return rows;
            })
            .then((response: any) => response.affectedRows > 0);
    }

    async getAll(): Promise<Student[]> {
        let conn = await connection();
        return await conn.query(
            'SELECT * FROM students', 
            (err: any, rows: Student[], meta: any) => {
                if (err) return err;
                return rows;
            });
    }
    
    async getAllAcademicHistoryByStudentId(id: string): Promise<AcademicHistory[]> {
        let conn = await connection();
        return await conn.query(
            `SELECT * FROM academic_histories WHERE studentId = ${parseInt(id)}`, 
            (err: any, rows: AcademicHistory[], meta: any) => {
                if (err) return err;
                if ( rows.length == 0 ) {
                    throw new Error(`Academic histories with id ${id} not found`);
                }
                return rows;
            });
    }

    async addAcademicHistory({studentId, year, subject, grade, situation}: AcademicHistory): Promise<string> {
        let conn = await connection();
        return await conn.query(
            `INSERT INTO academic_histories (studentId, year, subject, grade, situation) 
            VALUES ('${studentId}', '${year}', '${subject}', '${grade}', '${situation}')`, 
            (err: any, rows: AcademicHistory[], meta: any) => {
                if (err) return err;
                return rows;
            })
            .then((id: any) => id.insertId);
    }

    async getAcademicHistoryById(id: string): Promise<AcademicHistory> {
        let conn = await connection();
        return await conn.query(
            `SELECT * FROM academic_histories WHERE id = ${parseInt(id)}`, 
            (err: any, rows: AcademicHistory[], meta: any) => {
                if (err) return err;
                return rows;
            })
            .then((response:AcademicHistory[]) => response[0]);
    }

    async updateAcademicHistory({id, year, subject, grade, situation}: AcademicHistory): Promise<boolean> {
        let conn = await connection();
        return await conn.query(
            `UPDATE academic_histories
            SET year = ${year}, subject = '${subject}', grade = '${grade}', situation = '${situation}'
            WHERE id = ${parseInt(String(id))}`, 
            (err: any, rows: AcademicHistory[], meta: any) => {
                if (err) return err;
                return rows;
            })
            .then((response: any) => response.affectedRows > 0);
    }

    async deleteAcademicHistory(id: string): Promise<boolean> {
        let conn = await connection();
        return await conn.query(
            `DELETE FROM academic_histories WHERE id = ${parseInt(id)}`, 
            (err: any, rows: AcademicHistory, meta: any) => {
                if (err) return err;
                return rows;
            })
            .then((response: any) => response.affectedRows > 0);
    }
    
}