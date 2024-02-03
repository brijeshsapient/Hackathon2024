import * as React from 'react';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import HomeStack from '../Home.stack';
import SettingsStack from '../Settings.stack';
import {BottomTabs} from '../../core/constants/Screens.constant';
import {BottomTabIconPath} from './BottomTabIconPath';
import {BottomTabIconProps, BottomTabProps} from '../types/AppNavigation.type';
import {withTheme} from '../../uilib/atoms/elements';
import {Regular12OpenSans} from '../../uilib/typography';
import CartStack from '../Cart.stack';
import SearchStack from '../Search.stack';

const Tab = createBottomTabNavigator();

/**
 * @param param0 theme : for using colors according to theme
 * Component for Bottom Tab Navigation with all the Tabs
 */
export const BottomTab = (props: BottomTabProps) => {
  const getTabIconPath = (route: {name: string}, focused: boolean) => {
    const color: string | undefined = focused
      ? props.theme?.colors.navyBlue
      : props.theme?.colors.dimGray;
    const name: string = route.name;
    return <BottomTabIconPath color={color} name={name} />;
  };

  const getOptions = (screenKey: string) => {
    return {
      tabBarLabel: screenKey,
      unmountOnBlur: true,
    };
  };

  const getTabScreen = (screenKey: string, component: any) => {
    return (
      <Tab.Screen
        options={getOptions(screenKey)}
        name={screenKey}
        component={component}
      />
    );
  };

  return (
    <Tab.Navigator
      screenOptions={({route}) => ({
        headerShown: false,
        tabBarIcon: ({focused}: BottomTabIconProps) => {
          return getTabIconPath(route, focused);
        },
        tabBarLabelStyle: {...Regular12OpenSans},
        tabBarHideOnKeyboard: true,
        detachInactiveScreens: true,
      })}>
      {getTabScreen(BottomTabs.home, HomeStack)}
      {getTabScreen(BottomTabs.search, SearchStack)}
      {getTabScreen(BottomTabs.cart, CartStack)}
      {getTabScreen(BottomTabs.settings, SettingsStack)}
    </Tab.Navigator>
  );
};

export default withTheme(BottomTab, 'BottomTab');
