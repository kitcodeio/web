import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Routes, RouterModule } from '@angular/router'
import { FormsModule } from '@angular/forms';
import { ImagesComponent } from './images.component'
import { AceEditorModule } from 'ng2-ace-editor';

const routes: Routes =[
  { path: '', component: ImagesComponent }
]

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    RouterModule.forChild(routes),
    AceEditorModule
  ],
  declarations: [ImagesComponent]
})
export class ImagesModule { }
