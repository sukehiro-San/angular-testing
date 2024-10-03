import { Component, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';
import { Observable, of } from 'rxjs';
import { addToCart, removeFromCart } from '../store/actions/cart.action';

@Component({
  selector: 'app-items',
  templateUrl: './items.component.html',
  styleUrl: './items.component.scss',
})
export class ItemsComponent {
  cartCount: Observable<number>;
  constructor(private store: Store<{ cartCount: number }>) {
    this.cartCount = this.store.select('cartCount');
  }

  addToCart() {
    this.store.dispatch(addToCart({ msg: 'Item is added' }));
  }

  removeFromCart() {
    this.store.dispatch(removeFromCart({ msg: 'Item is removed' }));
  }
}
