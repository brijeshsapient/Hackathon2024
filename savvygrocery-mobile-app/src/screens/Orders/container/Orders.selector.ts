import {StateKey} from '../../../core/constants/StateKey.constant';
import {AppState} from '../../../core/types';
import {getValue} from '../../../utils/Lodash.utils';

export const orderState = (state: AppState) => {
  return getValue(state, StateKey.order, {});
};

export const getOrderItems = (state: AppState) => {
  console.log(JSON.stringify(orderState(state)));
  return getValue(orderState(state), 'orderItems', []);
};
