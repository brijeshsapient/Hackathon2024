import React from 'react';
import { View, Text, Image } from 'react-native';
import styles from './ItemCard.style'
import { withTheme } from 'react-native-elements';

const ItemCard = (props) => {
  const style = styles(props.theme);
  const item = props?.item;

  return (
    <View style={style.mainContainer}>
      <View style={{ flex: 0.2 }}>
        <Image source={{ uri: item?.image_url }} style={style.imageStyle} />
      </View>
      <View style={{ flex: 0.8 }}>
        <Text >{item?.name}</Text>

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
    </View>
  )
}

export default withTheme(ItemCard,'ItemCard');
