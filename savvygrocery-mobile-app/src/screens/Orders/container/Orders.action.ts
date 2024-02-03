export const ADD_ITEM_TO_ORDER = 'ADD_ITEM_TO_ORDER';
export const RESET_ORDER = 'RESET_ORDER';

export function addOrder(payload) {
  return {
    type: ADD_ITEM_TO_ORDER,
    payload,
  };
}

export function clearCart() {
  return {
    type: RESET_ORDER,
  };
}
