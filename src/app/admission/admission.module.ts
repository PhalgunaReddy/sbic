import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import {FormsModule} from '@angular/forms';
import {HttpClientModule} from '@angular/common/http';
import {ReactiveFormsModule } from '@angular/forms';
import { Ng2SearchPipeModule } from 'ng2-search-filter';
import {NgxPaginationModule} from 'ngx-pagination';

import { PadmissionComponent } from './padmission/padmission.component';
import { NewadmissionComponent } from './newadmission/newadmission.component';
import { AdmissionlistComponent } from './admissionlist/admissionlist.component';



@NgModule({
  declarations: [PadmissionComponent, NewadmissionComponent, AdmissionlistComponent],
  imports: [
    CommonModule, RouterModule,FormsModule,HttpClientModule,ReactiveFormsModule,Ng2SearchPipeModule,NgxPaginationModule
  ]
})
export class AdmissionModule { }
