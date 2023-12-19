export interface Student {
    id?: string;
    name: string;
    age: number;
    phone: string;
    email: string;
}

export interface AcademicHistory {
    id?: string;
    studentId: string;
    year: number;
    subject: string;
    grade: string;
    situation: string;
}