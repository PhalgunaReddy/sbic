import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { PexamComponent } from './pexam/pexam.component';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule } from '@angular/forms';


@NgModule({
  declarations: [PexamComponent],
  imports: [
    CommonModule,RouterModule,HttpClientModule,
    FormsModule
  ]
})
export class ExamModule { }
