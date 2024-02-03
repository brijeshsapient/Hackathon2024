import * as React from 'react';
import Svg, {Path} from 'react-native-svg';

function SearchTabSVG(props: {
  widthProp?: number;
  heightProp?: number;
  color?: string;
}) {
  const {color, widthProp, heightProp} = props;
  return (
    <Svg
      width={widthProp ?? 24}
      height={heightProp ?? 24}
      viewBox="0 0 24 24"
      fill="none"
      {...props}>
      <Path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M9.315 16.575a7.26 7.26 0 100-14.52 7.26 7.26 0 000 14.52zm9.316-7.26c0 2.097-.692 4.03-1.86 5.587l6.91 6.912c.267.266.32.586.319.786a1.223 1.223 0 01-.095.455 1.58 1.58 0 01-.345.506c-.128.128-.3.259-.505.344-.1.041-.26.093-.455.095-.2.002-.52-.052-.786-.318l-6.912-6.912a9.274 9.274 0 01-5.587 1.86 9.315 9.315 0 110-18.63 9.315 9.315 0 019.316 9.315z"
        fill={color ?? '#6A6A6A'}
      />
    </Svg>
  );
}

export default SearchTabSVG;
