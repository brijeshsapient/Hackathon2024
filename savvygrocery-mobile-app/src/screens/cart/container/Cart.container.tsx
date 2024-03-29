import React from 'react';
import CartView from '../view/Cart.view';
import {connect} from 'react-redux';
import {getCartItems} from './Cart.selector';
import {AppState} from '../../../core/types';

const CartContainer = props => {
  return <CartView navigation={props.navigation} cartItems={props.cartItems} />;
};

export const mapStateToProps = (state: AppState) => {
  return {
    cartItems: getCartItems(state),
  };
};

export const mapDispatchToProps = (dispatch: any) => {
  return {
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(CartContainer);
