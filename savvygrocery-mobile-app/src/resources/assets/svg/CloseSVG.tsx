import * as React from 'react';
import Svg, {Path} from 'react-native-svg';

function CloseSVG(props: {color: string}) {
  return (
    <Svg width={16} height={16} viewBox="0 0 16 16" fill="none" {...props}>
      <Path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M3.296 3.293a1 1 0 011.413 0l3.928 3.925A.998.998 0 117.224 8.63L3.297 4.705a.998.998 0 010-1.412z"
        fill={props.color ?? '#06C'}
      />
      <Path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M3.293 12.707a.998.998 0 010-1.412l4.006-4.004a1 1 0 011.413 1.412l-4.007 4.005a1 1 0 01-1.412 0z"
        fill={props.color ?? '#06C'}
      />
      <Path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M12.704 12.707a1 1 0 01-1.413 0L7.363 8.783A.998.998 0 118.776 7.37l3.927 3.925a.998.998 0 010 1.412z"
        fill={props.color ?? '#06C'}
      />
      <Path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M12.707 3.292a.998.998 0 010 1.413L8.701 8.709a1 1 0 01-1.413-1.412l4.007-4.005a1 1 0 011.412 0z"
        fill={props.color ?? '#06C'}
      />
    </Svg>
  );
}

export default CloseSVG;
