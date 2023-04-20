import React, { SVGProps } from 'react';

type Props = SVGProps<SVGElement>;

export const FaqIcon = ({ width = 8, height = 10 } : Props) => {
  return (
    <svg width={width} height={height} viewBox="0 0 8 10" fill="none" xmlns="http://www.w3.org/2000/svg">
      <rect x="4" width="4" height="2" rx="1" fill="white" fillOpacity="0.2" />
      <rect x="2" y="4" width="6" height="2" rx="1" fill="white" fillOpacity="0.2" />
      <rect y="8" width="8" height="2" rx="1" fill="white" fillOpacity="0.2" />
    </svg>
  );
};

export default FaqIcon;
