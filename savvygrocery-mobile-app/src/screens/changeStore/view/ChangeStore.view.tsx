import React from 'react';
import {
  FlatList,
  Text,
  TouchableOpacity,
  View,
  withTheme,
} from '../../../uilib/atoms/elements';
import styles from './ChangeStore.style';
import HeaderView from '../../../uilib/organisms/Header/view/Header.view';
import CardView from '../../../uilib/atoms/card/Card.view';
import {navigateToBack} from '../../../utils/RootNavigation.utils';

const ChangeStoreView = props => {
  const style = styles(props.theme);

  const homeFlatlistRenderItem = item => {
    return (
      <CardView style={style.flatListCard}>
        <TouchableOpacity
          onPress={() => {
            props.setSelectedStore(item);
            navigateToBack(props.navigation);
          }}>
          <Text
            style={style.flatListText}
            numberOfLines={2}
            ellipsizeMode="tail">
            {item.properties.neighborhood}
          </Text>
          <View style={style.flatListTestCountContainer}>
            <Text
              style={
                style.flatListTestCountText
              }>{`Distance: ${item.properties.distance} Miles`}</Text>
          </View>
        </TouchableOpacity>
      </CardView>
    );
  };

  return (
    <View style={style.container}>
      <HeaderView navigation={props.navigation} title="Change Store" />
      <FlatList
        data={props.storeList}
        keyExtractor={item => item.storeId}
        renderItem={item => {
          return homeFlatlistRenderItem(item.item);
        }}
      />
    </View>
  );
};

export default withTheme(ChangeStoreView, 'ChangeStoreView');
