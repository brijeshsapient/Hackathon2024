import React from 'react';
import LoginView from '../view/Login.view';

const LoginContainer = props => {
  return <LoginView navigation={props.navigation} />;
};

export default LoginContainer;
