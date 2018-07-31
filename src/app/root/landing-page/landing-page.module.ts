import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Routes, RouterModule } from '@angular/router'
import { FormsModule } from '@angular/forms';
import { LandingPageComponent } from './landing-page.component'

const routes: Routes =[
  { path: '', component: LandingPageComponent }
]

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    RouterModule.forChild(routes),
  ],
  declarations: [LandingPageComponent]
})
export class LandingPageModule { }
