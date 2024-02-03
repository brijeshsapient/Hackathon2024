import {SET_CATEGORY, SET_CATEGORIES_LIST} from './Home.action';
import {caategories} from './Home.constants';

export const initialState = {
  categories: caategories,
  selectedCategories: undefined,
};

export default function (state = initialState, action: any) {
  const {payload, type} = action;
  switch (type) {
    case SET_CATEGORY:
      return {...state, selectedCategories: payload};
    case SET_CATEGORIES_LIST:
      return {...state, categories: payload};
    default:
      return state;
  }
}
