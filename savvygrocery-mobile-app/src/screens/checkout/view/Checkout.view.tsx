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
import { navigateTo } from '../../../utils/RootNavigation.utils';
import { Screens } from '../../../core/constants/Screens.constant';
import { Image } from 'react-native';
import ItemCard from '../../../uilib/atoms/shopItem/ItemCard.view';
import { useRoute } from '@react-navigation/native';

const CheckoutView = props => {
  const style = styles(props.theme);
  // const item = props.item;
  const route = useRoute();
  const address = route?.params;


  const homeFlatlistRenderItem = item => {

    return (
      <CardView style={style.flatListCard}>
        <ItemCard item={item} />
      </CardView>
    );
  };

  const randomString = (length, chars) => {
    var result = '';
    for (var i = length; i > 0; --i) result += chars[Math.floor(Math.random() * chars.length)];
    return result;
  }

  return (
    <View style={style.container}>
      <HeaderView navigation={props.navigation} title="Checkout" />
      <View style={style.subview}>
        <FlatList
          data={props.cartItems}
          keyExtractor={item => item.product_id.toString()}
          renderItem={item => {
            return homeFlatlistRenderItem(item.item);
          }}
        />

        {
          address?.id ?
            <TouchableOpacity
              onPress={() => {
                navigateTo(props.navigation, Screens.addressList);
              }}
              style={{ marginVertical: 20 }}
            >
              <Text style={{ fontSize: 18, fontWeight: 'bold', marginVertical: 5, textAlign: 'center' }}>{'Address : '}</Text>
              <CardView style={style.flatListCard}>
                <Text style={style.flatListText} numberOfLines={2} ellipsizeMode="tail">
                  {address?.title}
                </Text>
                <Text style={[style.flatListTestCountText, { color: 'black' }]}>{address?.address}</Text>
              </CardView>
            </TouchableOpacity>
            :
            <TouchableOpacity
              style={style.addAddressButton}
              onPress={() => {
                navigateTo(props.navigation, Screens.addressList);
              }}>
              <Text style={style.addAddressButtonText}>Select Address</Text>
            </TouchableOpacity>
        }

        {props.cartItems.length > 0 ? (
          <TouchableOpacity
            style={style.addToCartButton}
            onPress={() => {
              const orderId = randomString(32, '0123456789abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ');
              props.addItemToOrder({ orderId, items: props.cartItems })
              navigateTo(props.navigation, Screens.orderConfirmation, {
                item: props.cartItems,
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
