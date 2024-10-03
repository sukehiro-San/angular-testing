import { createReducer, on } from '@ngrx/store';
import { addToCart, removeFromCart } from '../actions/cart.action';

const initialState = 0;
export const cartReducer = createReducer(
  initialState,
  on(addToCart, (state, props) => {
    console.clear();
    console.log(props);
    return state + 1;
  }),
  on(removeFromCart, (state, props) => {
    console.clear();
    console.log(props);
    return state > 0 ? state - 1 : state;
  })
);
