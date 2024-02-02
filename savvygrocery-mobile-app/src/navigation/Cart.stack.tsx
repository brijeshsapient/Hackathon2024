import React from 'react';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import {Screens} from '../core/constants/Screens.constant';
import CartContainer from '../screens/cart/container/Cart.container';

const Stack = createNativeStackNavigator();

function CartStack() {
  return (
    <Stack.Navigator
      screenOptions={{
        headerShown: false,
      }}>
      <Stack.Screen name={Screens.cart} component={CartContainer} />
    </Stack.Navigator>
  );
}
export default CartStack;
