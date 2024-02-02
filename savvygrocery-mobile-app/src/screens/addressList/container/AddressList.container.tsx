import React from 'react';
import AddressListView from '../view/AddressList.view';

const AddressListContainer = props => {
  return <AddressListView navigation={props.navigation} />;
};

export default AddressListContainer;
