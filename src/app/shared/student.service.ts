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
  AddStudent(data: Student) {
    this.students.push(data);
  }

  // Get all students
  GetStudents(): Student[] {
    return this.students;
  }

  // Get student
  GetStudent(id): Student {
    this.students.forEach(student => {
      if (student._id = id){
        return student;
      }
    });
    return null;
  }

  // Update student
  UpdateStudent(id, data) {
    this.students.forEach( (student, index) => {
      if (student._id === id){
        this.students[index] = data;
      }
    });
  }

  // Delete student
  DeleteStudent(id) {
    const index = null;
    this.students.forEach( (student, index) => {
      if (student._id === id){
        index = index;
      }
    });
    if (index !== null){
      this.students.splice(index,1);
    }
  }
}
