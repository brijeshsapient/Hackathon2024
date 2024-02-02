export const LOGIN_REQUEST = 'LOGIN_REQUEST';
export const LOGIN_SUCCESS = 'LOGIN_SUCCESS';
export const LOGIN_ERROR = 'LOGIN_ERROR';
export const CLEAR_LOGIN_ERRORS = 'CLEAR_LOGIN_ERRORS';

export function loginRequest(payload) {
  return {
    type: LOGIN_REQUEST,
    payload,
  };
}

export function loginRequestSuccess(payload) {
  return {
    type: LOGIN_SUCCESS,
    payload,
  };
}

export function loginRequestError(payload: any) {
  return {
    type: LOGIN_ERROR,
    payload,
  };
}

export function clearLoginErrors() {
  return {
    type: CLEAR_LOGIN_ERRORS,
  };
}
