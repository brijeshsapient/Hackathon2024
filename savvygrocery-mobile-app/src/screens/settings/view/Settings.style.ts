import {Theme} from '../../../core/types';
import {StyleSheet} from '../../../uilib/atoms/elements';
import {SemiBold14OpenSans, Bold14OpenSans} from '../../../uilib/typography';

const styles = (theme: Theme) =>
  StyleSheet.create({
    container: {
      backgroundColor: theme.colors.transparent,
      flex: 1,
    },
    flatListCard: {height: 52, marginHorizontal: 16, marginVertical: 8},
    flatListText: {...SemiBold14OpenSans},
    logoutButton: {
      backgroundColor: theme.colors.freeSpeechRed,
      height: 48,
      borderRadius: 10,
      marginTop: 20,
      marginHorizontal: 16,
      alignItems: 'center',
      justifyContent: 'center',
    },
    logoutButtonText: {
      ...Bold14OpenSans,
      color: theme.colors.white,
    },
  });

export default styles;
