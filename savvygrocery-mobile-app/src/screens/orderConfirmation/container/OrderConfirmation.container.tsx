import React from 'react';
import {connect} from 'react-redux';
import OrderConfirmationView from '../view/OrderConfirmation.view';
import {AppState} from '../../../core/types';
import {addItemToCart, clearCart} from '../../cart/container/Cart.action';

const OrderConfirmationContainer = props => {
  return (
    <OrderConfirmationView
      navigation={props.navigation}
      item={props.route.params.item}
      resetCart={props.resetCart}
    />
  );
};

export const mapStateToProps = (_state: AppState) => {
  return {};
};

export const mapDispatchToProps = (dispatch: any) => {
  return {
    resetCart: () => dispatch(clearCart()),
  };
};

export default connect(
  mapStateToProps,
  mapDispatchToProps,
)(OrderConfirmationContainer);
