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
class CourseService {
    constructor(courseRepository) {
        this.courseRepository = courseRepository;
    }
    insert(course) {
        return __awaiter(this, void 0, void 0, function* () {
            return yield this.courseRepository.insert(course);
        });
    }
    getById(studentId) {
        return __awaiter(this, void 0, void 0, function* () {
            return yield this.courseRepository.getById(studentId);
        });
    }
    update(course) {
        return __awaiter(this, void 0, void 0, function* () {
            return yield this.courseRepository.update(course);
        });
    }
    delete(studentId) {
        return __awaiter(this, void 0, void 0, function* () {
            return yield this.courseRepository.delete(studentId);
        });
    }
    getAll() {
        return __awaiter(this, void 0, void 0, function* () {
            return yield this.courseRepository.getAll();
        });
    }
    getAllDidacticMaterialsByCourseId(id) {
        return __awaiter(this, void 0, void 0, function* () {
            return yield this.courseRepository.getAllDidacticMaterialsByCourseId(id);
        });
    }
    addDidacticMaterial(didacticMaterial) {
        return __awaiter(this, void 0, void 0, function* () {
            return yield this.courseRepository.addDidacticMaterial(didacticMaterial);
        });
    }
    getDidacticMaterialById(id) {
        return __awaiter(this, void 0, void 0, function* () {
            return yield this.courseRepository.getDidacticMaterialById(id);
        });
    }
    updateDidacticMaterial(didacticMaterial) {
        return __awaiter(this, void 0, void 0, function* () {
            return yield this.courseRepository.updateDidacticMaterial(didacticMaterial);
        });
    }
    deleteDidacticMaterial(id) {
        return __awaiter(this, void 0, void 0, function* () {
            return yield this.courseRepository.deleteDidacticMaterial(id);
        });
    }
    getAllClassSchedulesByCourseId(id) {
        return __awaiter(this, void 0, void 0, function* () {
            return yield this.courseRepository.getAllClassSchedulesByCourseId(id);
        });
    }
    addClassSchedule(classSchedule) {
        return __awaiter(this, void 0, void 0, function* () {
            return yield this.courseRepository.addClassSchedule(classSchedule);
        });
    }
    getClassScheduleById(id) {
        return __awaiter(this, void 0, void 0, function* () {
            return yield this.courseRepository.getClassScheduleById(id);
        });
    }
    updateClassSchedule(classSchedule) {
        return __awaiter(this, void 0, void 0, function* () {
            return yield this.courseRepository.updateClassSchedule(classSchedule);
        });
    }
    deleteClassSchedule(id) {
        return __awaiter(this, void 0, void 0, function* () {
            return yield this.courseRepository.deleteClassSchedule(id);
        });
    }
    getAllProfessorsByCourseId(id) {
        return __awaiter(this, void 0, void 0, function* () {
            return yield this.courseRepository.getAllProfessorsByCourseId(id);
        });
    }
    addProfessor(professor) {
        return __awaiter(this, void 0, void 0, function* () {
            return yield this.courseRepository.addProfessor(professor);
        });
    }
    getProfessorById(id) {
        return __awaiter(this, void 0, void 0, function* () {
            return yield this.courseRepository.getProfessorById(id);
        });
    }
    updateProfessor(professor) {
        return __awaiter(this, void 0, void 0, function* () {
            return yield this.courseRepository.updateProfessor(professor);
        });
    }
    deleteProfessor(id) {
        return __awaiter(this, void 0, void 0, function* () {
            return yield this.courseRepository.deleteProfessor(id);
        });
    }
}
exports.default = CourseService;
