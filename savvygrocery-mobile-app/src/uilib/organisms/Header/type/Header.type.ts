import {Theme} from '../../../../core/types';

export type HeaderProps = {
  theme?: Theme;
  navigation: Record<string, any>;
  title?: string;
  color?: {background: string | undefined; title: string | undefined};
  leftComponent?: JSX.Element;
  rightComponent?: JSX.Element;
  isCartButtonVisible?: boolean;
  isBackButtonHidden?: boolean;
  isTitleHidden?: boolean;
  isCloseIcon?: boolean;
  onBackPress?: () => void;
  onCartPress?: () => void;
};
