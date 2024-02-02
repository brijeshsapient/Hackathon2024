import {ReducerActionType} from '../type/Login.type';
import {
  LOGIN_REQUEST,
  LOGIN_SUCCESS,
  LOGIN_ERROR,
  CLEAR_LOGIN_ERRORS,
} from './Login.action';

export const initialState = {
  isLoading: false,
  loginDetails: undefined,
  loginError: undefined,
};

export default function (state = initialState, action: ReducerActionType) {
  const {payload, type} = action;
  switch (type) {
    case LOGIN_REQUEST:
      return {isLoading: true};
    case LOGIN_SUCCESS:
      return {...state, loginDetails: payload.data, isLoading: false};
    case LOGIN_ERROR:
      return {...state, loginError: payload.error, isLoading: false};
    case CLEAR_LOGIN_ERRORS:
      return {...state, loginError: undefined};
    default:
      return state;
  }
}
