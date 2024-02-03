import React from 'react';
import CLPView from '../view/CLP.view';
import {connect} from 'react-redux';
import {AppState} from '../../../core/types';
import {getSelectedCategory} from '../../home/container/Home.selector';

const CLPContainer = props => {
  return (
    <CLPView
      navigation={props.navigation}
      selectedCategory={props.selectedCategory}
      categoryList={props.categoryList}
    />
  );
};

export const mapStateToProps = (state: AppState) => {
  return {
    selectedCategory: getSelectedCategory(state),
  };
};

export const mapDispatchToProps = (dispatch: any) => {
  return {
    setSelectedCategory: payload => dispatch(setCategory(payload)),
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(CLPContainer);
