import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { Router, ActivatedRoute } from '@angular/router';
import { StudentService } from '../shared/student.service';
import { Student } from '../shared/student';

@Component({
  selector: 'app-student-edit',
  templateUrl: './student-edit.component.html',
  styleUrls: ['./student-edit.component.css']
})
export class StudentEditComponent implements OnInit {

  id: string;
  student: Student;
  student_name: String = null;
  student_email: String = null;
  dob: Date = null;
  gender: String = null;

  constructor(
    private router: Router,
    private actRoute: ActivatedRoute,
    private studentService: StudentService
  ) { }

  ngOnInit() {
    this.student = new Student(null);
    this.id = this.actRoute.snapshot.paramMap.get('id');

    this.student = this.studentService.GetStudent(this.id);
    console.log('student: ', this.student);
    this.student_name = this.student.student_name;
  }

  submitStudentForm() {
    this.studentService.UpdateStudent(this.id, this.student);
    this.router.navigateByUrl('/students-list')
  }

}
