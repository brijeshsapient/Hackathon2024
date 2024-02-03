import React from 'react';
import {
  View,
  withTheme,
  FlatList,
  TouchableOpacity,
} from '../../../uilib/atoms/elements';
import styles from './Settings.style';
import HeaderView from '../../../uilib/organisms/Header/view/Header.view';
import {Text} from 'react-native-elements';
import CardView from '../../../uilib/atoms/card/Card.view';
import {navigateTo} from '../../../utils/RootNavigation.utils';
import { Screens} from '../../../core/constants/Screens.constant';

const SettingsView = props => {
  const style = styles(props.theme);

  const settingsList = [];
  settingsList.push({title: 'Profile', id: 1});
  settingsList.push({title: 'Members', id: 2});
  settingsList.push({title: 'Orders', id: 3});
  settingsList.push({title: 'Addresses', id: 4});

  return (
    <View style={style.container}>
      <HeaderView
        navigation={props.navigation}
        title="Settings"
        isBackButtonHidden={true}
      />
      <FlatList
        data={settingsList}
        keyExtractor={item => item.id.toString()}
        renderItem={item => {
          return (
            <TouchableOpacity
              onPress={() => {
                if (item.item.id === 4) {
                  navigateTo(props.navigation, Screens.addressList);
                }
                if (item.item.id === 3) {
                  navigateTo(props.navigation, Screens.orders);
                }
              }}>
              <CardView style={style.flatListCard}>
                <Text style={style.flatListText}>{item.item.title}</Text>
              </CardView>
            </TouchableOpacity>
          );
        }}
        ListFooterComponent={() => {
          return (
            <TouchableOpacity
              style={style.logoutButton}
              onPress={() => {
                navigateTo(props.navigation, Screens.login);
              }}>
              <Text style={style.logoutButtonText}>Logout</Text>
            </TouchableOpacity>
          );
        }}
      />
    </View>
  );
};

export default withTheme(SettingsView, 'SettingsView');
