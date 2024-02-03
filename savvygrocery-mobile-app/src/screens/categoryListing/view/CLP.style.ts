import {Theme} from '../../../core/types';
import {StyleSheet} from '../../../uilib/atoms/elements';
import {
  SemiBold14OpenSans,
  SemiBold12OpenSans,
  Bold22OpenSans,
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
    headerRightButton: {
      marginRight: 16,
      height: 30,
      width: 30,
      justifyContent: 'center',
    },
    flatListText: {...SemiBold14OpenSans},
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
    storeText: {
      ...SemiBold14OpenSans,
      color: theme.colors.lapisBlue,
    },
    categoriesText: {
      ...Bold22OpenSans,
      color: theme.colors.lapisBlue,
    },
    flatListDiscountedPriceText: {
      ...SemiBold14OpenSans,
      color: theme.colors.freeSpeechRed,
    },
    flatListPriceContainer: {
      flexDirection: 'row',
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
  });

export default styles;
