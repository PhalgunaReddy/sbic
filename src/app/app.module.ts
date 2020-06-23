import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { ReactiveFormsModule } from '@angular/forms';// form validation
import { FormsModule } from '@angular/forms'; // for form
import {RouterModule , Routes} from '@angular/router';
import {HttpClientModule} from '@angular/common/http';
import { Ng2SearchPipeModule } from 'ng2-search-filter';
import {NgxPaginationModule} from 'ngx-pagination';
import { AppComponent } from './app.component';
import { LoginComponent } from './login/login.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { HeaderComponent } from './header/header.component';
//importing custom modules 

import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import {AdmissionModule} from './admission/admission.module';
import {ExamModule} from './exam/exam.module';
import {FinanceModule} from './finance/finance.module';
import {ActivityModule} from './activity/activity.module';
import {StaffModule} from './staff/staff.module';
import {TransportModule} from './transport/transport.module';
import {PaymentModule} from './payment/payment.module';
import { PactivityComponent } from './activity/pactivity/pactivity.component';
import { PadmissionComponent } from './admission/padmission/padmission.component';
import { PexamComponent } from './exam/pexam/pexam.component';
import { PfinanceComponent } from './finance/pfinance/pfinance.component';
import { TodaypaymentComponent } from './payment/todaypayment/todaypayment.component';
import { PpaymentComponent } from './payment/ppayment/ppayment.component';
import { PstaffComponent } from './staff/pstaff/pstaff.component';
import { PtransportComponent } from './transport/ptransport/ptransport.component';
import { TransportuserComponent } from './transport/transportuser/transportuser.component';
import { SettingsComponent } from './settings/settings.component';
import { NewadmissionComponent } from './admission/newadmission/newadmission.component';
import { AdmissionlistComponent} from './admission/admissionlist/admissionlist.component';
const  appPage : Routes = [
                            {path:"dashboard", component:DashboardComponent},
                            {path:"settings", component:SettingsComponent},
                            {path:"activity", component:PactivityComponent},
                            {path:"admission", component:PadmissionComponent,
                              children:[
                                {path:"new-admission", component:NewadmissionComponent},
                                {path:"admission-list", component:AdmissionlistComponent}
                              ]},
                            {path:"examination", component:PexamComponent},
                            {path:"finance", component:PfinanceComponent},
                            {path:"fee-collection", component:PpaymentComponent},
							{path:"totay-payment",component:TodaypaymentComponent},
                            {path:"employee", component:PstaffComponent},
                            {path:"transport", component:PtransportComponent},
                            {path:"transport-user", component:TransportuserComponent}
                          ];

@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    DashboardComponent,
    HeaderComponent,
    SettingsComponent,
  ],
  imports: [
    BrowserModule,
    FormsModule,AdmissionModule, ExamModule, FontAwesomeModule, FinanceModule, ActivityModule,
    PaymentModule,StaffModule, TransportModule,
	HttpClientModule,ReactiveFormsModule,Ng2SearchPipeModule,NgxPaginationModule,
    RouterModule.forRoot(appPage, {useHash:true})
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
