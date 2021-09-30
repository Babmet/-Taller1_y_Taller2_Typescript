import { Course } from "./course.js";

export class Student {
    code: String;
    id: string;
    age: number;
    address: string;
    phone: string;
    cursos: Course[];

    constructor(code: string, id: string, age: number, address: string, phone: string, cursos: Course[]) {
        this.code = code;
        this.id = id;
        this.age = age;
        this.address = address;
        this.phone = phone;
        this.cursos = cursos;
    }
}