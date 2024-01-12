import { Component, ComponentFactoryResolver, Type, ViewChild } from '@angular/core';
import { MatMenuTrigger } from '@angular/material/menu';
import { ShoppingCartService } from './navbar.service';
import { MatDialog } from '@angular/material/dialog';
import { ShoppingCartComponent } from '../shopping-cart/shopping-cart.component';
@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.scss']
})
export class NavbarComponent {
  showSubMenu: string = '';

  @ViewChild('drawer') drawer: any; 
  dynamicComponent: Type<any> | null = null;

  constructor(private componentFactoryResolver: ComponentFactoryResolver) {
  }
  toggleSubMenu(subMenu: string): void {
    this.showSubMenu = this.showSubMenu === subMenu ? '' : subMenu;
  }

  closeSubMenu(): void {
    this.showSubMenu = '';
  }

  loadComponent(component: Type<any>): void {
    const factory = this.componentFactoryResolver.resolveComponentFactory(component);
    this.dynamicComponent = factory.componentType;
  }

  openCart(): void {
    this.drawer.toggle();
    this.loadComponent(ShoppingCartComponent);
  }
}
