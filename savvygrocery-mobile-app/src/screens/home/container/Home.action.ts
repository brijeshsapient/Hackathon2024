export const SET_CATEGORY = 'SET_CATEGORY';
export const SET_CATEGORIES_LIST = 'SET_CATEGORIES_LIST';

export function setCategory(payload) {
  return {
    type: SET_CATEGORY,
    payload: payload,
  };
}

export function setCategoriesList(payload) {
  return {
    type: SET_CATEGORIES_LIST,
    payload,
  };
}
