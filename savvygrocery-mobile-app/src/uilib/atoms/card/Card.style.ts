import {Theme} from '../../../core/types';
import {StyleSheet} from '../elements';

/**
 * Style for Card View
 */
export const styles = (theme: Theme) =>
  StyleSheet.create({
    card: {
      shadowColor: theme?.colors.lapisBlue,
      shadowOpacity: 0.2,
      shadowRadius: 8,
      shadowOffset: {width: 0, height: 2},
      elevation: 7,
      borderRadius: 10,
      backgroundColor: theme?.colors.white,
      padding: 16,
    },
  });

export default styles;
