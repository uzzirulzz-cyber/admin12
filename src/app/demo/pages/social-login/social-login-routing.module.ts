import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { SocialLoginConfigComponent } from './social-login-config/social-login-config.component';

const routes: Routes = [
  {
    path: '',
    children: [
      {
        path: '',
        redirectTo: 'config',
        pathMatch: 'full'
      },
      {
        path: 'config',
        component: SocialLoginConfigComponent
      }
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class SocialLoginRoutingModule { }