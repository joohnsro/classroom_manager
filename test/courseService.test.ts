import { describe, test, expect } from "@jest/globals";
import InMemoryCourseRepository from "../src/adapter/driven/in-memory/InMemoryCourseRepository";
import CourseService from "../src/core/application/services/courseService";
import { Course, DidacticMaterial, ClassSchedule, Professor } from "../src/core/domain/course";

describe('Course module', () => {

    test('Create course', async () => {
        const course: Course = {
            name: 'Hexagonal Architecture'
        };

        const repository = new InMemoryCourseRepository();
        const service = new CourseService(repository);

        const courseId = await service.insert(course);

        expect(courseId).toBe('3');
    })

    test('Get course by id', async () => {
        const repository = new InMemoryCourseRepository();
        const service = new CourseService(repository);

        const courseId = '1';
        const course = await service.getById(courseId);

        expect(course.name).toBe('DDD');
    })

    test('Update course', async () => {
        const repository = new InMemoryCourseRepository();
        const service = new CourseService(repository);

        const courseId = '1';
        const course = await service.getById(courseId);
        course.name = 'DDD - Data Driven Development';

        await service.update(course);
        const studentUpdated = await service.getById(courseId);

        expect(studentUpdated.name).toBe('DDD - Data Driven Development')
    })

    test('Delete course', async () => {
        const repository = new InMemoryCourseRepository();
        const service = new CourseService(repository);

        const courseId = '1';
        await service.delete(courseId);
        
        await expect(service.getById(courseId)).rejects.toThrowError(`Course with id ${courseId} not found`)
    })

    test('Get all courses', async () => {
        const repository = new InMemoryCourseRepository();
        const service = new CourseService(repository);

        const courses = await service.getAll();
        expect(courses.length).toBe(2);
    })

    test('Getting all didactic materials by a course id', async () => {
        const repository = new InMemoryCourseRepository();
        const service = new CourseService(repository);

        const didacticMaterials = await service.getAllDidacticMaterialsByCourseId('1');

        expect(didacticMaterials.length).toBe(1);
    })

    test('Adding an didactic material to a course', async () => {
        const didacticMaterial: DidacticMaterial = {
            courseId: '1',
            type: 'book',
            content: 'A Collaborative, Visual, and Agile Way to Build Domain-Driven Software, Stefan Hofer and Henning Schwentner'
        }

        const repository = new InMemoryCourseRepository();
        const service = new CourseService(repository);

        const didacticMaterialId = await service.addDidacticMaterial(didacticMaterial);

        expect(didacticMaterialId).toBe('2');
    })

    test('Changing didactic material name', async () => {
        const repository = new InMemoryCourseRepository();
        const service = new CourseService(repository);

        const didacticMaterial = await service.getDidacticMaterialById('1');
        didacticMaterial.content = 'Aligning Software Architecture and Business Strategy, Vlad Khononov';
        await service.updateDidacticMaterial(didacticMaterial);

        const changedDidacticMaterial = await service.getDidacticMaterialById('1');
        expect(changedDidacticMaterial.content).toBe('Aligning Software Architecture and Business Strategy, Vlad Khononov');
    })

    test('Delete didactic material', async () => {
        const repository = new InMemoryCourseRepository();
        const service = new CourseService(repository);

        const didacticMaterialId = '1';
        await service.deleteDidacticMaterial(didacticMaterialId);
        
        await expect(service.getDidacticMaterialById(didacticMaterialId)).rejects.toThrowError(`Didactic material with id ${didacticMaterialId} not found`)
    })

    test('Getting all class schedules by a course id', async () => {
        const repository = new InMemoryCourseRepository();
        const service = new CourseService(repository);

        const classSchedules = await service.getAllClassSchedulesByCourseId('1');

        expect(classSchedules.length).toBe(1);
    })

    test('Adding a class schedule to a course', async () => {
        const classSchedule: ClassSchedule = {
            courseId: '1',
            from: 1701718200,
            to: 1701723600
        }

        const repository = new InMemoryCourseRepository();
        const service = new CourseService(repository);

        const classScheduleId = await service.addClassSchedule(classSchedule);

        expect(classScheduleId).toBe('2');
    })

    test('Changing class schedule from', async () => {
        const repository = new InMemoryCourseRepository();
        const service = new CourseService(repository);

        const classSchedule = await service.getClassScheduleById('1');
        classSchedule.from = 1701716400;
        await service.updateClassSchedule(classSchedule);

        const changedDidacticMaterial = await service.getClassScheduleById('1');
        expect(changedDidacticMaterial.from).toBe(1701716400);
    })

    test('Delete class schedule', async () => {
        const repository = new InMemoryCourseRepository();
        const service = new CourseService(repository);

        const classScheduleId = '1';
        await service.deleteClassSchedule(classScheduleId);
        
        await expect(service.getClassScheduleById(classScheduleId)).rejects.toThrowError(`Class schedule with id ${classScheduleId} not found`)
    })

    test('Getting all professors by a course id', async () => {
        const repository = new InMemoryCourseRepository();
        const service = new CourseService(repository);

        const professors = await service.getAllProfessorsByCourseId('1');

        expect(professors.length).toBe(1);
    })

    test('Adding a professor to a course', async () => {
        const professor: Professor = {
            courseId: '1',
            name: 'Fulano'
        }

        const repository = new InMemoryCourseRepository();
        const service = new CourseService(repository);

        const professorId = await service.addProfessor(professor);

        expect(professorId).toBe('2');
    })

    test('Changing professor name', async () => {
        const repository = new InMemoryCourseRepository();
        const service = new CourseService(repository);

        const professor = await service.getProfessorById('1');
        professor.name = 'Vladmir Cruz';
        await service.updateProfessor(professor);

        const changedProfessor = await service.getProfessorById('1');
        expect(changedProfessor.name).toBe('Vladmir Cruz');
    })

    test('Delete professor', async () => {
        const repository = new InMemoryCourseRepository();
        const service = new CourseService(repository);

        const professorId = '1';
        await service.deleteProfessor(professorId);
        
        await expect(service.getProfessorById(professorId)).rejects.toThrowError(`Professor with id ${professorId} not found`)
    })
})