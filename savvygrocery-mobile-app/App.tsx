import React from 'react';
import {StatusBar} from 'react-native';
import {SafeAreaProvider, SafeAreaView} from 'react-native-safe-area-context';
import {Provider} from 'react-redux';
import configureStore from './src/core/store';
import AppNavigationContainer from './src/navigation/AppNavigation.container';
import {NetworkProvider} from './src/core/context/NetworkProvider';
import {lightColors} from './src/core/constants/Color.constant';

export const {store} = configureStore();

const App = () => {
  const safeAreaStyle = {flex: 1};
  return (
    <Provider store={store}>
      <StatusBar backgroundColor={lightColors.lapisBlue} />
      <SafeAreaProvider>
        <SafeAreaView style={safeAreaStyle}>
          <AppNavigationContainer />
        </SafeAreaView>
      </SafeAreaProvider>
    </Provider>
  );
};

export default App;
