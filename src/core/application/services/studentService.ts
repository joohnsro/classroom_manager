import { Student, AcademicHistory } from "../../domain/student";
import StudentRepository from "../ports/studentRepository";

export default class StudentService {
    constructor(private readonly studentRepository: StudentRepository) {}

    async insert(student: Student) {
        return await this.studentRepository.insert(student);
    }

    async getById(studentId: string) {
        return await this.studentRepository.getById(studentId);
    }

    async update(student: Student) {
        return await this.studentRepository.update(student);
    }

    async delete(studentId: string) {
        return await this.studentRepository.delete(studentId);
    }

    async getAll() {
        return await this.studentRepository.getAll();
    }

    async getAllAcademicHistoryByStudentId(id: string) {
        return await this.studentRepository.getAllAcademicHistoryByStudentId(id);
    }

    async addAcademicHistory(academicHistory: AcademicHistory) {
        return await this.studentRepository.addAcademicHistory(academicHistory);
    }

    async getAcademicHistoryById(id: string) {
        return await this.studentRepository.getAcademicHistoryById(id);
    }

    async updateAcademicHistory(academicHistory: AcademicHistory) {
        return await this.studentRepository.updateAcademicHistory(academicHistory);
    }

    async deleteAcademicHistory(id: string) {
        return await this.studentRepository.deleteAcademicHistory(id);
    }
}