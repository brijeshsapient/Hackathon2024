import React, { useState } from 'react';
import { Image } from 'react-native';
import {
  FlatList,
  Text,
  TouchableOpacity,
  View,
  withTheme,
} from '../../../uilib/atoms/elements';
import styles from './Orders.style';
import HeaderView from '../../../uilib/organisms/Header/view/Header.view';
import CardView from '../../../uilib/atoms/card/Card.view';
import { isEmpty } from 'lodash';
import ItemCard from '../../../uilib/atoms/shopItem/ItemCard.view';
import { useRoute } from '@react-navigation/native';

const OrderDetails = props => {
  const style = styles(props.theme);
  const route = useRoute();
  const item = route?.params?.item;
  const [image, setImage] = useState('');

  const renderItemList = item => {
    return (
      <CardView style={style.flatListCard}>
        <ItemCard item={item} />
      </CardView>
    );
  };

  return (
    <View style={style.container}>
      <HeaderView
        navigation={props.navigation}
        title="Order Detials"
      />
      <View style={style.subview}>
        {item?.items?.length > 0 ? (
          <>
            <FlatList
              data={item?.items}
              keyExtractor={item => item.product_id.toString()}
              renderItem={({ item, index }) => {
                return renderItemList(item);
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
                    style={{ height: 120, width: 120 }}
                    source={{ uri: image }}
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

            </>
          </>
        ) : (
          <View style={style.noItemsView}>
            <Text style={style.noItemsText}>No Order Detail Found!</Text>
          </View>
        )}
      </View>
    </View>
  );
};

export default withTheme(OrderDetails, 'OrderDetails');
