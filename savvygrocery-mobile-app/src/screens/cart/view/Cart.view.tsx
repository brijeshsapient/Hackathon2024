import React, {useState} from 'react';
import {
  FlatList,
  Text,
  TouchableOpacity,
  View,
  withTheme,
  Image,
} from '../../../uilib/atoms/elements';
import styles from './Cart.style';
import HeaderView from '../../../uilib/organisms/Header/view/Header.view';
import CardView from '../../../uilib/atoms/card/Card.view';
import {navigateTo} from '../../../utils/RootNavigation.utils';
import {Screens} from '../../../core/constants/Screens.constant';
import {launchDeviceImageLibrary} from '../../../utils/ImageLibrary.utils';
import {isEmpty} from 'lodash';

const CartView = props => {
  const style = styles(props.theme);
  // const item = props.item;
  const [image, setImage] = useState('');
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
      <HeaderView
        navigation={props.navigation}
        title="Cart"
        isBackButtonHidden={true}
      />
      <View style={style.subview}>
        {props.cartItems.length > 0 ? (
          <>
            <FlatList
              data={props.cartItems}
              keyExtractor={item => item.id.toString()}
              renderItem={item => {
                return homeFlatlistRenderItem(item.item);
              }}
            />
            <>
              {!isEmpty(image) ? (
                <View
                  style={{
                    marginVertical: 16,
                    marginHorizontal: 16,
                    flexDirection: 'row',
                    justifyContent: 'space-between',
                    alignItems: 'center',
                  }}>
                  <Image
                    style={{height: 120, width: 120}}
                    source={{uri: image}}
                  />
                  <TouchableOpacity
                    style={style.addToCartButton}
                    onPress={() => {
                      setImage('');
                    }}>
                    <Text style={style.addToCartButtonText}>
                      {'  Remove Prescription  '}
                    </Text>
                  </TouchableOpacity>
                </View>
              ) : null}
              <TouchableOpacity
                style={style.addToCartButton}
                onPress={() => {
                  launchDeviceImageLibrary()
                    .then(response => {
                      setImage(response.assets[0].uri);
                    })
                    .catch(error => {
                      setImage('');
                    });
                }}>
                <Text style={style.addToCartButtonText}>
                  Select Prescription
                </Text>
              </TouchableOpacity>
              <TouchableOpacity
                style={style.addToCartButton}
                onPress={() => {
                  navigateTo(props.navigation, Screens.checkout);
                }}>
                <Text style={style.addToCartButtonText}>Checkout</Text>
              </TouchableOpacity>
            </>
          </>
        ) : (
          <View style={style.noItemsView}>
            <Text style={style.noItemsText}>No Items Added</Text>
          </View>
        )}
      </View>
    </View>
  );
};

export default withTheme(CartView, 'CartView');
