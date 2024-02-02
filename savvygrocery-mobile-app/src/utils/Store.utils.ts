import {Store} from 'redux';
import {AppState} from '../core/types';

let store: Store<AppState>;

/**
 * set store into core module
 * @param  {any} storeObj
 */
export function setStore(storeObj: Store<AppState>) {
  store = storeObj;
}

/**
 * Return store
 * @returns store
 */
export function getStore() {
  return store;
}
