import { dataCourses } from './dataCourses.js';
import { student } from './dataCourses.js';
import { dataStudent } from './dataStudent.js';
var studentsTbody = document.getElementById('students');
var coursesTbody = document.getElementById('courses');
var btnfilterByName = document.getElementById("button-filterByName");
var btnfilterByRange = document.getElementById("button-filterByRange");
var inputSearchBoxRangeIn = document.getElementById("search-box-in");
var inputSearchBoxRangeFin = document.getElementById("search-box-fin");
var inputSearchBox = document.getElementById("search-box");
var totalCreditElm = document.getElementById("total-credits");
btnfilterByName.onclick = function () { return applyFilterByName(); };
btnfilterByRange.onclick = function () { return applyFilterByRange(student.cursos); };
renderCoursesInTable(dataCourses);
renderStudentInfoInTable(dataStudent);
totalCreditElm.innerHTML = "Total de Cr\u00E9ditos: " + getTotalCredits(dataCourses);
function renderCoursesInTable(courses) {
    console.log('Desplegando cursos');
    courses.forEach(function (course) {
        var trElement = document.createElement("tr");
        trElement.innerHTML = "<td>" + course.name + "</td>\n                           <td>" + course.professor + "</td>\n                           <td>" + course.credits + "</td>";
        coursesTbody.appendChild(trElement);
    });
}
function renderStudentInfoInTable(students) {
    console.log('Desplegando info de estudiante');
    students.forEach(function (student) {
        var trElement1 = document.createElement("tr");
        var trElement2 = document.createElement("tr");
        var trElement3 = document.createElement("tr");
        var trElement4 = document.createElement("tr");
        var trElement5 = document.createElement("tr");
        trElement1.innerHTML = "<td>C\u00F3digo</td>\n                                <td>" + student.code + "</td>";
        trElement2.innerHTML = "<td>C\u00E9dula</td>\n                                <td>" + student.id + "</td>";
        trElement3.innerHTML = "<td>Edad</td>\n                                <td>" + student.age + "</td>";
        trElement4.innerHTML = "<td>Direcci\u00F3n</td>\n                                <td>" + student.address + "</td>";
        trElement5.innerHTML = "<td>Tel\u00E9fono</td>\n                                <td>" + student.phone + "</td>";
        studentsTbody.appendChild(trElement1);
        studentsTbody.appendChild(trElement2);
        studentsTbody.appendChild(trElement3);
        studentsTbody.appendChild(trElement4);
        studentsTbody.appendChild(trElement5);
    });
}
function applyFilterByRange(courses) {
    var range1 = inputSearchBoxRangeIn.value;
    var range2 = inputSearchBoxRangeFin.value;
    range1 = (range1 == null) ? '' : range1;
    range2 = (range2 == null) ? '' : range2;
    var range1num = parseInt(range1);
    var range2num = parseInt(range2);
    clearCoursesInTable();
    var coursesFiltered = [];
    courses.forEach(function (course) {
        if (range1num <= course.credits && range2num >= course.credits) {
            coursesFiltered.push(course);
        }
    });
    renderCoursesInTable(coursesFiltered);
}
function applyFilterByName() {
    var text = inputSearchBox.value;
    text = (text == null) ? '' : text;
    clearCoursesInTable();
    var coursesFiltered = searchCourseByName(text, dataCourses);
    renderCoursesInTable(coursesFiltered);
}
function searchCourseByName(nameKey, courses) {
    return nameKey === '' ? dataCourses : courses.filter(function (c) {
        return c.name.match(nameKey);
    });
}
function getTotalCredits(courses) {
    var totalCredits = 0;
    courses.forEach(function (course) { return totalCredits = totalCredits + course.credits; });
    return totalCredits;
}
function clearCoursesInTable() {
    while (coursesTbody.hasChildNodes()) {
        if (coursesTbody.firstChild != null) {
            coursesTbody.removeChild(coursesTbody.firstChild);
        }
    }
}
