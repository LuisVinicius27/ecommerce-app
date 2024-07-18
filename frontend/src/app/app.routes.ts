import { Routes } from '@angular/router';
import { LoginComponent } from './auth/login/login.component';
import { CategoriaCreateComponent } from './category/category-create/category-create.component';
import { ProdutoCreateComponent } from './product/product-create/product-create.component';
import { VendaCreateComponent } from './sale/sale-create/sale-create.component';
import { DashboardComponent } from './dashboard/dashboard.component';

export const routes: Routes = [
  { path: 'login', component: LoginComponent },
  { path: 'category', component: CategoriaCreateComponent },
  { path: 'product', component: ProdutoCreateComponent },
  { path: 'sale', component: VendaCreateComponent },
  { path: 'dashboard', component: DashboardComponent },
  { path: '', redirectTo: '/login', pathMatch: 'full' },
  { path: '**', redirectTo: '/login' }
];