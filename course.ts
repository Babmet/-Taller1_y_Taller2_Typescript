export class Course {
    name: String;
    credits: number;
    professor: string;

    constructor(name: string, professor: string, credits: number) {
        this.name = name;
        this.professor = professor;
        this.credits = credits;
    }
}