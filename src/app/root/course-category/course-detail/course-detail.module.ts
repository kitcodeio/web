import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CourseDetailComponent } from './course-detail.component';
import { Routes, RouterModule } from '@angular/router'
import { FormsModule } from '@angular/forms';

const routes: Routes =[
  { path: '', component: CourseDetailComponent }
]

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    RouterModule.forChild(routes)
  ],
  declarations: [CourseDetailComponent]
})
export class CourseDetailModule { }
