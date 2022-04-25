import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { DashboardComponent } from './templates/dashboard/dashboard.component';
import { HomeComponent } from './pages/home/home.component';
import { ProductReadComponent } from './pages/product/product-read/product-read.component';
import { ProductCreateComponent } from './pages/product/product-create/product-create.component';
import { ProductUpdateComponent } from './pages/product/product-update/product-update.component';

const routes: Routes = [
  {
    path: '',
    component: DashboardComponent,
    children: [
      {
        path: '',
        component: HomeComponent,
        pathMatch: 'full'
      },
      {
        path: 'products',
        component: ProductReadComponent,
      },
      {
        path: 'products/create',
        component: ProductCreateComponent,
      },
      {
        path: 'products/:id/update',
        component: ProductUpdateComponent,
      },
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class AdminRoutingModule { }
