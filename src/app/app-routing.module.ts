import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { NavbarComponent } from './navbar/navbar.component';
import { WinterProductComponent } from './winter/winter-product/winter-product.component';
import { SaleProductComponent } from './sale/sale-product/sale-product.component';
import { LoginComponent } from './registration/login/login.component';
import { RegisterComponent } from './registration/register/register.component';

const routes: Routes = [
  {
    path: '',
    component: NavbarComponent,
    children: [
      { path: 'offer', component: SaleProductComponent },
      { path: 'winter-sale', component: WinterProductComponent },
      { path: 'login', component: LoginComponent },
      { path: 'registration', component: RegisterComponent },
    ],
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule { }
