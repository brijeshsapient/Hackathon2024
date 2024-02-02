import {Theme} from '../../../core/types';
import {StyleSheet} from '../../../uilib/atoms/elements';
import {
  SemiBold14OpenSans,
  SemiBold12OpenSans,
  Bold17OpenSans,
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
    congratsText: {
      ...Bold17OpenSans,
      alignContent: 'center',
      marginBottom: 20,
      textAlign: 'center',
    },
    flatListTestCountText: {...SemiBold14OpenSans, color: theme.colors.white},
    flatListPriceText: {
      ...SemiBold12OpenSans,
      color: theme.colors.black,
      marginRight: 5,
      textDecorationLine: 'line-through',
      textDecorationStyle: 'solid',
    },
    flatListDiscountedPriceLabelText: {
      ...SemiBold12OpenSans,
      color: theme.colors.black,
    },
    flatListDiscountedPriceText: {
      ...SemiBold14OpenSans,
      color: theme.colors.freeSpeechRed,
    },
    flatListPriceContainer: {
      flexDirection: 'row',
      marginTop: 10,
      alignItems: 'center',
    },
    flatListTestCountContainer: {
      backgroundColor: 'grey',
      height: 25,
      borderRadius: 12.5,
      width: 180,
      alignItems: 'center',
      justifyContent: 'center',
      marginTop: 10,
    },
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
