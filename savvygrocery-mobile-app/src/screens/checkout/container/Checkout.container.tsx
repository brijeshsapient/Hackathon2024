import React from 'react';
import CheckoutView from '../view/Checkout.view';
import {connect} from 'react-redux';
import {getCartItems} from './Checkout.selector';
import {AppState} from '../../../core/types';
import { addOrder } from '../../Orders/container/Orders.action';

const CheckoutContainer = props => {
  return (
      
      <CheckoutView navigation={props.navigation} cartItems={props.cartItems} addItemToOrder={props.addOrderItem} />
  );
};

export const mapStateToProps = (state: AppState) => {
  return {
    cartItems: getCartItems(state),
  };
};

export const mapDispatchToProps = (dispatch: any) => {
  return {
    addOrderItem: payload => dispatch(addOrder(payload)),

  };
};

export default connect(mapStateToProps, mapDispatchToProps)(CheckoutContainer);
