import React from 'react';
import {
  FlatList,
  Text,
  TouchableOpacity,
  View,
  withTheme,
} from '../../../uilib/atoms/elements';
import HeaderView from '../../../uilib/organisms/Header/view/Header.view';
import CardView from '../../../uilib/atoms/card/Card.view';
import { navigateTo } from '../../../utils/RootNavigation.utils';
import { Screens } from '../../../core/constants/Screens.constant';
import styles from './AddressList.style';

const AddressListView = props => {
  const style = styles(props.theme);
  // const item = props.item;


  const homeItems = [];
  homeItems.push({
    title: 'Ram Singh',
    id: 1,
    address: '727, Udhyog Vihar, Phase V, Gurugram, Haryana, 124001',
  });
  homeItems.push({
    title: 'Amit Singla',
    id: 2,
    address: '727, Sector 4, Greater Noida, Uttar Pradesh, 201306',
  });
  homeItems.push({
    title: 'Sam Mohammed',
    id: 3,
    address: '727, Sector 4, Greater Kailash, New Delhi, 110046',
  });

  const homeFlatlistRenderItem = item => {
    const address = item
    return (
      <TouchableOpacity onPress={() => { navigateTo(props.navigation, Screens.checkout, address ?? {}); }}>
        <CardView style={style.flatListCard}>
          <Text style={style.flatListText} numberOfLines={2} ellipsizeMode="tail">
            {item.title}
          </Text>
          <Text style={style.flatListTestCountText}>{item.address}</Text>
        </CardView>
      </TouchableOpacity>
    );
  };

  return (
    <View style={style.container}>
      <HeaderView navigation={props.navigation} title="Address List" />
      <View style={style.subview}>
        <FlatList
          data={homeItems}
          keyExtractor={item => item.id.toString()}
          renderItem={item => {
            return homeFlatlistRenderItem(item.item);
          }}
        />
        <TouchableOpacity
          style={style.addToCartButton}
          onPress={() => {
            navigateTo(props.navigation, Screens.addAddress);
          }}>
          <Text style={style.addToCartButtonText}>Add Address</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};

export default withTheme(AddressListView, 'AddressListView');
