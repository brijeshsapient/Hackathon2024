import React from 'react';
import CheckoutView from '../view/Checkout.view';
import {connect} from 'react-redux';
import {getCartItems} from './Checkout.selector';
import {removeItemToCart} from './Checkout.action';
import {AppState} from '../../../core/types';

const CheckoutContainer = props => {
  return (
    <CheckoutView navigation={props.navigation} cartItems={props.cartItems} />
  );
};

export const mapStateToProps = (state: AppState) => {
  return {
    cartItems: getCartItems(state),
  };
};

export const mapDispatchToProps = (dispatch: any) => {
  return {
    removeItem: payload => dispatch(removeItemToCart(payload)),
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(CheckoutContainer);
