import {StateKey} from '../../../core/constants/StateKey.constant';
import {AppState} from '../../../core/types';
import {getValue} from '../../../utils/Lodash.utils';

export const cartState = (state: AppState) => {
  return getValue(state, StateKey.cart, {});
};

export const getCartItems = (state: AppState) => {
  console.log(JSON.stringify(cartState(state)));
  return getValue(cartState(state), 'cartItems', []);
};
