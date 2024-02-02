import {Theme} from '../../../core/types';

export type LoginApiPayload = {
  username: string;
  regexResponse: string;
};

export type LoginScreenProps = {
  navigation: Record<string, any>;
  loginDataRequest: (payload: LoginApiPayload) => void;
  clearErrors: () => void;
  loginError: LoginInternalErrorPayloadType;
  empFirstName: string;
};

export type LoginScreenViewProps = {
  loginButtonAction: () => void;
  username: string | undefined;
  password: string | undefined;
  usernameError: string | undefined;
  passwordError: string | undefined;
  onChangeText: (input: string, text: string) => void;
  validateErrors: () => void;
  userAuthError: string | undefined;
};

export type LoginScreenViewWithThemeProps = LoginScreenViewProps & {
  theme: Theme;
};

export type LoginStateProps = {
  input: InputFieldsKeys;
  validationErrs: InputFieldsKeys;
};

export type LoginActionProps = LoginInternalErrorPayloadType & {
  type: string;
  payload: LoginInternalErrorPayloadType;
};

export type LoginInternalErrorPayloadType = {
  fieldNonEmpty?: boolean;
  errorCode?: string;
};

type InputFieldsKeys = {
  usernameField?: string;
  passwordField?: string;
  usernameError?: string;
  passwordError?: string;
};

export interface ReducerActionType {
  payload: {
    data?: object;
    error?: object;
  };
  type: string;
}

export interface LoginEmpDetailsType {
  empID: string;
  empFirstName: string;
  empLastName: string;
  empStoreId: string;
}

export interface LoginResponseType {
  data: {
    employeeDetails: LoginEmpDetailsType;
  };
}

export interface LoginRequestProps {
  username: string;
  regexResponse: string;
}

export interface LoginDetailsProps {
  data: LoginEmpDetailsType;
}
