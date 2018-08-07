import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Routes, RouterModule } from '@angular/router'
import { FormsModule } from '@angular/forms';
import { SubDomainComponent } from './sub-domain.component'

const routes: Routes =[
  { path: '', component: SubDomainComponent }
]

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    RouterModule.forChild(routes)
  ],
  declarations: [SubDomainComponent]
})
export class SubDomainModule { }
