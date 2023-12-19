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
class InMemoryStudentRepository {
    constructor() {
        this.students = [
            { id: '1', name: 'Jonathan Oliveira', age: 33, email: 'jonathan@email.com', phone: '+5511987654321' }
        ];
        this.academicHistories = [
            { id: '1', studentId: '1', year: 2023, subject: 'DDD', grade: 'A', situation: 'approved' },
            { id: '2', studentId: '1', year: 2023, subject: 'Dockerization', grade: '-', situation: 'in-progress' },
            { id: '3', studentId: '2', year: 2023, subject: 'DDD', grade: 'A', situation: 'in-progress' },
        ];
    }
    insert(student) {
        return __awaiter(this, void 0, void 0, function* () {
            let studentId = String(this.students.length + 1);
            student.id = studentId;
            this.students.push(student);
            return student.id;
        });
    }
    getById(id) {
        return __awaiter(this, void 0, void 0, function* () {
            const student = this.students.find(s => s.id === id);
            if (!student) {
                throw new Error(`Student with id ${id} not found`);
            }
            return student;
        });
    }
    update(student) {
        return __awaiter(this, void 0, void 0, function* () {
            let studentExists = false;
            this.students.forEach(s => {
                if (s.id === student.id) {
                    studentExists = true;
                    s.name = student.name;
                    s.age = student.age;
                    s.phone = student.phone;
                    s.email = student.email;
                }
            });
            if (!studentExists) {
                throw new Error(`Student with id ${student.id} not found`);
            }
            return studentExists;
        });
    }
    delete(id) {
        return __awaiter(this, void 0, void 0, function* () {
            let studentIndex = this.students.findIndex((s) => s.id === id);
            if (studentIndex === -1) {
                throw new Error(`Student with id ${id} not found`);
            }
            this.students.splice(studentIndex, 1);
            return true;
        });
    }
    getAll() {
        return __awaiter(this, void 0, void 0, function* () {
            return this.students;
        });
    }
    getAllAcademicHistoryByStudentId(id) {
        return __awaiter(this, void 0, void 0, function* () {
            return this.academicHistories.filter(a => a.studentId === id);
        });
    }
    addAcademicHistory(academicHistory) {
        return __awaiter(this, void 0, void 0, function* () {
            const academicHistoryId = String(this.academicHistories.length + 1);
            academicHistory.id = academicHistoryId;
            this.academicHistories.push(academicHistory);
            return academicHistory.id;
        });
    }
    getAcademicHistoryById(id) {
        return __awaiter(this, void 0, void 0, function* () {
            const singleAcademicHistory = this.academicHistories.find(a => a.id === id);
            if (!singleAcademicHistory) {
                throw new Error(`Academic history with id ${id} not found`);
            }
            return singleAcademicHistory;
        });
    }
    updateAcademicHistory(academicHistory) {
        return __awaiter(this, void 0, void 0, function* () {
            let singleAcademicHistoryExists = false;
            this.academicHistories.forEach(a => {
                if (a.id === academicHistory.id) {
                    singleAcademicHistoryExists = true;
                    a.year = academicHistory.year;
                    a.subject = academicHistory.subject;
                    a.grade = academicHistory.grade;
                    a.situation = academicHistory.situation;
                }
            });
            if (!singleAcademicHistoryExists) {
                throw new Error(`Academic history with id ${academicHistory.id} not found`);
            }
            return singleAcademicHistoryExists;
        });
    }
    deleteAcademicHistory(id) {
        return __awaiter(this, void 0, void 0, function* () {
            let academicHistoryIndex = this.academicHistories.findIndex((s) => s.id === id);
            if (academicHistoryIndex === -1) {
                throw new Error(`Academic history with id ${id} not found`);
            }
            this.academicHistories.splice(academicHistoryIndex, 1);
            return true;
        });
    }
}
exports.default = InMemoryStudentRepository;
