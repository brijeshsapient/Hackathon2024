import * as React from 'react';
import Svg, {Path} from 'react-native-svg';

function ChevronLeftSVG() {
  return (
    <Svg width={8} height={13} viewBox="0 0 8 13" fill="none">
      <Path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M7.63 12.281a1.287 1.287 0 01-1.765 0L.96 7.586a1.16 1.16 0 010-1.69 1.287 1.287 0 011.765 0l4.905 4.697a1.16 1.16 0 010 1.69z"
        fill="#fff"
      />
      <Path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M7.635 1.016a1.16 1.16 0 010 1.69L2.63 7.498a1.287 1.287 0 01-1.765-.001 1.16 1.16 0 010-1.69L5.87 1.016a1.287 1.287 0 011.765 0z"
        fill="#fff"
      />
    </Svg>
  );
}

export default ChevronLeftSVG;
