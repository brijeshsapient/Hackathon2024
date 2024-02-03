import * as React from 'react';
import HomeTabSVG from '../../resources/assets/svg/HomeTabSVG';
import SettingsTabSVG from '../../resources/assets/svg/SettingsTabSVG';
import {BottomTabs} from '../../core/constants/Screens.constant';
import CartTabSVG from '../../resources/assets/svg/CartTabSVG';
import SearchTabSVG from '../../resources/assets/svg/SearchTabSVG';

export const BottomTabIconPath = ({
  color,
  name,
}: {
  color?: string;
  name: string;
}) => {
  switch (name) {
    case BottomTabs.settings:
      return <SettingsTabSVG color={color} />;
    case BottomTabs.cart:
      return <CartTabSVG color={color} />;
    case BottomTabs.search:
      return <SearchTabSVG color={color} />;
    default:
      return <HomeTabSVG color={color} />;
  }
};
