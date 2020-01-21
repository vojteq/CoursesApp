import { Course } from './Course'

export class User {
    email: string;
    enrolledCourses?: Course[];
    ratedCourses?: Course[];
}