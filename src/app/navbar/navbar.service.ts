// shopping-cart.service.ts

import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ShoppingCartService {
  private openCartSubject: BehaviorSubject<boolean> = new BehaviorSubject<boolean>(false);
  openCart$: Observable<boolean> = this.openCartSubject.asObservable();

  openCart(): void {
    debugger
    this.openCartSubject.next(true);
  }

  closeCart(): void {
    this.openCartSubject.next(false);
  }
}
