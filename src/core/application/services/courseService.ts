import CourseRepository from "../ports/courseRepository";
import { Course, DidacticMaterial, ClassSchedule, Professor } from "../../domain/course";

export default class CourseService {
    constructor(private readonly courseRepository: CourseRepository) {}

    async insert(course: Course) {
        return await this.courseRepository.insert(course);
    }

    async getById(studentId: string) {
        return await this.courseRepository.getById(studentId);
    }

    async update(course: Course) {
        return await this.courseRepository.update(course);
    }

    async delete(studentId: string) {
        return await this.courseRepository.delete(studentId);
    }

    async getAll() {
        return await this.courseRepository.getAll();
    }

    async getAllDidacticMaterialsByCourseId(id: string) {
        return await this.courseRepository.getAllDidacticMaterialsByCourseId(id);
    }

    async addDidacticMaterial(didacticMaterial: DidacticMaterial) {
        return await this.courseRepository.addDidacticMaterial(didacticMaterial);
    }

    async getDidacticMaterialById(id: string) {
        return await this.courseRepository.getDidacticMaterialById(id);
    }

    async updateDidacticMaterial(didacticMaterial: DidacticMaterial) {
        return await this.courseRepository.updateDidacticMaterial(didacticMaterial);
    }

    async deleteDidacticMaterial(id: string) {
        return await this.courseRepository.deleteDidacticMaterial(id);
    }

    async getAllClassSchedulesByCourseId(id: string) {
        return await this.courseRepository.getAllClassSchedulesByCourseId(id);
    }

    async addClassSchedule(classSchedule: ClassSchedule) {
        return await this.courseRepository.addClassSchedule(classSchedule);
    }

    async getClassScheduleById(id: string) {
        return await this.courseRepository.getClassScheduleById(id);
    }

    async updateClassSchedule(classSchedule: ClassSchedule) {
        return await this.courseRepository.updateClassSchedule(classSchedule);
    }

    async deleteClassSchedule(id: string) {
        return await this.courseRepository.deleteClassSchedule(id);
    }

    async getAllProfessorsByCourseId(id: string) {
        return await this.courseRepository.getAllProfessorsByCourseId(id);
    }

    async addProfessor(professor: Professor) {
        return await this.courseRepository.addProfessor(professor);
    }

    async getProfessorById(id: string) {
        return await this.courseRepository.getProfessorById(id);
    }

    async updateProfessor(professor: Professor) {
        return await this.courseRepository.updateProfessor(professor);
    }

    async deleteProfessor(id: string) {
        return await this.courseRepository.deleteProfessor(id);
    }
}