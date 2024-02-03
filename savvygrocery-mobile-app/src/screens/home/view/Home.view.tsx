import React from 'react';
import {
  FlatList,
  Text,
  TouchableOpacity,
  View,
  withTheme,
} from '../../../uilib/atoms/elements';
import styles from './Home.style';
import CardView from '../../../uilib/atoms/card/Card.view';
import {navigateTo} from '../../../utils/RootNavigation.utils';
import {BottomTabs, Screens} from '../../../core/constants/Screens.constant';
import SearchTabSVG from '../../../resources/assets/svg/SearchTabSVG';
import {Image} from 'react-native-elements';
import {ActivityIndicator} from 'react-native';

const HomeView = props => {
  const style = styles(props.theme);
  const homeFlatlistRenderItem = item => {
    return (
      <CardView style={style.flatListCard}>
        <TouchableOpacity
          onPress={() => {
            navigateTo(props.navigation, Screens.clp);
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
              {item.image_title}
            </Text>
          </View>
        </TouchableOpacity>
      </CardView>
    );
  };

  const onCartButtonPress = () => {
    props.navigation.navigate({
      name: Screens.bottomTabs,
      params: {screen: BottomTabs.search},
      merge: true,
    });
  };

  const getRightComponent = () => {
    return (
      <TouchableOpacity
        style={style.headerRightButton}
        onPress={onCartButtonPress}>
        <SearchTabSVG
          color={props.theme.colors.lapisBlue}
          widthProp={22}
          heightProp={22}
        />
      </TouchableOpacity>
    );
  };

  const onChangeStoreButtonPress = () => {
    props.navigation.navigate({
      name: Screens.changeStore,
      params: {},
      merge: true,
    });
  };

  const getLeftComponent = () => {
    return (
      <TouchableOpacity
        // style={style.headerRightButton}
        onPress={onChangeStoreButtonPress}>
        <Text style={style.storeText}>
          {props.selectedStore?.properties?.neighborhood}
        </Text>
        <Text style={style.flatListDiscountedPriceLabelText}>
          {'Tap to Change'}
        </Text>
      </TouchableOpacity>
    );
  };

  return (
    <View style={style.container}>
      <View
        style={{
          flexDirection: 'row',
          justifyContent: 'space-between',
          marginHorizontal: 16,
          marginVertical: 8,
          height: 40,
          alignItems: 'center',
        }}>
        {getLeftComponent()}
        {getRightComponent()}
      </View>
      <Text style={[style.categoriesText, {marginLeft: 16}]}>
        {'Categories'}
      </Text>
      <FlatList
        data={props.categoryList}
        keyExtractor={item => item.id}
        renderItem={item => {
          return homeFlatlistRenderItem(item.item);
        }}
      />
    </View>
  );
};

export default withTheme(HomeView, 'HomeView');
