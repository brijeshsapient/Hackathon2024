import {Theme} from '../../../core/types';
import {StyleSheet} from '../../../uilib/atoms/elements';
import {Bold14OpenSans} from '../../../uilib/typography';

const styles = (theme: Theme) =>
  StyleSheet.create({
    scrollview: {
      flex: 1,
      backgroundColor: theme.colors.white,
    },
    container: {
      flex: 1,
      justifyContent: 'center',
      marginHorizontal: 16,
    },
    inputContainer: {
      height: 48,
    },
    input: {
      ...Bold14OpenSans,
      color: theme.colors.dimGray,
    },
    buttonContainer: {
      flexDirection: 'row',
      justifyContent: 'space-between',
    },
    buttonSignup: {
      height: 40,
      backgroundColor: theme.colors.freeSpeechRed,
      borderRadius: 20,
      alignItems: 'center',
      justifyContent: 'center',
      flex: 1,
      marginRight: 4,
    },
    buttonLogin: {
      height: 40,
      backgroundColor: theme.colors.lapisBlue,
      borderRadius: 20,
      alignItems: 'center',
      justifyContent: 'center',
      flex: 1,
      marginLeft: 4,
    },
    buttonText: {
      ...Bold14OpenSans,
      color: theme.colors.white,
    },
    inputLeftStyle: {
      marginLeft: 8,
    },
  });

export default styles;
