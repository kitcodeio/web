import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Routes, RouterModule } from '@angular/router'
import { FormsModule } from '@angular/forms';
import { ProfileComponent } from './profile.component'
import { LoadiingComponent } from '../../loadiing/loadiing.component';


const routes: Routes =[
  { path: '', component: ProfileComponent }
]

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    RouterModule.forChild(routes)
  ],
  declarations: [
    ProfileComponent,
    LoadiingComponent
  ]
})
export class ProfileModule { }
