import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { DashboardComponent } from './templates/dashboard/dashboard.component';

const routes: Routes = [
  {
    path: '/',
    component: DashboardComponent,
    children: [
      {
        path: '/product',
        component: DashboardComponent,
      }
    ]
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }