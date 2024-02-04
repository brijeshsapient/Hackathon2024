import React from 'react';
import {
  FlatList,
  Text,
  TouchableOpacity,
  View,
  withTheme,
} from '../../../uilib/atoms/elements';
import styles from './PLP.style';
import CardView from '../../../uilib/atoms/card/Card.view';
import {navigateTo} from '../../../utils/RootNavigation.utils';
import {BottomTabs, Screens} from '../../../core/constants/Screens.constant';
import SearchTabSVG from '../../../resources/assets/svg/SearchTabSVG';
import {Image} from 'react-native-elements';
import {ActivityIndicator} from 'react-native';
import HeaderView from '../../../uilib/organisms/Header/view/Header.view';
import {NativeEventEmitter, NativeModules} from 'react-native';

const PLPView = props => {
  const style = styles(props.theme);
  const { AlanEventEmitter} = NativeModules;
  const alanEventEmitter = new NativeEventEmitter(AlanEventEmitter);
  let item;
  alanEventEmitter.addListener('onCommand', data => {
    console.log(`got command event ${JSON.stringify(data)}`);
    navigateTo(props.navigation, Screens.testDetail, {
      item: item,
    });
  });
  const homeFlatlistRenderItem = item => {
    return (
      <CardView style={style.flatListCard}>
        <TouchableOpacity
          onPress={() => {
            item = item.data
            navigateTo(props.navigation, Screens.testDetail, {
              item: item.data,
            });
          }}>
          <View style={style.flatListPriceContainer}>
            <Image
              source={{uri: item.data.product.image_url}}
              style={{width: 40, height: 40, marginRight: 8}}
              PlaceholderContent={<ActivityIndicator />}
            />
            <Text
              style={style.flatListText}
              numberOfLines={2}
              ellipsizeMode="tail">
              {item.data.product.name}
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
        title={props.selectedCategory.subCategories[0].text}
      />
      <Text style={[style.categoriesText, {marginLeft: 16}]}>{'Products'}</Text>
      <FlatList
        data={props.selectedCategory.subCategories[0].products}
        keyExtractor={item => item.tracking.widget_meta.id.toString()}
        renderItem={item => {
          return homeFlatlistRenderItem(item.item);
        }}
      />
    </View>
  );
};

export default withTheme(PLPView, 'PLPView');
