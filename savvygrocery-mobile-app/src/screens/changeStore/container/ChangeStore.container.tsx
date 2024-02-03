import React from 'react';
import ChangeStoreView from '../view/ChangeStore.view';
import {setStore} from './ChangeStore.action';
import {connect} from 'react-redux';
import {getStores} from './ChangeStore.selector';
import {AppState} from '../../../core/types';

const ChangeStoreContainer = props => {
  console.log(props.stores);

  return (
    <ChangeStoreView
      navigation={props.navigation}
      setSelectedStore={props.setSelectedStore}
      storeList={props.storeList}
    />
  );
};

export const mapStateToProps = (state: AppState) => {
  return {
    storeList: getStores(state),
  };
};

export const mapDispatchToProps = (dispatch: any) => {
  return {
    setSelectedStore: payload => dispatch(setStore(payload)),
  };
};

export default connect(
  mapStateToProps,
  mapDispatchToProps,
)(ChangeStoreContainer);
