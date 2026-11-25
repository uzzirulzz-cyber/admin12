import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { NgbProgressbarModule, NgbTabsetModule, NgbTooltipModule, NgbModalModule } from '@ng-bootstrap/ng-bootstrap';
import { NgxChartsModule } from '@swimlane/ngx-charts';

import { SharedModule } from '../../../theme/shared/shared.module';
import { BusinessManagementRoutingModule } from './business-management-routing.module';

import { BusinessManagementComponent } from './business-management/business-management.component';

@NgModule({
  declarations: [
    BusinessManagementComponent
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
    BusinessManagementRoutingModule
  ]
})
export class BusinessManagementModule { }