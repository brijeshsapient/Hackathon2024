import {ADD_ITEM_TO_CART, REMOVE_ITEM_TO_CART, RESET_CART} from './Cart.action';

export const initialState = {
  isLoading: false,
  cartItems: [],
};

export default function (state = initialState, action: any) {
  const {payload, type} = action;
  switch (type) {
    case ADD_ITEM_TO_CART:
      return {...state, cartItems: [...state.cartItems, payload]};
    case REMOVE_ITEM_TO_CART:
      return {...state, loginDetails: payload.data, isLoading: false};
    case RESET_CART:
      return initialState;
    default:
      return state;
  }
}
