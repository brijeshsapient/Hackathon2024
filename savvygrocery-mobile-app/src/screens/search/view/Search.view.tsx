import React, {useState} from 'react';
import {
  Text,
  TouchableOpacity,
  View,
  withTheme,
} from '../../../uilib/atoms/elements';
import {Dimensions} from 'react-native';
import {SearchBar} from 'react-native-elements';
import SearchTabSVG from '../../../resources/assets/svg/SearchTabSVG';
import CloseSVG from '../../../resources/assets/svg/CloseSVG';
import VoiceRecorderSVG from '../../../resources/assets/svg/VoiceSVG';

const SearchView = props => {
  const [searchText, setSearchText] = useState('');

  const updateSearch = (newEmaild: string) => {
    setSearchText(newEmaild);
  };

  const onClearText = () => {
    setSearchText('');
  };

  const onVoiceOver = () => {};

  const onCancel = () => {
    setSearchText('');
  };
  return (
    <View style={{flex: 1, backgroundColor: 'white'}}>
      <View
        style={{
          flexDirection: 'row',
          justifyContent: 'flex-end',
          alignItems: 'center',
          backgroundColor: props.theme.colors.lapisBlue,
        }}>
        <SearchBar
          containerStyle={{
            height: 64,
            backgroundColor: props.theme.colors.lapisBlue,
            borderWidth: 0,
            width: Dimensions.get('screen').width - 30,
          }}
          inputContainerStyle={{
            height: 48,
            backgroundColor: props.theme.colors.lapisBlue,
            borderBottomWidth: 1,
          }}
          searchIcon={
            <SearchTabSVG
              color={props.theme.colors.white}
              widthProp={16}
              heightProp={16}
            />
          }
          inputStyle={{height: 40}}
          onChangeText={text => {
            updateSearch(text);
          }}
          onClearText={() => console.log(onClearText())}
          placeholder="Search Product"
          placeholderTextColor="#888"
          clearIcon={
            <TouchableOpacity onPress={onCancel}>
              <CloseSVG color={props.theme.colors.white} />
            </TouchableOpacity>
          }
          onCancel={() => console.log(onCancel())}
          value={searchText}
        />
        <View style={{width: 30}}>
          <TouchableOpacity onPress={onVoiceOver}>
            <VoiceRecorderSVG />
          </TouchableOpacity>
        </View>
      </View>
      <Text>{searchText}</Text>
    </View>
  );
};

export default withTheme(SearchView, 'AddAddressView');
