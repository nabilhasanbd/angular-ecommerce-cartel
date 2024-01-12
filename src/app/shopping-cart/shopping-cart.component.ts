import { Component } from '@angular/core';
import { ShoppingCartService } from '../navbar/navbar.service';

@Component({
  selector: 'app-shopping-cart',
  templateUrl: './shopping-cart.component.html',
  styleUrls: ['./shopping-cart.component.scss']
})
export class ShoppingCartComponent {
  constructor(private shoppingCartService: ShoppingCartService) {}

  ngOnInit(): void {
}
  }

