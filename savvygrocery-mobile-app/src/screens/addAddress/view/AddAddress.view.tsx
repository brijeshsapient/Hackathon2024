import React, {useState} from 'react';
import {
  Text,
  TouchableOpacity,
  View,
  Input,
  withTheme,
} from '../../../uilib/atoms/elements';
import {ScrollView} from 'react-native';
import styles from './AddAddress.style';
import {navigateToBack} from '../../../utils/RootNavigation.utils';
import HeaderView from '../../../uilib/organisms/Header/view/Header.view';

const AddAddressView = props => {
  const style = styles(props.theme);
  const [contactName, setContactName] = useState('');
  const [contactMobile, setContactMobile] = useState('');
  const [billingAddress, setBillingAddress] = useState('');
  const [emailId, setEmailId] = useState('');
  const [shippingAddress, setShippingAddress] = useState('');

  const onChangeInput = (value: string, id: string) => {
    if (id === 'contactName') {
      setContactName(value);
    } else if (id === 'contactMobile') {
      setContactMobile(value);
    } else if (id === 'emailId') {
      setEmailId(value);
    } else if (id === 'shippingAddress') {
      setShippingAddress(value);
    } else if (id === 'billingAddress') {
      setBillingAddress(value);
    }
  };
  return (
    <>
      <HeaderView title="Add Address" navigation={props.navigation} />
      <ScrollView style={style.scrollview}>
        <View style={style.container}>
          <Input
            inputStyle={style.input}
            inputContainerStyle={style.inputContainer}
            placeholder="Full Name"
            value={contactName}
            onChangeText={value => {
              onChangeInput(value, 'contactName');
            }}
            style={style.inputLeftStyle}
          />
          <Input
            inputStyle={style.input}
            inputContainerStyle={style.inputContainer}
            placeholder="Mobile"
            value={contactMobile}
            onChangeText={value => {
              onChangeInput(value, 'contactMobile');
            }}
            style={style.inputLeftStyle}
          />
          <Input
            inputStyle={style.input}
            inputContainerStyle={style.inputContainer}
            placeholder="Email Id"
            value={emailId}
            onChangeText={value => {
              onChangeInput(value, 'emailId');
            }}
            style={style.inputLeftStyle}
          />
          <Input
            inputStyle={style.input}
            inputContainerStyle={style.inputContainer}
            placeholder="Shipping Address"
            value={shippingAddress}
            onChangeText={value => {
              onChangeInput(value, 'shippingAddress');
            }}
            style={style.inputLeftStyle}
          />
          <Input
            inputStyle={style.input}
            inputContainerStyle={style.inputContainer}
            placeholder="Billing Address"
            value={billingAddress}
            onChangeText={value => {
              onChangeInput(value, 'billingAddress');
            }}
            style={style.inputLeftStyle}
          />
          <View style={style.buttonContainer}>
            <TouchableOpacity
              style={style.buttonSignup}
              onPress={() => {
                navigateToBack(props.navigation);
              }}>
              <Text style={style.buttonText}>Add</Text>
            </TouchableOpacity>
          </View>
        </View>
      </ScrollView>
    </>
  );
};

export default withTheme(AddAddressView, 'AddAddressView');
