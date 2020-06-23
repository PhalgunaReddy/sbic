import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule } from '@angular/forms';

import { PactivityComponent } from './pactivity/pactivity.component';



@NgModule({
  declarations: [PactivityComponent],
  imports: [
    CommonModule, RouterModule,HttpClientModule,
    FormsModule
  ]
})
export class ActivityModule { }
