import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { StudentsListComponent } from './students-list/students-list.component';


const routes: Routes = [
  { path: '', pathMatch: 'full', redirectTo: 'students-list' },
//   { path: 'add-student', component: AddStudentComponent, data: {titulo: 'prueba titulo'} },
//  { path: 'edit-student/:id', component: EditStudentComponent },
  { path: 'students-list', component: StudentsListComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
