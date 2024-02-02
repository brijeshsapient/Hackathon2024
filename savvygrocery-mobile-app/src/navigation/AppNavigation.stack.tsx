import React from 'react';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import {Screens} from '../core/constants/Screens.constant';
import LoginContainer from '../screens/login/container/Login.container';
import SignupContainer from '../screens/signup/container/Signup.container';
import BottomTabStack from './bottomTab/BottomTabStack';
import TestDetailContainer from '../screens/testDetail/container/TestDetail.container';
import AddressListContainer from '../screens/addressList/container/AddressList.container';
import AddAddressContainer from '../screens/addAddress/container/AddAddress.container';
import CheckoutContainer from '../screens/checkout/container/Checkout.container';
import OrderConfirmationContainer from '../screens/orderConfirmation/container/OrderConfirmation.container';

const Stack = createNativeStackNavigator();

function AppNavigation() {
  return (
    <Stack.Navigator
      screenOptions={{
        headerShown: false,
      }}>
      <Stack.Screen name={Screens.login} component={LoginContainer} />
      <Stack.Screen name={Screens.signup} component={SignupContainer} />
      <Stack.Screen name={Screens.bottomTabs} component={BottomTabStack} />
      <Stack.Screen name={Screens.testDetail} component={TestDetailContainer} />
      <Stack.Screen
        name={Screens.addressList}
        component={AddressListContainer}
      />
      <Stack.Screen name={Screens.addAddress} component={AddAddressContainer} />
      <Stack.Screen name={Screens.checkout} component={CheckoutContainer} />
      <Stack.Screen
        name={Screens.orderConfirmation}
        component={OrderConfirmationContainer}
      />
    </Stack.Navigator>
  );
}
export default AppNavigation;
