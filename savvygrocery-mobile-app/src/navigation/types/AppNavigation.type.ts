import {Theme} from '../../core/types';

export type AppNavigationContainerProps = {
  getAppConfigs: () => void;
  isLoading: boolean;
};

export type BottomTabIconProps = {
  focused: boolean;
};

export type BottomTabProps = {
  theme?: Theme;
};

export type BottomTabBarVisibilityArgs = {
  state: {
    index: number;
    routes: {name: string}[];
  };
};
