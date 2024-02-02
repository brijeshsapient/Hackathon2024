import * as React from 'react';
import Svg, {Path} from 'react-native-svg';

function HomeTabSVG(props: {color?: string}) {
  return (
    <Svg width={26} height={22} viewBox="0 0 26 22" fill="none" {...props}>
      <Path
        d="M4.175 7.904v10.278a3.1 3.1 0 003.1 3.1H18.72a3.1 3.1 0 003.1-3.1V7.904"
        stroke={props?.color ?? '#6A6A6A'}
        strokeWidth={1.4}
      />
      <Path
        d="M.346 9.857a.7.7 0 10.85 1.113l-.85-1.113zm.85 1.113l12.706-9.7-.85-1.113-12.706 9.7.85 1.113z"
        fill={props?.color ?? '#6A6A6A'}
      />
      <Path
        d="M24.803 10.97a.7.7 0 00.85-1.113l-.85 1.113zm.85-1.113L12.947.157l-.85 1.113 12.706 9.7.85-1.113z"
        fill={props?.color ?? '#6A6A6A'}
      />
    </Svg>
  );
}

export default HomeTabSVG;
