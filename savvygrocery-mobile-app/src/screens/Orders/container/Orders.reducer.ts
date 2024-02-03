import {ADD_ITEM_TO_ORDER, RESET_ORDER} from './Orders.action';

export const initialState = {
  isLoading: false,
  orderItems: [],
};

export default function (state = initialState, action: any) {
  const {payload, type} = action;
  switch (type) {
    case ADD_ITEM_TO_ORDER:
      return {...state, orderItems: [...state.orderItems, payload]};
    case RESET_ORDER:
      return initialState;
    default:
      return state;
  }
}
