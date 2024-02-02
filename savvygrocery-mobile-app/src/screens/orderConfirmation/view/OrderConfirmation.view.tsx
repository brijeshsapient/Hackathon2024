import React from 'react';
import {
  Text,
  TouchableOpacity,
  View,
  withTheme,
} from '../../../uilib/atoms/elements';
import styles from './OrderConfirmation.style';
import HeaderView from '../../../uilib/organisms/Header/view/Header.view';
import {navigateTo} from '../../../utils/RootNavigation.utils';
import {BottomTabs, Screens} from '../../../core/constants/Screens.constant';

const OrderConfirmationView = props => {
  const style = styles(props.theme);
  const item = props.item;

  return (
    <View style={style.container}>
      <HeaderView
        navigation={props.navigation}
        title="Order Confirmation"
        isBackButtonHidden={true}
      />
      <View style={style.subview}>
        <View style={style.flatListCard}>
          <Text
            style={style.congratsText}
            numberOfLines={2}
            ellipsizeMode="tail">
            {'Congratulations, you order has been successfully placed.'}
          </Text>
          <Text
            style={style.flatListText}
            numberOfLines={2}
            ellipsizeMode="tail">
            {item.title}
          </Text>
          <View style={style.flatListTestCountContainer}>
            <Text
              style={
                style.flatListTestCountText
              }>{`Includes: ${item.testCount} Parameters`}</Text>
          </View>
          <View style={style.flatListPriceContainer}>
            <Text style={style.flatListDiscountedPriceLabelText}>
              {'Price: '}
            </Text>
            <Text style={style.flatListPriceText}>{`₹${item.price}`}</Text>
            <Text style={style.flatListDiscountedPriceText}>
              {`₹${item.price}`}
            </Text>
          </View>
        </View>
        <TouchableOpacity
          style={[style.addToCartButton]}
          onPress={() => {
            props.resetCart();
            navigateTo(props.navigation, Screens.bottomTabs, {
              screen: BottomTabs.home,
            });
          }}>
          <Text style={style.addToCartButtonText}>Go to Home</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};

export default withTheme(OrderConfirmationView, 'OrderConfirmationView');
