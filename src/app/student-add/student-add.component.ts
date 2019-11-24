import { Component, OnInit } from '@angular/core';
import { StudentService } from '../shared/student.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-student-add',
  templateUrl: './student-add.component.html',
  styleUrls: ['./student-add.component.css']
})
export class StudentAddComponent implements OnInit {

  student_name: String;
  student_email: String;
  dob: Date;
  gender: String;

  constructor(
    private router: Router,
    private studentApi: StudentService
  ) { }

  ngOnInit() {
    this.student_name = null;
    this.student_email = null;
    this.dob = null;
    this.gender = null;
  }

  submitStudentForm() {
    this.studentApi.AddStudent(null, this.student_name, this.student_email, this.dob, this.gender);
    this.router.navigateByUrl('')

  }

}
