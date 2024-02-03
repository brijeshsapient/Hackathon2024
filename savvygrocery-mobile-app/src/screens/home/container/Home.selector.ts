import {StateKey} from '../../../core/constants/StateKey.constant';
import {AppState} from '../../../core/types';
import {getValue} from '../../../utils/Lodash.utils';

export const homeState = (state: AppState) => {
  return getValue(state, StateKey.home, {});
};

export const getCategories = (state: AppState) => {
  return getValue(homeState(state), 'categories', []);
};

export const getSelectedCategory = (state: AppState) => {
  return getValue(
    homeState(state),
    'selectedCategories',
    getCategories(state)[0],
  );
};
