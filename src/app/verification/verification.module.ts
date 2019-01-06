import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { VerificationComponent } from './verification.component'
import { Routes, RouterModule } from '@angular/router'

const routes: Routes =[
  { path: '', component: VerificationComponent }
]

@NgModule({
  imports: [
    CommonModule,
    RouterModule.forChild(routes),
  ],
  declarations: [VerificationComponent],
  exports:[RouterModule]
})
export class VerificationModule { }
