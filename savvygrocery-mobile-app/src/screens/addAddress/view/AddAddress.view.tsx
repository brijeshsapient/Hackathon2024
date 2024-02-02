import React, {useState} from 'react';
import {
  Text,
  TouchableOpacity,
  View,
  Input,
  withTheme,
} from '../../../uilib/atoms/elements';
import {Image, ScrollView} from 'react-native';
import styles from './AddAddress.style';
import {navigateTo, navigateToBack} from '../../../utils/RootNavigation.utils';
import {Screens} from '../../../core/constants/Screens.constant';
import HeaderView from '../../../uilib/organisms/Header/view/Header.view';

const AddAddressView = props => {
  const style = styles(props.theme);
  const [emailId, setEmailId] = useState('');
  const [password, setPassword] = useState('');

  const onChangeEmailID = (newEmaild: string) => {
    setEmailId(newEmaild);
  };

  const onChangePassword = (newPassowrd: string) => {
    setPassword(newPassowrd);
  };

  return (
    <>
      <HeaderView title="Add Address" navigation={props.navigation} />
      <ScrollView style={style.scrollview}>
        <View style={style.container}>
          <Input
            inputStyle={style.input}
            inputContainerStyle={style.inputContainer}
            placeholder="Name"
            value={emailId}
            onChangeText={onChangeEmailID}
            style={style.inputLeftStyle}
          />
          <Input
            inputStyle={style.input}
            inputContainerStyle={style.inputContainer}
            placeholder="Street Address"
            value={password}
            onChangeText={onChangePassword}
            style={style.inputLeftStyle}
          />
          <Input
            inputStyle={style.input}
            inputContainerStyle={style.inputContainer}
            placeholder="City"
            value={password}
            onChangeText={onChangePassword}
            style={style.inputLeftStyle}
          />
          <Input
            inputStyle={style.input}
            inputContainerStyle={style.inputContainer}
            placeholder="State"
            value={emailId}
            onChangeText={onChangeEmailID}
            style={style.inputLeftStyle}
          />
          <Input
            inputStyle={style.input}
            inputContainerStyle={style.inputContainer}
            placeholder="Pincode"
            value={password}
            onChangeText={onChangePassword}
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
