import React from 'react';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import {Screens} from '../core/constants/Screens.constant';
import SettingsContainer from '../screens/settings/container/Settings.container';
import OrdersContainer from '../screens/Orders/container/Orders.container';
import OrderDetailsView from '../screens/Orders/view/OrderDetails.view';

const Stack = createNativeStackNavigator();

function SettingsStack() {
  return (
    <Stack.Navigator
      screenOptions={{
        headerShown: false,
      }}>
      <Stack.Screen name={Screens.settings} component={SettingsContainer} />
      <Stack.Screen name={Screens.orders} component={OrdersContainer} />
      <Stack.Screen name={Screens.orderDetails} component={OrderDetailsView} />
    </Stack.Navigator>
  );
}
export default SettingsStack;
