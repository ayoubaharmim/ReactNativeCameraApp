import * as React from 'react';
import Svg, {Path} from 'react-native-svg';

export const Tick = () => (
  <Svg viewBox="0 0 24 24">
    <Path
      fill="none"
      stroke="#0F0"
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={2}
      d="M3.7 14.3 9.6 19 20.3 5"
    />
  </Svg>
);
