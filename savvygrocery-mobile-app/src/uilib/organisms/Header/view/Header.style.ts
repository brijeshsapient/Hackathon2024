import {Theme} from '../../../../core/types';
import {StyleSheet} from '../../../atoms/elements';
import {Bold16OpenSans} from '../../../typography';

const styles = (theme: Theme) =>
  StyleSheet.create({
    container: {
      marginTop: 0,
      backgroundColor: theme.colors.lapisBlue,
      flexDirection: 'row',
      justifyContent: 'space-between',
      alignContent: 'center',
      alignItems: 'center',
      height: 50,
    },
    headerLeftButton: {
      marginLeft: 16,
      height: 30,
      width: 30,
      justifyContent: 'center',
    },
    headerRightButton: {
      marginRight: 16,
      height: 30,
      width: 30,
      justifyContent: 'center',
    },
    headerRightCloseIcon: {
      marginRight: 16,
      height: 30,
      width: 30,
      justifyContent: 'center',
      alignItems: 'flex-end',
    },
    title: {
      ...Bold16OpenSans,
      color: theme.colors.white,
    },
  });

export default styles;
