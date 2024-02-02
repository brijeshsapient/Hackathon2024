import React, {useState} from 'react';
import {
  Text,
  TouchableOpacity,
  View,
  Input,
  withTheme,
} from '../../../uilib/atoms/elements';
import styles from './Login.style';
import Card from '../../../uilib/atoms/card/Card.view';
import {Image, ImageBackground} from 'react-native';
import {LoginBackgroundBase64} from '../../../resources/assets/base64/LoginBackgroundBase64';
import {navigateTo} from '../../../utils/RootNavigation.utils';
import {Screens} from '../../../core/constants/Screens.constant';

const LoginView = props => {
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
    <View style={style.container}>
      <ImageBackground
        source={{uri: LoginBackgroundBase64}}
        resizeMode="cover"
        style={style.backgroundContainer}>
        <Card style={style.formContainer}>
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
                navigateTo(props.navigation, Screens.signup);
              }}>
              <Text style={style.buttonText}>Sign Up</Text>
            </TouchableOpacity>
            <TouchableOpacity
              style={style.buttonLogin}
              onPress={() => {
                navigateTo(props.navigation, Screens.bottomTabs);
              }}>
              <Text style={style.buttonText}>Login</Text>
            </TouchableOpacity>
          </View>
        </Card>
      </ImageBackground>
    </View>
  );
};

export default withTheme(LoginView, 'LoginView');
