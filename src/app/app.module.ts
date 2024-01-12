// app.module.ts
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NavbarModule } from './navbar/navbar.module';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatButtonModule } from '@angular/material/button';
import { WinterProductComponent } from './winter/winter-product/winter-product.component';
import { SaleProductComponent } from './sale/sale-product/sale-product.component';
import { MatMenuModule } from '@angular/material/menu';
import { MatFormFieldModule } from '@angular/material/form-field';
import { LoginComponent } from './registration/login/login.component';
import { MatCardModule } from '@angular/material/card';
import { ReactiveFormsModule } from '@angular/forms';
import { MatInputModule } from '@angular/material/input';
import { RegisterComponent } from './registration/register/register.component';
import { ShoppingCartComponent } from './shopping-cart/shopping-cart.component';
import { MatDrawerContainer, MatDrawerContent, MatSidenavModule } from '@angular/material/sidenav'; // Make sure to include these
import { MatDialogModule } from '@angular/material/dialog';

@NgModule({
  declarations: [AppComponent, WinterProductComponent, SaleProductComponent, LoginComponent, RegisterComponent, ShoppingCartComponent],
  imports: [
    BrowserModule,
    AppRoutingModule,
    NavbarModule,
    BrowserAnimationsModule,
    MatToolbarModule,
    MatButtonModule,
    MatFormFieldModule,
    MatCardModule,
    ReactiveFormsModule,
    MatMenuModule,
    MatInputModule,
    MatSidenavModule,
    MatDialogModule
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule { }
