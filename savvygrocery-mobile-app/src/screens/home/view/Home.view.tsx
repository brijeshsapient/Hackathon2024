import React from 'react';
import {
  FlatList,
  Text,
  TouchableOpacity,
  View,
  withTheme,
} from '../../../uilib/atoms/elements';
import styles from './Home.style';
import HeaderView from '../../../uilib/organisms/Header/view/Header.view';
import CardView from '../../../uilib/atoms/card/Card.view';
import {navigateTo} from '../../../utils/RootNavigation.utils';
import {Screens} from '../../../core/constants/Screens.constant';

const HomeView = props => {
  const style = styles(props.theme);

  const homeItems = [];
  homeItems.push({
    title: 'Extended Fever Package',
    id: 1,
    testCount: 50,
    price: 1511,
  });
  homeItems.push({
    title: 'First Health Check Up Package 1.0',
    id: 2,
    testCount: 58,
    price: 559,
  });
  homeItems.push({
    title: 'First Health Check Up Package 2.0',
    id: 3,
    testCount: 69,
    price: 1119,
  });
  homeItems.push({
    title: 'Full Body Checkup With Vitamin Screening',
    id: 4,
    testCount: 85,
    price: 2071,
  });
  homeItems.push({
    title:
      'Healthy India 2023 Full Body Checkup With Vitamin Screening And Allergy Screening By ImmunoCAP',
    id: 5,
    testCount: 92,
    price: 2255,
  });
  homeItems.push({
    title: 'Advance Screening Package 3.0',
    id: 6,
    testCount: 90,
    price: 2239,
  });

  const homeFlatlistRenderItem = item => {
    return (
      <CardView style={style.flatListCard}>
        <TouchableOpacity
          onPress={() => {
            navigateTo(props.navigation, Screens.testDetail, {
              item: item,
            });
          }}>
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
        </TouchableOpacity>
      </CardView>
    );
  };

  return (
    <View style={style.container}>
      <HeaderView
        navigation={props.navigation}
        title="Home"
        isBackButtonHidden={true}
      />
      <FlatList
        data={homeItems}
        keyExtractor={item => item.id.toString()}
        renderItem={item => {
          return homeFlatlistRenderItem(item.item);
        }}
      />
    </View>
  );
};

export default withTheme(HomeView, 'HomeView');
