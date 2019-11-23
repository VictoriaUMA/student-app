import { Component, OnInit } from '@angular/core';
import { Student } from '../shared/student';
import { StudentService } from '../shared/student.service';
import { MatTableDataSource } from '@angular/material';

@Component({
  selector: 'app-students-list',
  templateUrl: './students-list.component.html',
  styleUrls: ['./students-list.component.css']
})
export class StudentsListComponent implements OnInit {

  studentData: any = [];
  dataSource: MatTableDataSource<Student>;
  displayedColumns: string[] = ['_id', 'student_name', 'student_email', 'section', 'action'];

  constructor(private studentService: StudentService) { }

  ngOnInit() {
    this.studentData = this.studentService.GetStudents();
    console.log('studentData ->', this.studentData);
    
  }

  deleteStudent(index: number, e){
    if(window.confirm('Are you sure')) {
      var data = this.dataSource.data;
//      this.studentService.DeleteStudent(data._id);
      data = this.studentService.GetStudents();
      this.dataSource.data = data;
    }
  }
}
