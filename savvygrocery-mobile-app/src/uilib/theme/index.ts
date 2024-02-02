import {Dimensions, StyleProp, ViewStyle} from 'react-native';
import {Bold14OpenSans, Regular12OpenSans} from '../typography';
import {lightColors, darkColors} from '../../core/constants/Color.constant';
export const deviceWidth = Dimensions.get('window').width;
export const deviceHeight = Dimensions.get('window').height;
export const webViewStyle: StyleProp<ViewStyle> = {
  opacity: 0.99,
  overflow: 'hidden',
  minHeight: 1,
}; // Opacity and overflow are used to fix android issues - Do not remove these
export const lightTheme = {
  colors: {
    ...lightColors,
  },
  Button: {
    // button container style
    containerStyle: {
      marginVertical: 4,
    },
    // button style
    //applicable for outline and solid button
    buttonStyle: {
      paddingVertical: 16,
      borderRadius: 10,
    },
    // button title style
    //applicable for outline and solid button
    titleStyle: {
      ...Bold14OpenSans,
    },

    loadingProps: {
      size: 'small',
      color: 'white',
    },
    //button loader style
    loadingStyle: {},
    // disabled button style
    disabledStyle: {},
    // disabled button title style
    disabledTitleStyle: {
      ...Bold14OpenSans,
      color: lightColors.white,
    },
  },
  Header: {
    backgroundColor: lightColors.white,
    statusBarProps: {barStyle: 'default'},
    containerStyle: {},
    leftContainerStyle: {},
    rightContainerStyle: {},
    // rightComponent:{
    //     icon:'supervised-user-circle'
    // },
    centerContainerStyle: {},
    barStyle: {},
  },

  CheckBox: {
    containerStyle: {
      backgroundColor: lightColors.white,
      borderWidth: 0,
    },
    textStyle: {
      ...Regular12OpenSans,
      color: lightColors.black,
    },
    checkedColor: lightColors.lapisBlue,
    iconType: 'ionicon',
    checkedIcon: 'ios-checkbox',
    uncheckedIcon: 'square-outline',
  },

  ListItem: {
    containerStyle: {
      backgroundColor: lightColors.white,
      height: 46,
      padding: 0,
      paddingHorizontal: 16,
    },
  },
  Input: {
    //Not able to define height of the placeholder
    autoCapitalize: 'none',
    containerStyle: {paddingHorizontal: 0},
    //input container style
    inputContainerStyle: {
      paddingVertical: 8,
      borderWidth: 1,
      borderRadius: 8,
    },

    // input error style
    errorStyle: {
      borderColor: lightColors.freeSpeechRed,
      ...Regular12OpenSans,
      margin: 0,
      marginHorizontal: 18,
      marginTop: 5,
      marginBottom: 8,
    },
    //input label style
    labelStyle: {
      ...Regular12OpenSans,
      top: -10,
      position: 'absolute',
      left: 8,
      paddingHorizontal: 5,
      alignSelf: 'flex-start',
      backgroundColor: lightColors.white,
      zIndex: 10,
      color: lightColors.dimGray,
    },
    // input left icon container style
    leftIconContainerStyle: {},
    // input right icon container style
    rightIconContainerStyle: {},
    // disabled input style
    disabledInputStyle: {},
    placeholderTextColor: lightColors.dimGray,
  },

  Avatar: {
    rounded: false,
    size: {},
    avatarStyle: {},
    containerStyle: {},
    iconStyle: {},
    placeholderStyle: {},
    titleStyle: {},
  },

  Badge: {
    badgeStyle: {
      height: 25,
      backgroundColor: lightColors.lapisBlue,
    },
    containerStyle: {},
    textStyle: {
      ...Regular12OpenSans,
      height: 17,
      marginHorizontal: 4,
    },
  },
};

export const darkTheme = {
  colors: {
    ...darkColors,
  },
};
