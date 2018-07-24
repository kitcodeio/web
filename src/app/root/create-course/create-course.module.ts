import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Routes, RouterModule } from '@angular/router'
import { FormsModule } from '@angular/forms';
import { CreateCourseComponent } from './create-course.component';

const routes: Routes =[
  { path: '', component: CreateCourseComponent }
]


@NgModule({
  imports: [
    CommonModule,
    RouterModule.forChild(routes),
    FormsModule
  ],
  declarations: [CreateCourseComponent]
})
export class CreateCourseModule { }
