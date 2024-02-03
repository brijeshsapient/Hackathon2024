import {StateKey} from '../../../core/constants/StateKey.constant';
import {AppState} from '../../../core/types';
import {getValue} from '../../../utils/Lodash.utils';

export const changeStoreState = (state: AppState) => {
  return getValue(state, StateKey.changeStore, {});
};

export const getStores = (state: AppState) => {
  return getValue(changeStoreState(state), 'stores', []);
};

export const getSelectedStore = (state: AppState) => {
  return getValue(
    changeStoreState(state),
    'selectedStore',
    getStores(state)[0],
  );
};
