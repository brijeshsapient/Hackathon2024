import {Theme} from '../../../core/types';
import {StyleSheet} from '../../../uilib/atoms/elements';
import {
  SemiBold14OpenSans,
  SemiBold12OpenSans,
  Bold14OpenSans,
} from '../../../uilib/typography';

const styles = (theme: Theme) =>
  StyleSheet.create({
    container: {
      backgroundColor: theme.colors.transparent,
      flex: 1,
    },
    flatListCard: {
      marginHorizontal: 16,
      marginVertical: 8,
      justifyContent: 'center',
    },
    flatListText: {...SemiBold14OpenSans},
    flatListTestCountText: {...SemiBold14OpenSans, color: theme.colors.black},
    subview: {flex: 1, justifyContent: 'space-between'},
    addToCartButton: {
      height: 48,
      borderRadius: 10,
      marginHorizontal: 16,
      marginBottom: 16,
      alignItems: 'center',
      justifyContent: 'center',
      backgroundColor: theme.colors.lapisBlue,
      opacity: 1,
    },
    disabledOpacity: {
      opacity: 0.4,
    },
    addToCartButtonText: {
      ...Bold14OpenSans,
      color: theme.colors.white,
    },
  });

export default styles;
