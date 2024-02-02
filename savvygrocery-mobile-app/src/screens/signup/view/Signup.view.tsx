import React, {useState} from 'react';
import {
  Text,
  TouchableOpacity,
  View,
  Input,
  withTheme,
} from '../../../uilib/atoms/elements';
import {Image, ScrollView} from 'react-native';
import styles from './Signup.style';
import {navigateTo, navigateToBack} from '../../../utils/RootNavigation.utils';
import {Screens} from '../../../core/constants/Screens.constant';

const SignupView = props => {
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
    <ScrollView style={style.scrollview}>
      <View style={style.container}>
        <Image
          style={{height: 180}}
          resizeMode="contain"
          source={{
            uri: 'https://amandiagnostic.in/wp-content/uploads/2019/06/logo.png',
          }}
        />
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
          placeholder="Age"
          value={password}
          onChangeText={onChangePassword}
          style={style.inputLeftStyle}
        />
        <Input
          inputStyle={style.input}
          inputContainerStyle={style.inputContainer}
          placeholder="Date of Birth"
          value={password}
          onChangeText={onChangePassword}
          style={style.inputLeftStyle}
        />
        <Input
          inputStyle={style.input}
          inputContainerStyle={style.inputContainer}
          placeholder="Email Id"
          value={emailId}
          onChangeText={onChangeEmailID}
          style={style.inputLeftStyle}
        />
        <Input
          inputStyle={style.input}
          inputContainerStyle={style.inputContainer}
          placeholder="Password"
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
            <Text style={style.buttonText}>Cancel</Text>
          </TouchableOpacity>
          <TouchableOpacity
            style={style.buttonLogin}
            onPress={() => {
              navigateTo(props.navigation, Screens.login);
            }}>
            <Text style={style.buttonText}>Signup</Text>
          </TouchableOpacity>
        </View>
      </View>
    </ScrollView>
  );
};

export default withTheme(SignupView, 'SignupView');
