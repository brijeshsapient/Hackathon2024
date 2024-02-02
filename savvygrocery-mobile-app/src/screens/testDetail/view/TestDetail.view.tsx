import React, {useState} from 'react';
import {
  Text,
  TouchableOpacity,
  View,
  withTheme,
} from '../../../uilib/atoms/elements';
import styles from './TestDetail.style';
import HeaderView from '../../../uilib/organisms/Header/view/Header.view';
import {Alert} from 'react-native';

const TestDetailView = props => {
  const style = styles(props.theme);
  const [isAdded, setIsAdded] = useState(false);
  const item = props.item;

  return (
    <View style={style.container}>
      <HeaderView
        navigation={props.navigation}
        title="Product Detail"
        isCartButtonVisible={true}
      />
      <View style={style.subview}>
        <View style={style.flatListCard}>
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
          style={[style.addToCartButton, isAdded ? style.disabledOpacity : {}]}
          onPress={() => {
            if (!isAdded) {
              setIsAdded(true);
              props.addItemToCart(item);
              Alert.alert('Test added to cart succesfully');
            }
          }}>
          <Text style={style.addToCartButtonText}>Add to Cart</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};

export default withTheme(TestDetailView, 'TestDetailView');
