import { Theme } from '../../../core/types';
import { StyleSheet } from '../elements';
import {
  SemiBold14OpenSans,
  SemiBold12OpenSans,
} from '../../typography';

/**
 * Style for Card View
 */
export const styles = (theme: Theme) =>
  StyleSheet.create({
    mainContainer:{ flexDirection: 'row', alignItems: 'center' },
    imageStyle:{ height: 50, width: 50 },
    flatListPriceContainer: {
      flexDirection: 'row',
      marginTop: 10,
      alignItems: 'center',
    },

    flatListDiscountedPriceLabelText: {
      ...SemiBold12OpenSans,
      color: theme.colors.black,
    },
    flatListPriceText: {
      ...SemiBold12OpenSans,
      color: theme.colors.black,
      marginRight: 5,
      textDecorationLine: 'line-through',
      textDecorationStyle: 'solid',
    },
    flatListDiscountedPriceText: {
      ...SemiBold14OpenSans,
      color: theme.colors.freeSpeechRed,
    },
  });

export default styles;
