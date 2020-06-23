import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import {FormsModule} from '@angular/forms';
import {HttpClientModule} from '@angular/common/http';
import {ReactiveFormsModule } from '@angular/forms';
import { Ng2SearchPipeModule } from 'ng2-search-filter';
import {NgxPaginationModule} from 'ngx-pagination';

import { PtransportComponent } from './ptransport/ptransport.component';
import { TransportuserComponent } from './transportuser/transportuser.component';



@NgModule({
  declarations: [PtransportComponent, TransportuserComponent],
  imports: [
    CommonModule,RouterModule,FormsModule,HttpClientModule,ReactiveFormsModule,Ng2SearchPipeModule,NgxPaginationModule
  ]
})
export class TransportModule { }
