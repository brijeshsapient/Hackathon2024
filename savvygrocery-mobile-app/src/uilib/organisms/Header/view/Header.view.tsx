import React from 'react';
import styles from './Header.style';
import {HeaderProps} from '../type/Header.type';
import {withTheme, Text, View, TouchableOpacity} from '../../../atoms/elements';
import {headerTestIds} from '../constants/Header.locator';
import {
  navigateTo,
  navigateToBack,
} from '../../../../utils/RootNavigation.utils';
import ChevronLeftSVG from '../../../../resources/assets/svg/ChevronLeftSVG';
import CloseSVG from '../../../../resources/assets/svg/CloseSVG';
import CartTabSVG from '../../../../resources/assets/svg/CartTabSVG';
import {BottomTabs, Screens} from '../../../../core/constants/Screens.constant';

const Header = (props: HeaderProps) => {
  const {theme} = props;
  const style = styles(theme!);

  const onLeftButtonPress = () => {
    if (props.onBackPress) {
      props.onBackPress();
    } else {
      navigateToBack();
    }
  };

  const onRightButtonPress = () => {
    if (props.onBackPress) {
      props.onBackPress();
    } else {
      navigateToBack();
    }
  };

  const onCartButtonPress = () => {
    if (props.onCartPress) {
      props.onCartPress();
    } else {
      navigationToCart();
    }
  };

  const getLeftComponent = () => {
    if (props.leftComponent) {
      return props.leftComponent;
    } else if (props.isBackButtonHidden) {
      return <TouchableOpacity style={style.headerLeftButton} />;
    } else {
      return (
        <TouchableOpacity
          style={style.headerLeftButton}
          onPress={onLeftButtonPress}
          testID={headerTestIds.leftButton}>
          <ChevronLeftSVG />
        </TouchableOpacity>
      );
    }
  };

  const getCenterComponent = () => {
    if (props.title) {
      return (
        <Text
          style={[
            style.title,
            {
              color: props.color?.title ?? theme!.colors.white,
            },
          ]}
          testID={headerTestIds.title}>
          {props.title}
        </Text>
      );
    } else {
      return <ChevronLeftSVG />;
    }
  };

  const navigationToCart = () => {
    navigateTo(props.navigation, Screens.bottomTabs, {screen: BottomTabs.cart});
  };

  const getRightComponent = () => {
    if (props.rightComponent) {
      return props.rightComponent;
    } else if (props.isCartButtonVisible) {
      return (
        <TouchableOpacity
          style={style.headerRightButton}
          onPress={onCartButtonPress}
          testID={headerTestIds.rightButton}>
          <CartTabSVG color={theme!.colors.white} />
        </TouchableOpacity>
      );
    } else if (props.isCloseIcon) {
      return (
        <TouchableOpacity
          style={style.headerRightCloseIcon}
          onPress={onRightButtonPress}>
          <CloseSVG color={theme!.colors.white} />
        </TouchableOpacity>
      );
    } else {
      return <TouchableOpacity style={style.headerRightButton} />;
    }
  };

  return (
    <View
      style={[
        style.container,
        {
          backgroundColor: props.color?.background ?? theme!.colors.lapisBlue,
        },
      ]}>
      {getLeftComponent()}
      {getCenterComponent()}
      {getRightComponent()}
    </View>
  );
};

export default withTheme(Header, 'Header');
