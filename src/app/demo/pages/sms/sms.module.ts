import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { RouterModule } from '@angular/router';
import { FormsModule } from '@angular/forms';
import { SmsComponent } from './sms.component';
import { SmsRoutingModule } from './sms-routing.module';
import { SmsService } from './sms.service';

@NgModule({
  declarations: [SmsComponent],
  imports: [
    CommonModule,
    NgbModule,
    RouterModule,
    FormsModule,
    SmsRoutingModule
  ],
  providers: [SmsService]
})
export class SmsModule { }