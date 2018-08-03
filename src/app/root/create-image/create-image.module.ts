import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Routes, RouterModule } from '@angular/router'
import { FormsModule } from '@angular/forms';
import { CreateImageComponent } from './create-image.component'
import { AceEditorModule } from 'ng2-ace-editor';

const routes: Routes =[
  { path: '', component: CreateImageComponent }
]

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    RouterModule.forChild(routes),
    AceEditorModule
  ],
  declarations: [CreateImageComponent]
})
export class CreateImageModule { }
