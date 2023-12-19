import { describe, test, expect } from "@jest/globals";
import InMemoryStudentRepository from "../src/adapter/driven/in-memory/inMemoryStudentRepository";
import StudentService from "../src/core/application/services/studentService";
import { Student, AcademicHistory } from "../src/core/domain/student";

describe('Student module', () => {
    
    test('Create student', async () => {
        const student: Student = {
            name: 'Fulano',
            age: 25,
            phone: '+5511912345678',
            email: 'fulano@email.com'
        };

        const repository = new InMemoryStudentRepository();
        const service = new StudentService(repository);

        const studentId = await service.insert(student);

        expect(studentId).toBe('2')
    })

    test('Get student by id', async () => {
        const repository = new InMemoryStudentRepository();
        const service = new StudentService(repository);

        const studentId = '1';
        const student = await service.getById(studentId);

        expect(student.name).toBe('Jonathan Oliveira');
    })

    test('Update student', async () => {
        const repository = new InMemoryStudentRepository();
        const service = new StudentService(repository);

        const studentId = '1';
        const student = await service.getById(studentId);
        student.name = 'Fulano de Tal';

            
        const studentUpdated = await service.getById(studentId);

        expect(studentUpdated.name).toBe('Fulano de Tal')
    })

    test('Delete student', async () => {
        const repository = new InMemoryStudentRepository();
        const service = new StudentService(repository);

        const studentId = '1';
        await service.delete(studentId);
        
        await expect(service.getById(studentId)).rejects.toThrowError(`Student with id ${studentId} not found`)
    })

    test('Get all students', async () => {
        const repository = new InMemoryStudentRepository();
        const service = new StudentService(repository);

        const students = await service.getAll();
        expect(students.length).toBe(1);
    })

    test('Getting all academic history by a student id', async () => {
        const repository = new InMemoryStudentRepository();
        const service = new StudentService(repository);

        const academicHistory = await service.getAllAcademicHistoryByStudentId('1');

        expect(academicHistory.length).toBe(2);
    })

    test('Adding an academic history to a student', async () => {
        const academicHistory: AcademicHistory = {
            studentId: '1',
            year: 2023,
            subject: 'Hexagonal Architecture',
            grade: 'A',
            situation: 'approved',
        }

        const repository = new InMemoryStudentRepository();
        const service = new StudentService(repository);

        const academicHistoryId = await service.addAcademicHistory(academicHistory);

        expect(academicHistoryId).toBe('4');
    })

    test('Changing academic history situation', async () => {
        const repository = new InMemoryStudentRepository();
        const service = new StudentService(repository);

        const academicHistory = await service.getAcademicHistoryById('2');
        academicHistory.situation = 'approved';
        await service.updateAcademicHistory(academicHistory);

        const changedAcademicHistory = await service.getAcademicHistoryById('2');
        expect(changedAcademicHistory.situation).toBe('approved');
    })

    test('Delete academic history', async () => {
        const repository = new InMemoryStudentRepository();
        const service = new StudentService(repository);

        const academicHistoryId = '1';
        await service.deleteAcademicHistory(academicHistoryId);
        
        await expect(service.getAcademicHistoryById(academicHistoryId)).rejects.toThrowError(`Academic history with id ${academicHistoryId} not found`)
    })

})