import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { NgbProgressbarModule, NgbTabsetModule, NgbTooltipModule, NgbModalModule } from '@ng-bootstrap/ng-bootstrap';
import { NgxChartsModule } from '@swimlane/ngx-charts';

import { SharedModule } from '../../../theme/shared/shared.module';
import { SocialLoginRoutingModule } from './social-login-routing.module';

import { SocialLoginConfigComponent } from './social-login-config/social-login-config.component';

@NgModule({
  declarations: [
    SocialLoginConfigComponent
  ],
  imports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    NgbProgressbarModule,
    NgbTabsetModule,
    NgbTooltipModule,
    NgbModalModule,
    NgxChartsModule,
    SharedModule,
    SocialLoginRoutingModule
  ]
})
export class SocialLoginModule { }