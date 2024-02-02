import React from 'react';
import {connect} from 'react-redux';
import TestDetailView from '../view/TestDetail.view';
import {AppState} from '../../../core/types';
import {addItemToCart} from '../../cart/container/Cart.action';

const TestDetailContainer = props => {
  return (
    <TestDetailView
      navigation={props.navigation}
      item={props.route.params.item}
      addItemToCart={props.addItemInCart}
    />
  );
};

export const mapStateToProps = (_state: AppState) => {
  return {};
};

export const mapDispatchToProps = (dispatch: any) => {
  return {
    addItemInCart: payload => dispatch(addItemToCart(payload)),
  };
};

export default connect(
  mapStateToProps,
  mapDispatchToProps,
)(TestDetailContainer);
