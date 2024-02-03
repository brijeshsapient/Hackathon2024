import React from 'react';
import {
  FlatList,
  Text,
  TouchableOpacity,
  View,
  withTheme,
} from '../../../uilib/atoms/elements';
import styles from './CLP.style';
import CardView from '../../../uilib/atoms/card/Card.view';
import {navigateTo} from '../../../utils/RootNavigation.utils';
import {BottomTabs, Screens} from '../../../core/constants/Screens.constant';
import SearchTabSVG from '../../../resources/assets/svg/SearchTabSVG';
import {Image} from 'react-native-elements';
import {ActivityIndicator} from 'react-native';
import HeaderView from '../../../uilib/organisms/Header/view/Header.view';

const CLPView = props => {
  const style = styles(props.theme);
  const homeFlatlistRenderItem = item => {
    return (
      <CardView style={style.flatListCard}>
        <TouchableOpacity
          onPress={() => {
            navigateTo(props.navigation, Screens.plp, {
              item: item,
            });
          }}>
          <View style={style.flatListPriceContainer}>
            <Image
              source={{uri: item.image}}
              style={{width: 40, height: 40, marginRight: 8}}
              PlaceholderContent={<ActivityIndicator />}
            />
            <Text
              style={style.flatListText}
              numberOfLines={2}
              ellipsizeMode="tail">
              {item.text}
            </Text>
          </View>
        </TouchableOpacity>
      </CardView>
    );
  };
  console.log(props.selectedCategory);
  return (
    <View style={style.container}>
      <HeaderView
        navigation={props.navigation}
        title={props.selectedCategory.image_title}
      />
      <Text style={[style.categoriesText, {marginLeft: 16}]}>
        {'Sub Categories'}
      </Text>
      <FlatList
        data={props.selectedCategory.subCategories}
        keyExtractor={item => item.text}
        renderItem={item => {
          return homeFlatlistRenderItem(item.item);
        }}
      />
    </View>
  );
};

export default withTheme(CLPView, 'CLPView');
