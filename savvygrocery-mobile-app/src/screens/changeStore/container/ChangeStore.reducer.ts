import {SET_STORE, SET_STORE_LIST} from './ChangeStore.action';
import {storeListData} from './ChangeStore.constants';

export const initialState = {
  selectedStore: undefined,
  stores: storeListData,
};

export default function (state = initialState, action: any) {
  const {payload, type} = action;
  switch (type) {
    case SET_STORE:
      return {...state, selectedStore: payload};
    case SET_STORE_LIST:
      return {...state, storeList: payload};
    default:
      return state;
  }
}
