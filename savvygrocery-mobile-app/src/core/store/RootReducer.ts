import {combineReducers} from 'redux';
import {AppState} from '../types';
import {StateKey} from '../constants/StateKey.constant';
import LoginReducer from '../../screens/login/container/Login.reducer';
import CartReducer from '../../screens/cart/container/Cart.reducer';
import OrderReducer from '../../screens/Orders/container/Orders.reducer';
import ChangeStoreReducer from '../../screens/changeStore/container/ChangeStore.reducer';
import HomeReducer from '../../screens/home/container/Home.reducer';

/**
 * Combine all reducers
 */
const appReducer = combineReducers<AppState>({
  [StateKey.login]: LoginReducer,
  [StateKey.cart]: CartReducer,
  [StateKey.changeStore]: ChangeStoreReducer,
  [StateKey.home]: HomeReducer,
  [StateKey.order]: OrderReducer,
});

export const RootReducer = (state: AppState, action: any) => {
  // when a reset state action is dispatched it will reset redux state
  /* istanbul ignore if */
  // if (action.type === RESET_APP_STATE) {
  //   RESET_APP_DATA.STATE.forEach(key => {
  //     state[key] = undefined;
  //   });
  // }

  return appReducer(state, action);
};
