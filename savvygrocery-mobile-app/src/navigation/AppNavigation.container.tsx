import React from 'react';
import {connect} from 'react-redux';
import {ThemeProvider} from 'react-native-elements';
import {NavigationContainer} from '@react-navigation/native';
import {lightTheme} from '../uilib/theme';
import {isReadyRef, navigationRef} from '../utils/RootNavigation.utils';
import AppNavigation from './AppNavigation.stack';
import {AppState} from '../core/types';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import {Screens} from '../core/constants/Screens.constant';
import LoginContainer from '../screens/login/container/Login.container';

const Stack = createNativeStackNavigator();

function AppNavigationContainer(props) {
  //   const {isLoading, getAppConfigs} = props;
  const onNavigationStateChange = () => {
    /* istanbul ignore next */

    console.log('onNavigationStateChange');
  };

  const updateAppNavigationReady = (payload: boolean) => {
    /* istanbul ignore next */

    console.log('updateAppNavigationReady:::', payload);
  };

  return (
    <NavigationContainer
      independent={true}
      ref={navigationRef}
      onStateChange={onNavigationStateChange}
      onReady={() => {
        if (isReadyRef) {
          isReadyRef.current = true;
        }
        updateAppNavigationReady(true);
      }}>
      <ThemeProvider theme={lightTheme}>
        <AppNavigation />
      </ThemeProvider>
    </NavigationContainer>
  );
}

export const mapStateToProps = (state: AppState) => {
  return {};
};

export const mapDispatchToProps = (dispatch: any) => {
  return {};
};

export {AppNavigation};

export default connect(
  mapStateToProps,
  mapDispatchToProps,
)(AppNavigationContainer);
