import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { PfinanceComponent } from './pfinance/pfinance.component';
import { HttpClientModule } from '@angular/common/http';


@NgModule({
  declarations: [PfinanceComponent],
  imports: [
    CommonModule,RouterModule,HttpClientModule
  ]
})
export class FinanceModule { }
