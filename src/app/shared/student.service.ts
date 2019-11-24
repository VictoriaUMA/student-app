import { Injectable } from '@angular/core';
import { Student } from './student';

@Injectable({
  providedIn: 'root'
})
export class StudentService {

  students: Array<Student>;

  constructor() {
    this.students = [];
   }

  // Add student
  AddStudent(id, student_name, student_email,  dob, gender) {
    let student = new Student({_id: id, student_name, student_email,  dob, gender});
    this.students.push(student);
  }

  // Get student
  GetStudent(id): Student {
    return this.students[id];
  }

  // Update student
  UpdateStudent(id, student: Student) {
    this.students[id]=student;
  }

  // Delete student
  DeleteStudent(id) {
    
    this.students.splice(id,1);
    
  }
}
