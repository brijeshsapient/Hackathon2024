import React from 'react';
import HomeView from '../view/Home.view';
import {connect} from 'react-redux';
import {AppState} from '../../../core/types';
import {getSelectedStore} from '../../changeStore/container/ChangeStore.selector';
import {setCategory} from './Home.action';
import {getCategories} from './Home.selector';

const HomeContainer = props => {
  return (
    <HomeView
      navigation={props.navigation}
      selectedStore={props.selectedStore}
      categoryList={props.categoryList}
    />
  );
};

export const mapStateToProps = (state: AppState) => {
  return {
    selectedStore: getSelectedStore(state),
    categoryList: getCategories(state),
  };
};

export const mapDispatchToProps = (dispatch: any) => {
  return {
    setSelectedCategory: payload => dispatch(setCategory(payload)),
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(HomeContainer);
