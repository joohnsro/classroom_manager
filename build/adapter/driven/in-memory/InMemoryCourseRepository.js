"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
Object.defineProperty(exports, "__esModule", { value: true });
class InMemoryCourseRepository {
    constructor() {
        this.courses = [
            { id: '1', name: 'DDD' },
            { id: '2', name: 'Dockerization' },
        ];
        this.didacticMaterials = [
            { id: '1', courseId: '1', type: 'book', content: 'Implementing Domain-Driven Design, Vaughn Vernon' }
        ];
        this.classSchedules = [
            { id: '1', courseId: '1', from: 1701459000, to: 1701464400 }
        ];
        this.professors = [
            { id: '1', courseId: '1', name: 'Vlad Cruz' }
        ];
    }
    insert(course) {
        return __awaiter(this, void 0, void 0, function* () {
            let courseId = String(this.courses.length + 1);
            course.id = courseId;
            this.courses.push(course);
            return course.id;
        });
    }
    getById(id) {
        return __awaiter(this, void 0, void 0, function* () {
            const course = this.courses.find(s => s.id === id);
            if (!course) {
                throw new Error(`Course with id ${id} not found`);
            }
            return course;
        });
    }
    update(course) {
        return __awaiter(this, void 0, void 0, function* () {
            let courseExists = false;
            this.courses.forEach(c => {
                if (c.id === course.id) {
                    courseExists = true;
                    c.name = course.name;
                }
            });
            if (!courseExists) {
                throw new Error(`Course with id ${course.id} not found`);
            }
            return courseExists;
        });
    }
    delete(id) {
        return __awaiter(this, void 0, void 0, function* () {
            let courseIndex = this.courses.findIndex((s) => s.id === id);
            if (courseIndex === -1) {
                throw new Error(`Course with id ${id} not found`);
            }
            this.courses.splice(courseIndex, 1);
            return true;
        });
    }
    getAll() {
        return __awaiter(this, void 0, void 0, function* () {
            return this.courses;
        });
    }
    getAllDidacticMaterialsByCourseId(id) {
        return __awaiter(this, void 0, void 0, function* () {
            return this.didacticMaterials.filter(d => d.courseId === id);
        });
    }
    addDidacticMaterial(didacticMaterial) {
        return __awaiter(this, void 0, void 0, function* () {
            const didacticMaterialId = String(this.didacticMaterials.length + 1);
            didacticMaterial.id = didacticMaterialId;
            this.didacticMaterials.push(didacticMaterial);
            return didacticMaterial.id;
        });
    }
    getDidacticMaterialById(id) {
        return __awaiter(this, void 0, void 0, function* () {
            const singleDidacticMaterial = this.didacticMaterials.find(d => d.id === id);
            if (!singleDidacticMaterial) {
                throw new Error(`Didactic material with id ${id} not found`);
            }
            return singleDidacticMaterial;
        });
    }
    updateDidacticMaterial(didacticMaterial) {
        return __awaiter(this, void 0, void 0, function* () {
            let singleDidacticMaterialExists = false;
            this.didacticMaterials.forEach(d => {
                if (d.id === didacticMaterial.id) {
                    singleDidacticMaterialExists = true;
                    d.type = didacticMaterial.type;
                    d.content = didacticMaterial.content;
                }
            });
            if (!singleDidacticMaterialExists) {
                throw new Error(`Didactic material with id ${didacticMaterial.id} not found`);
            }
            return singleDidacticMaterialExists;
        });
    }
    deleteDidacticMaterial(id) {
        return __awaiter(this, void 0, void 0, function* () {
            let didacticMaterialIndex = this.didacticMaterials.findIndex((s) => s.id === id);
            if (didacticMaterialIndex === -1) {
                throw new Error(`Didactic material with id ${id} not found`);
            }
            this.didacticMaterials.splice(didacticMaterialIndex, 1);
            return true;
        });
    }
    getAllClassSchedulesByCourseId(id) {
        return __awaiter(this, void 0, void 0, function* () {
            return this.classSchedules.filter(c => c.courseId === id);
        });
    }
    addClassSchedule(classSchedule) {
        return __awaiter(this, void 0, void 0, function* () {
            const classScheduleId = String(this.classSchedules.length + 1);
            classSchedule.id = classScheduleId;
            this.classSchedules.push(classSchedule);
            return classSchedule.id;
        });
    }
    getClassScheduleById(id) {
        return __awaiter(this, void 0, void 0, function* () {
            const classSchedule = this.classSchedules.find(c => c.id === id);
            if (!classSchedule) {
                throw new Error(`Class schedule with id ${id} not found`);
            }
            return classSchedule;
        });
    }
    updateClassSchedule(classSchedule) {
        return __awaiter(this, void 0, void 0, function* () {
            let singleClassScheduleExists = false;
            this.classSchedules.forEach(d => {
                if (d.id === classSchedule.id) {
                    singleClassScheduleExists = true;
                    d.from = classSchedule.from;
                    d.to = classSchedule.to;
                }
            });
            if (!singleClassScheduleExists) {
                throw new Error(`Didactic material with id ${classSchedule.id} not found`);
            }
            return singleClassScheduleExists;
        });
    }
    deleteClassSchedule(id) {
        return __awaiter(this, void 0, void 0, function* () {
            let classSchedulesIndex = this.classSchedules.findIndex((s) => s.id === id);
            if (classSchedulesIndex === -1) {
                throw new Error(`Class schedule with id ${id} not found`);
            }
            this.classSchedules.splice(classSchedulesIndex, 1);
            return true;
        });
    }
    getAllProfessorsByCourseId(id) {
        return __awaiter(this, void 0, void 0, function* () {
            return this.professors.filter(p => p.courseId === id);
        });
    }
    addProfessor(professor) {
        return __awaiter(this, void 0, void 0, function* () {
            const professorId = String(this.professors.length + 1);
            professor.id = professorId;
            this.professors.push(professor);
            return professor.id;
        });
    }
    getProfessorById(id) {
        return __awaiter(this, void 0, void 0, function* () {
            const professor = this.professors.find(p => p.id === id);
            if (!professor) {
                throw new Error(`Professor with id ${id} not found`);
            }
            return professor;
        });
    }
    updateProfessor(professor) {
        return __awaiter(this, void 0, void 0, function* () {
            let singleProfessorExists = false;
            this.professors.forEach(p => {
                if (p.id === professor.id) {
                    singleProfessorExists = true;
                    p.name = professor.name;
                }
            });
            if (!singleProfessorExists) {
                throw new Error(`Didactic material with id ${professor.id} not found`);
            }
            return singleProfessorExists;
        });
    }
    deleteProfessor(id) {
        return __awaiter(this, void 0, void 0, function* () {
            let professorsIndex = this.professors.findIndex((s) => s.id === id);
            if (professorsIndex === -1) {
                throw new Error(`Professor with id ${id} not found`);
            }
            this.professors.splice(professorsIndex, 1);
            return true;
        });
    }
}
exports.default = InMemoryCourseRepository;
