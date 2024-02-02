import * as React from 'react';
import {CommonActions} from '@react-navigation/native';
import {Screens} from '../core/constants/Screens.constant';

export const navigationRef: any = React.createRef();
export const isReadyRef: any = React.createRef();
export let currentScreenName: string;

export function navigate(args: {name: string; params: any}) {
  if (isReadyRef.current && navigationRef.current) {
    navigationRef.current.navigate({
      name: args.name,
      params: args.params,
      merge: true,
    });
  }
}

export function navigateTo(
  navigation: Record<string, any>,
  name: string,
  params?: any,
) {
  navigation.navigate({
    name: name,
    params: params,
    merge: true,
  });
}

export function navigateToBack(
  navigation: Record<string, any> | undefined = undefined,
) {
  if (navigation) {
    navigation.goBack();
  } else if (isReadyRef.current && navigationRef.current) {
    navigationRef.current.goBack();
  }
}

export function navigateToLogin() {
  if (isReadyRef.current && navigationRef.current) {
    navigationRef.current.dispatch(() => {
      return CommonActions.reset({
        index: 1,
        routes: [{name: Screens.login}],
      });
    });
  }
}

export function setCurrentScreenName(screenName: string) {
  currentScreenName = screenName;
}

export function getScreenName() {
  return currentScreenName;
}
