import React from 'react';
import {
  FlatList,
  Text,
  TouchableOpacity,
  View,
  withTheme,
} from '../../../uilib/atoms/elements';
import styles from './Checkout.style';
import HeaderView from '../../../uilib/organisms/Header/view/Header.view';
import CardView from '../../../uilib/atoms/card/Card.view';
import {navigateTo} from '../../../utils/RootNavigation.utils';
import {Screens} from '../../../core/constants/Screens.constant';

const CheckoutView = props => {
  const style = styles(props.theme);
  // const item = props.item;

  const homeFlatlistRenderItem = item => {
    return (
      <CardView style={style.flatListCard}>
        <Text style={style.flatListText} numberOfLines={2} ellipsizeMode="tail">
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
      </CardView>
    );
  };

  return (
    <View style={style.container}>
      <HeaderView navigation={props.navigation} title="Checkout" />
      <View style={style.subview}>
        <FlatList
          data={props.cartItems}
          keyExtractor={item => item.id.toString()}
          renderItem={item => {
            return homeFlatlistRenderItem(item.item);
          }}
          ListFooterComponent={() => {
            return (
              <TouchableOpacity
                style={style.addAddressButton}
                onPress={() => {
                  navigateTo(props.navigation, Screens.addressList);
                }}>
                <Text style={style.addAddressButtonText}>Select Address</Text>
              </TouchableOpacity>
            );
          }}
        />
        {props.cartItems.length > 0 ? (
          <TouchableOpacity
            style={style.addToCartButton}
            onPress={() => {
              navigateTo(props.navigation, Screens.orderConfirmation, {
                item: props.cartItems[0],
              });
            }}>
            <Text style={style.addToCartButtonText}>Proceed to Payment</Text>
          </TouchableOpacity>
        ) : null}
      </View>
    </View>
  );
};

export default withTheme(CheckoutView, 'CheckoutView');
