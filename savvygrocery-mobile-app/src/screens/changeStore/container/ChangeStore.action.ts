export const SET_STORE = 'SET_STORE';
export const SET_STORE_LIST = 'SET_STORE_LIST';

export function setStore(payload) {
  return {
    type: SET_STORE,
    payload: payload,
  };
}

export function setStoreList(payload) {
  return {
    type: SET_STORE_LIST,
    payload,
  };
}
