import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AdsenseDashboardComponent } from './adsense-dashboard/adsense-dashboard.component';
import { AdsenseConfigComponent } from './adsense-config/adsense-config.component';
import { AdsenseRevenueComponent } from './adsense-revenue/adsense-revenue.component';

const routes: Routes = [
  {
    path: '',
    children: [
      {
        path: 'dashboard',
        component: AdsenseDashboardComponent
      },
      {
        path: 'config',
        component: AdsenseConfigComponent
      },
      {
        path: 'revenue',
        component: AdsenseRevenueComponent
      },
      {
        path: '',
        redirectTo: 'dashboard',
        pathMatch: 'full'
      }
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class AdsenseRoutingModule { }