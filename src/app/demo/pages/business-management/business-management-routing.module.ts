import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { BusinessManagementComponent } from './business-management/business-management.component';

const routes: Routes = [
  {
    path: '',
    children: [
      {
        path: '',
        redirectTo: 'solutions',
        pathMatch: 'full'
      },
      {
        path: 'solutions',
        component: BusinessManagementComponent
      }
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class BusinessManagementRoutingModule { }