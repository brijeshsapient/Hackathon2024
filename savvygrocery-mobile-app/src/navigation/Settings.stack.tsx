import React from 'react';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import {Screens} from '../core/constants/Screens.constant';
import SettingsContainer from '../screens/settings/container/Settings.container';

const Stack = createNativeStackNavigator();

function SettingsStack() {
  return (
    <Stack.Navigator
      screenOptions={{
        headerShown: false,
      }}>
      <Stack.Screen name={Screens.settings} component={SettingsContainer} />
    </Stack.Navigator>
  );
}
export default SettingsStack;
