import {Student , AcademicHistory} from "../../../core/domain/student";
import StudentRepository from "../../../core/application/ports/studentRepository";

export default class InMemoryStudentRepository implements StudentRepository {
    
    private students: Student[] = [
        { id: '1', name: 'Jonathan Oliveira', age: 33, email: 'jonathan@email.com', phone: '+5511987654321' }
    ];

    private academicHistories: AcademicHistory[] = [
        { id: '1', studentId: '1', year: 2023, subject: 'DDD', grade: 'A', situation: 'approved' },
        { id: '2', studentId: '1', year: 2023, subject: 'Dockerization', grade: '-', situation: 'in-progress' },
        { id: '3', studentId: '2', year: 2023, subject: 'DDD', grade: 'A', situation: 'in-progress' },
    ];

    async insert(student: Student): Promise<string> {
        let studentId = String(this.students.length + 1);
        student.id = studentId;
        this.students.push(student);
        return student.id;
    }

    async getById(id: string): Promise<Student> {
        const student = this.students.find(s => s.id === id);
        if ( ! student ) {
            throw new Error(`Student with id ${id} not found`);
        }
        return student;
    }

    async update(student: Student): Promise<boolean> {
        let studentExists: boolean = false;
        this.students.forEach(s => {
            if ( s.id === student.id ) {
                studentExists = true;
                s.name = student.name
                s.age = student.age
                s.phone = student.phone
                s.email = student.email
            }
        })
        
        if ( ! studentExists ) {
            throw new Error(`Student with id ${student.id} not found`)
        }
        
        return studentExists;
    }

    async delete(id: string): Promise<boolean> {
        let studentIndex = this.students.findIndex((s) => s.id === id)
        if ( studentIndex === -1 ) {
            throw new Error(`Student with id ${id} not found`)
        }
        this.students.splice(studentIndex, 1);
        return true;
    }

    async getAll(): Promise<Student[]> {
        return this.students;
    }

    async getAllAcademicHistoryByStudentId(id: string): Promise<AcademicHistory[]> {
        return this.academicHistories.filter(a => a.studentId === id);
    }

    async addAcademicHistory(academicHistory: AcademicHistory): Promise<string> {
        const academicHistoryId = String(this.academicHistories.length + 1);
        academicHistory.id = academicHistoryId;
        this.academicHistories.push(academicHistory);
        return academicHistory.id;
    }

    async getAcademicHistoryById(id: string): Promise<AcademicHistory> {
        const singleAcademicHistory = this.academicHistories.find(a => a.id === id);
        if ( ! singleAcademicHistory ) {
            throw new Error(`Academic history with id ${id} not found`);
        }
        return singleAcademicHistory;
    }

    async updateAcademicHistory(academicHistory: AcademicHistory): Promise<boolean> {
        let singleAcademicHistoryExists: boolean = false;
        this.academicHistories.forEach(a => {
            if ( a.id === academicHistory.id ) {
                singleAcademicHistoryExists = true;
                a.year = academicHistory.year;
                a.subject = academicHistory.subject;
                a.grade = academicHistory.grade;
                a.situation = academicHistory.situation;
            }
        })
        
        if ( ! singleAcademicHistoryExists ) {
            throw new Error(`Academic history with id ${academicHistory.id} not found`)
        }
        
        return singleAcademicHistoryExists;
    }

    async deleteAcademicHistory(id: string): Promise<boolean> {
        let academicHistoryIndex = this.academicHistories.findIndex((s) => s.id === id)
        if ( academicHistoryIndex === -1 ) {
            throw new Error(`Academic history with id ${id} not found`)
        }
        this.academicHistories.splice(academicHistoryIndex, 1);
        return true;
    }
}