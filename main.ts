import { Course } from './course.js';

import { dataCourses } from './dataCourses.js';

import { student } from './dataCourses.js';

import { Student } from './student.js';

import { dataStudent } from './dataStudent.js';

const studentsTbody: HTMLElement =document.getElementById('students')!;
const coursesTbody: HTMLElement = document.getElementById('courses')!;
const btnfilterByName: HTMLElement = document.getElementById("button-filterByName")!;
const btnfilterByRange: HTMLElement = document.getElementById("button-filterByRange")!;
const inputSearchBoxRangeIn: HTMLInputElement = <HTMLInputElement> document.getElementById("search-box-in")!;
const inputSearchBoxRangeFin: HTMLInputElement = <HTMLInputElement> document.getElementById("search-box-fin")!;
const inputSearchBox: HTMLInputElement = <HTMLInputElement> document.getElementById("search-box")!;
const totalCreditElm: HTMLElement = document.getElementById("total-credits")!;


btnfilterByName.onclick = () => applyFilterByName();
btnfilterByRange.onclick = () => applyFilterByRange(student.cursos);

renderCoursesInTable(dataCourses);
renderStudentInfoInTable(dataStudent);

totalCreditElm.innerHTML = `Total de Créditos: ${getTotalCredits(dataCourses)}`


function renderCoursesInTable(courses: Course[]): void {
  console.log('Desplegando cursos');
  courses.forEach((course) => {
    let trElement = document.createElement("tr");
    trElement.innerHTML = `<td>${course.name}</td>
                           <td>${course.professor}</td>
                           <td>${course.credits}</td>`;
    coursesTbody.appendChild(trElement);
  });
}

function renderStudentInfoInTable(students: Student[]): void {
    console.log('Desplegando info de estudiante');
    students.forEach((student) => {
        let trElement1 = document.createElement("tr");
        let trElement2 = document.createElement("tr");
        let trElement3 = document.createElement("tr");
        let trElement4 = document.createElement("tr");
        let trElement5 = document.createElement("tr");
        trElement1.innerHTML = `<td>Código</td>
                                <td>${student.code}</td>`;
        trElement2.innerHTML=`<td>Cédula</td>
                                <td>${student.id}</td>`;
        trElement3.innerHTML=`<td>Edad</td>
                                <td>${student.age}</td>`;
        trElement4.innerHTML=`<td>Dirección</td>
                                <td>${student.address}</td>`;
        trElement5.innerHTML=`<td>Teléfono</td>
                                <td>${student.phone}</td>`;
    studentsTbody.appendChild(trElement1);
    studentsTbody.appendChild(trElement2);
    studentsTbody.appendChild(trElement3);
    studentsTbody.appendChild(trElement4);
    studentsTbody.appendChild(trElement5);
    });
}


function applyFilterByRange(courses: Course[]) {
  let range1 = inputSearchBoxRangeIn.value;
  let range2 = inputSearchBoxRangeFin.value;
  range1 = (range1 == null) ? '' : range1;
  range2 = (range2 == null) ? '' : range2;
  let range1num : number = parseInt(range1);
  let range2num : number = parseInt(range2);
  clearCoursesInTable()
  let coursesFiltered: Course[] = [];
  courses.forEach((course) => {
    if(range1num <= course.credits && range2num >= course.credits){
      coursesFiltered.push(course)
    }
  });
  renderCoursesInTable(coursesFiltered);
}

function applyFilterByName() { 
  let text = inputSearchBox.value;
  text = (text == null) ? '' : text;
  clearCoursesInTable();
  let coursesFiltered: Course[] = searchCourseByName(text, dataCourses);
  renderCoursesInTable(coursesFiltered);
}

function searchCourseByName(nameKey: string, courses: Course[]) {
  return nameKey === '' ? dataCourses : courses.filter( c => 
    c.name.match(nameKey));
}


function getTotalCredits(courses: Course[]): number {
  let totalCredits: number = 0;
  courses.forEach((course) => totalCredits = totalCredits + course.credits);
  return totalCredits;
}

function clearCoursesInTable() {
  while (coursesTbody.hasChildNodes()) {
    if (coursesTbody.firstChild != null) {
      coursesTbody.removeChild(coursesTbody.firstChild);
     
    }
  }
}