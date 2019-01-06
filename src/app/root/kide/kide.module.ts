import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Routes, RouterModule } from '@angular/router'
import { KideComponent } from './kide.component'

const routes: Routes =[
  { path: '', component: KideComponent }
]

@NgModule({
  imports: [
    CommonModule,
    RouterModule.forChild(routes),
  ],
  declarations: [
    KideComponent,
  ]
})
export class KideModule { }
