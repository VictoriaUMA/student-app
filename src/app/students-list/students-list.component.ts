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
  dataSource = new MatTableDataSource<Student>([]);
  displayedColumns: string[] = ['student_name', 'student_email', 'action'];

  constructor(private studentService: StudentService) { }

  ngOnInit() {
    this.dataSource.data = this.studentService.students;
  }

  deleteStudent(index, e) {
    if (window.confirm('Are you sure')) {
      this.studentService.DeleteStudent(index);

      this.dataSource.data = this.studentService.students;
    }
  }
}
