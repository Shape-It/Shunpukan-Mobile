import * as React from 'react';
import Svg, { SvgProps, Path, G, Circle, Defs } from 'react-native-svg';

export const LogoIcon = (props: SvgProps) => (
  <Svg xmlns="http://www.w3.org/2000/svg" width={60} height={60} fill="none" {...props}>
    <Path fill="#F5F5F5" d="M29.58 0a29.58 29.58 0 0 0 0 59.16V0Z" />
    <G filter="url(#a)">
      <Circle cx={29.415} cy={29.415} r={17.156} fill="#fff" />
    </G>
    <Defs></Defs>
  </Svg>
);
