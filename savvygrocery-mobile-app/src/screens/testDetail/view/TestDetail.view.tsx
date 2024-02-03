import React, { useState } from 'react';
import {
  Text,
  TouchableOpacity,
  View,
  withTheme,
} from '../../../uilib/atoms/elements';
import styles from './TestDetail.style';
import HeaderView from '../../../uilib/organisms/Header/view/Header.view';
import { Alert, Image, ScrollView } from 'react-native';
import { useRoute } from '@react-navigation/native';

const TestDetailView = props => {
  const style = styles(props.theme);
  const [isAdded, setIsAdded] = useState(false);
  const route = useRoute()
  const itemDetail = route.params;


  const item = itemDetail?.item?.product;

  return (
    <View style={style.container}>
      <HeaderView
        navigation={props.navigation}
        title="Product Detail"
        isCartButtonVisible={true}
      />
      <View style={style.subview}>
      <ScrollView contentContainerStyle={{flexGrow:1}}>
        <View style={style.flatListCard}>

          <Image source={{ uri: item?.image_url }} style={{ height: 250, width: 200, alignSelf: 'center', marginVertical: 25 }} />
          <Text style={{ fontSize: 20, fontWeight: 'bold' }}>{item?.name}</Text>
          <Text style={{ fontSize: 15, marginVertical: 5 }}>{item?.unit}</Text>
          <View style={style.flatListPriceContainer}>
            <Text style={style.flatListDiscountedPriceLabelText}>
              {'Price: '}
            </Text>
            <Text style={style.flatListPriceText}>{`₹${item.price}`}</Text>
            <Text style={style.flatListDiscountedPriceText}>
              {`₹${item.price}`}
            </Text>
          </View>

          <View style={{ marginVertical: 15 }}>
            <Text style={{ fontSize: 20, fontWeight: 'bold' }}>{'Product details '}</Text>
            <Text style={{ fontSize: 15, fontWeight: 'bold', marginVertical: 10 }}>{'Key features '}</Text>
            <Text>{item?.attributes?.key_features}</Text>
            <Text style={{ fontSize: 15, fontWeight: 'bold', marginVertical: 10 }}>{'Unit '}</Text>
            <Text>{item?.unit}</Text>
            <Text style={{ fontSize: 15, fontWeight: 'bold', marginVertical: 10 }}>{'Description '}</Text>
            <Text>{item?.attributes?.description}</Text>
            <Text style={{ fontSize: 15, fontWeight: 'bold', marginVertical: 10 }}>{'Disclaimer '}</Text>
            <Text>{item?.attributes?.disclaimer}</Text>
          </View>
        </View>
      </ScrollView>
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
