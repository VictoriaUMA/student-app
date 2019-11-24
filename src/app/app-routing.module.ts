import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { StudentsListComponent } from './students-list/students-list.component';
import { StudentAddComponent } from './student-add/student-add.component';
import { StudentEditComponent } from './student-edit/student-edit.component';


const routes: Routes = [
  { path: '', pathMatch: 'full', redirectTo: 'students-list' },
  { path: 'add-student', component: StudentAddComponent },
  { path: 'edit-student/:id', component: StudentEditComponent },
  { path: 'students-list', component: StudentsListComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
