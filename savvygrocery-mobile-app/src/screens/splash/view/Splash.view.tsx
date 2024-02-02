import React from 'react';
import {
  Text,
  TouchableOpacity,
  View,
  Input,
} from '../../../uilib/atoms/elements';

const SplashView = props => {
  return (
    <View>
      <View>
        <Input placeholder="Emai id" />
        <Input placeholder="Password" />
        <View>
          <TouchableOpacity>
            <Text>Sign Up</Text>
          </TouchableOpacity>
          <TouchableOpacity>
            <Text>Login</Text>
          </TouchableOpacity>
        </View>
      </View>
    </View>
  );
};

export default SplashView;
