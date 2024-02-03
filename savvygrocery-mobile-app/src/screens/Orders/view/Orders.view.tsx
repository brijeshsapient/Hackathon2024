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
import { navigateTo } from '../../../utils/RootNavigation.utils';
import { Screens } from '../../../core/constants/Screens.constant';
import { isEmpty } from 'lodash';

const OrderView = props => {
  const style = styles(props.theme);
  // const item = props.item;
  const [image, setImage] = useState('');
  

  return (
    <View style={style.container}>
      <HeaderView
        navigation={props.navigation}
        title="Order History"
      />
      <View style={style.subview}>
        {props.orderItems.length > 0 ? (
          <>
            <FlatList
              data={props.orderItems}
              keyExtractor={item => item.orderId.toString()}
              renderItem={({ item, index }) => {
                return (
                  <TouchableOpacity onPress={() => {navigateTo(props.navigation, Screens.orderDetails, {
                    item,
                  }); }}>
                    <CardView style={style.flatListCard}>
                      <Text>{`Order # ${index + 1}`}</Text>
                      <Text>{`OrderID : ${item?.orderId}`}</Text>
                    </CardView>
                  </TouchableOpacity>
                )
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
            <Text style={style.noItemsText}>No Order Found!</Text>
          </View>
        )}
      </View>
    </View>
  );
};

export default withTheme(OrderView, 'OrderView');
