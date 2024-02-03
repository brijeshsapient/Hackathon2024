import React from 'react';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import {Screens} from '../core/constants/Screens.constant';
import SearchContainer from '../screens/search/container/Search.container';

const Stack = createNativeStackNavigator();

function SearchStack() {
  return (
    <Stack.Navigator
      screenOptions={{
        headerShown: false,
      }}>
      <Stack.Screen name={Screens.search} component={SearchContainer} />
    </Stack.Navigator>
  );
}
export default SearchStack;
