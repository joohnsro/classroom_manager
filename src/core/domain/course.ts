export interface Course {
    id?: string;
    name: string;
}

export interface DidacticMaterial {
    id?: string;
    courseId: string;
    type: string;
    content: string;
}

export interface ClassSchedule {
    id?: string;
    courseId: string;
    from: number;
    to: number;
}

export interface Professor {
    id?: string;
    courseId: string;
    name: string;
}