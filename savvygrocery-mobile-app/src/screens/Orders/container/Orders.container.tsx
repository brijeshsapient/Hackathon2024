import React from 'react';
import OrderView from '../view/Orders.view';
import {connect} from 'react-redux';
import {getOrderItems} from './Orders.selector';
import {AppState} from '../../../core/types';

const OrderContainer = props => {
  return <OrderView navigation={props.navigation} orderItems={props.orderItems} />;
};

export const mapStateToProps = (state: AppState) => {
  return {
    orderItems: getOrderItems(state),
  };
};

export const mapDispatchToProps = (dispatch: any) => {
  return {
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(OrderContainer);
