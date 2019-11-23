import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from "@angular/forms";
import { StudentService } from '../shared/student.service';

@Component({
  selector: 'app-student-add',
  templateUrl: './student-add.component.html',
  styleUrls: ['./student-add.component.css']
})
export class StudentAddComponent implements OnInit {

  studentForm: FormGroup;

  constructor(public fb: FormBuilder,
    private studentApi: StudentService) { }

  ngOnInit() {
  }

  createForm(){
    this.studentForm = this.fb.group({
      student_name: ['', [Validators.required]],
      student_email: ['', [Validators.required]],
      section: ['', [Validators.required]],
      subjects: [''],
      dob: ['', [Validators.required]],
      gender: ['Male']
    })
  }

}
