// Common
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AdminRoutingModule } from './admin-routing.module';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

// Modules
import { SharedModule } from 'src/app/shared/shared.module';

// Components
import { HeaderComponent } from './components/header/header.component';

// Templates
import { DashboardComponent } from './templates/dashboard/dashboard.component';

// Pages
import { ProductReadComponent } from './pages/product/product-read/product-read.component';
import { ProductCreateComponent } from './pages/product/product-create/product-create.component';
import { ProductUpdateComponent } from './pages/product/product-update/product-update.component';
import { ProductDeleteComponent } from './pages/product/product-delete/product-delete.component';
import { FooterComponent } from './components/footer/footer.component';
import { MenuComponent } from './components/menu/menu.component';
import { HomeComponent } from './pages/home/home.component';


@NgModule({
  declarations: [
    ProductReadComponent,
    ProductCreateComponent,
    ProductUpdateComponent,
    ProductDeleteComponent,
    DashboardComponent,
    HeaderComponent,
    FooterComponent,
    MenuComponent,
    HomeComponent,
  ],
  imports: [
    CommonModule,
    AdminRoutingModule,
    SharedModule,
    FormsModule,
    ReactiveFormsModule,
  ]
})
export class AdminModule { }
