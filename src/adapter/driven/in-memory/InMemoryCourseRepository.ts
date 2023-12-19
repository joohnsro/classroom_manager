import CourseRepository from "../../../core/application/ports/courseRepository";
import { Course, DidacticMaterial, ClassSchedule, Professor } from "../../../core/domain/course";

export default class InMemoryCourseRepository implements CourseRepository {
    private courses: Course[] = [
        { id: '1', name: 'DDD' },
        { id: '2', name: 'Dockerization' },
    ];

    private didacticMaterials: DidacticMaterial[] = [
        { id: '1', courseId: '1', type: 'book', content: 'Implementing Domain-Driven Design, Vaughn Vernon' }
    ];

    private classSchedules: ClassSchedule[] = [
        { id: '1', courseId: '1', from: 1701459000, to: 1701464400 }
    ];

    private professors: Professor[] = [
        { id: '1', courseId: '1', name: 'Vlad Cruz' }
    ];

    async insert(course: Course): Promise<string> {
        let courseId = String(this.courses.length + 1);
        course.id = courseId;
        this.courses.push(course);
        return course.id;
    }

    async getById(id: string): Promise<Course> {
        const course = this.courses.find(s => s.id === id);
        if ( ! course ) {
            throw new Error(`Course with id ${id} not found`);
        }
        return course;
    }

    async update(course: Course): Promise<boolean> {
        let courseExists: boolean = false;
        this.courses.forEach(c => {
            if ( c.id === course.id ) {
                courseExists = true;
                c.name = course.name
            }
        })
        
        if ( ! courseExists ) {
            throw new Error(`Course with id ${course.id} not found`)
        }
        
        return courseExists;
    }

    async delete(id: string): Promise<boolean> {
        let courseIndex = this.courses.findIndex((s) => s.id === id)
        if ( courseIndex === -1 ) {
            throw new Error(`Course with id ${id} not found`)
        }
        this.courses.splice(courseIndex, 1);
        return true;
    }

    async getAll(): Promise<Course[]> {
        return this.courses;
    }

    async getAllDidacticMaterialsByCourseId(id: string): Promise<DidacticMaterial[]> {
        return this.didacticMaterials.filter(d => d.courseId === id);
    }

    async addDidacticMaterial(didacticMaterial: DidacticMaterial): Promise<string> {
        const didacticMaterialId = String(this.didacticMaterials.length + 1);
        didacticMaterial.id = didacticMaterialId;
        this.didacticMaterials.push(didacticMaterial);
        return didacticMaterial.id;
    }

    async getDidacticMaterialById(id: string): Promise<DidacticMaterial> {
        const singleDidacticMaterial = this.didacticMaterials.find(d => d.id === id);
        if ( ! singleDidacticMaterial ) {
            throw new Error(`Didactic material with id ${id} not found`);
        }
        return singleDidacticMaterial;
    }

    async updateDidacticMaterial(didacticMaterial: DidacticMaterial): Promise<boolean> {
        let singleDidacticMaterialExists: boolean = false;
        this.didacticMaterials.forEach(d => {
            if ( d.id === didacticMaterial.id ) {
                singleDidacticMaterialExists = true;
                d.type = didacticMaterial.type;
                d.content = didacticMaterial.content;
            }
        })
        
        if ( ! singleDidacticMaterialExists ) {
            throw new Error(`Didactic material with id ${didacticMaterial.id} not found`)
        }
        
        return singleDidacticMaterialExists;
    }

    async deleteDidacticMaterial(id: string): Promise<boolean> {
        let didacticMaterialIndex = this.didacticMaterials.findIndex((s) => s.id === id)
        if ( didacticMaterialIndex === -1 ) {
            throw new Error(`Didactic material with id ${id} not found`)
        }
        this.didacticMaterials.splice(didacticMaterialIndex, 1);
        return true;
    }

    async getAllClassSchedulesByCourseId(id: string): Promise<ClassSchedule[]> {
        return this.classSchedules.filter(c => c.courseId === id);
    }

    async addClassSchedule(classSchedule: ClassSchedule): Promise<string> {
        const classScheduleId = String(this.classSchedules.length + 1);
        classSchedule.id = classScheduleId;
        this.classSchedules.push(classSchedule);
        return classSchedule.id;
    }

    async getClassScheduleById(id: string): Promise<ClassSchedule> {
        const classSchedule = this.classSchedules.find(c => c.id === id);
        if ( ! classSchedule ) {
            throw new Error(`Class schedule with id ${id} not found`);
        }
        return classSchedule;
    }

    async updateClassSchedule(classSchedule: ClassSchedule): Promise<boolean> {
        let singleClassScheduleExists: boolean = false;
        this.classSchedules.forEach(d => {
            if ( d.id === classSchedule.id ) {
                singleClassScheduleExists = true;
                d.from = classSchedule.from;
                d.to = classSchedule.to;
            }
        })
        
        if ( ! singleClassScheduleExists ) {
            throw new Error(`Didactic material with id ${classSchedule.id} not found`)
        }
        
        return singleClassScheduleExists;
    }

    async deleteClassSchedule(id: string): Promise<boolean> {
        let classSchedulesIndex = this.classSchedules.findIndex((s) => s.id === id)
        if ( classSchedulesIndex === -1 ) {
            throw new Error(`Class schedule with id ${id} not found`)
        }
        this.classSchedules.splice(classSchedulesIndex, 1);
        return true;
    }

    async getAllProfessorsByCourseId(id: string): Promise<Professor[]> {
        return this.professors.filter(p => p.courseId === id);
    }
    
    async addProfessor(professor: Professor): Promise<string> {
        const professorId = String(this.professors.length + 1);
        professor.id = professorId;
        this.professors.push(professor);
        return professor.id;
    }

    async getProfessorById(id: string): Promise<Professor> {
        const professor = this.professors.find(p => p.id === id);
        if ( ! professor ) {
            throw new Error(`Professor with id ${id} not found`);
        }
        return professor;
    }
    
    async updateProfessor(professor: Professor): Promise<boolean> {
        let singleProfessorExists: boolean = false;
        this.professors.forEach(p => {
            if ( p.id === professor.id ) {
                singleProfessorExists = true;
                p.name = professor.name;
            }
        })
        
        if ( ! singleProfessorExists ) {
            throw new Error(`Didactic material with id ${professor.id} not found`)
        }
        
        return singleProfessorExists;
    }

    async deleteProfessor(id: string): Promise<boolean> {
        let professorsIndex = this.professors.findIndex((s) => s.id === id)
        if ( professorsIndex === -1 ) {
            throw new Error(`Professor with id ${id} not found`)
        }
        this.professors.splice(professorsIndex, 1);
        return true;
    }
}