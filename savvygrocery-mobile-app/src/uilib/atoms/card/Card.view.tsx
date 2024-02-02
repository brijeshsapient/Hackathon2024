import React from 'react';
import {View, withTheme} from '../elements';
import styles from './Card.style';
import {Theme} from '../../../core/types';

type CardProps = {
  theme?: Theme;
  style: any;
  children: JSX.Element | JSX.Element[];
};

const Card = (props: CardProps) => {
  const {theme, style, children} = props;
  const {card} = styles(theme);
  return <View style={{...card, ...style}}>{children}</View>;
};

export default withTheme(Card, 'Card');
