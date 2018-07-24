import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DashboardComponent } from './dashboard.component'
import { Routes, RouterModule } from '@angular/router'
import { FormsModule } from '@angular/forms';
import { LoadiingComponent } from '../../loadiing/loadiing.component';

const routes: Routes =[
  { path: '', component: DashboardComponent }
]

@NgModule({
  imports: [
    CommonModule,
    RouterModule.forChild(routes),
    FormsModule,
  ],  
  declarations: [DashboardComponent,
    LoadiingComponent]
})
export class DashboardModule { }
