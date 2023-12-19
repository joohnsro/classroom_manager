import { Course, DidacticMaterial, ClassSchedule, Professor } from "../../domain/course";

export default interface CourseRepository {
    insert(course: Course): Promise<string>;
    getById(id: string): Promise<Course>;
    update(course: Course): Promise<boolean>;
    delete(id: string): Promise<boolean>;
    getAll(): Promise<Course[]>;
    getAllDidacticMaterialsByCourseId(id: string): Promise<DidacticMaterial[]>;
    addDidacticMaterial(didacticMaterial: DidacticMaterial): Promise<string>;
    getDidacticMaterialById(id: string): Promise<DidacticMaterial>;
    updateDidacticMaterial(didacticMaterial: DidacticMaterial): Promise<boolean>;
    deleteDidacticMaterial(id: string): Promise<boolean>;
    getAllClassSchedulesByCourseId(id: string): Promise<ClassSchedule[]>;
    addClassSchedule(classSchedule: ClassSchedule): Promise<string>;
    getClassScheduleById(id: string): Promise<ClassSchedule>;
    updateClassSchedule(classSchedule: ClassSchedule): Promise<boolean>;
    deleteClassSchedule(id: string): Promise<boolean>;
    getAllProfessorsByCourseId(id: string): Promise<Professor[]>;
    addProfessor(professor: Professor): Promise<string>;
    getProfessorById(id: string): Promise<Professor>;
    updateProfessor(professor: Professor): Promise<boolean>;
    deleteProfessor(id: string): Promise<boolean>;
}