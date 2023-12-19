import {Student , AcademicHistory} from "../../domain/student";

export default interface StudentRepository {
    insert(student: Student): Promise<string>;
    getById(id: string): Promise<Student>;
    update(student: Student): Promise<boolean>;
    delete(id: string): Promise<boolean>;
    getAll(): Promise<Student[]>;
    getAllAcademicHistoryByStudentId(id: string): Promise<AcademicHistory[]>;
    addAcademicHistory(academicHistory: AcademicHistory): Promise<string>;
    getAcademicHistoryById(id: string): Promise<AcademicHistory>;
    updateAcademicHistory(academicHistory: AcademicHistory): Promise<boolean>;
    deleteAcademicHistory(id: string): Promise<boolean>;
}