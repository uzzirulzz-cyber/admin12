import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { NgbProgressbarModule, NgbTabsetModule, NgbTooltipModule, NgbModalModule } from '@ng-bootstrap/ng-bootstrap';
import { NgxChartsModule } from '@swimlane/ngx-charts';
import { SharedModule } from '../../../theme/shared/shared.module';
import { AdsenseRoutingModule } from './adsense-routing.module';
import { AdsenseDashboardComponent } from './adsense-dashboard/adsense-dashboard.component';
import { AdsenseConfigComponent } from './adsense-config/adsense-config.component';
import { AdsenseRevenueComponent } from './adsense-revenue/adsense-revenue.component';

@NgModule({
  declarations: [
    AdsenseDashboardComponent,
    AdsenseConfigComponent,
    AdsenseRevenueComponent
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
    AdsenseRoutingModule
  ]
})
export class AdsenseModule { }