import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Routes, RouterModule } from '@angular/router'
import { FormsModule } from '@angular/forms';
import { CoursesComponent } from './courses.component'

const routes: Routes =[
  { path: '', component: CoursesComponent }
]


@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    RouterModule.forChild(routes)
  ],
  declarations: [CoursesComponent]
})
export class CoursesModule { }
