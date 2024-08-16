import React from 'react';
import Svg, { Path } from 'react-native-svg';

const MouseSvg = () => (
  <Svg width={50} height={50} viewBox="0 0 64 64" fill="none">
    <Path
      d="M32 2C15.43 2 2 15.43 2 32s13.43 30 30 30 30-13.43 30-30S48.57 2 32 2zm0 58C17.64 60 6 48.36 6 32S17.64 4 32 4s26 11.64 26 26-11.64 26-26 26z"
      fill="#000"
    />
    <Path
      d="M32 6c-5.33 0-10 4.67-10 10v18c0 5.33 4.67 10 10 10s10-4.67 10-10V16c0-5.33-4.67-10-10-10zm0 34c-3.31 0-6-2.69-6-6V16c0-3.31 2.69-6 6-6s6 2.69 6 6v18c0 3.31-2.69 6-6 6z"
      fill="#000"
    />
  </Svg>
);

export default MouseSvg;
