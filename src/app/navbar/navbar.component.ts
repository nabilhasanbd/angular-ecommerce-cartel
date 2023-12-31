import { Component, ViewChild } from '@angular/core';
import { MatMenuTrigger } from '@angular/material/menu';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.scss']
})
export class NavbarComponent {
  showSubMenu: string = '';

  toggleSubMenu(subMenu: string): void {
    this.showSubMenu = this.showSubMenu === subMenu ? '' : subMenu;
  }

  closeSubMenu(): void {
    this.showSubMenu = '';
  }
}
