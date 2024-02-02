export const ADD_ITEM_TO_CART = 'ADD_ITEM_TO_CART';
export const REMOVE_ITEM_TO_CART = 'REMOVE_ITEM_TO_CART';
export const RESET_CART = 'RESET_CART';

export function addItemToCart(payload) {
  return {
    type: ADD_ITEM_TO_CART,
    payload,
  };
}

export function removeItemToCart(payload) {
  return {
    type: REMOVE_ITEM_TO_CART,
    payload,
  };
}

export function clearCart(payload: any) {
  return {
    type: RESET_CART,
    payload,
  };
}
