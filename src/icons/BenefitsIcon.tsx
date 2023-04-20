import React, { SVGProps } from 'react';

type Props = SVGProps<SVGElement>;

export const BenefitsIcon = ({ fill = 'white', height = 10, width = 8 } : Props) => {
  return (
    <svg width={width} height={height} viewBox="0 0 8 10" fill="none" xmlns="http://www.w3.org/2000/svg">
      <rect width="4" height="2" rx="1" fill="white" fillOpacity="0.2" />
      <rect y="4" width="8" height="2" rx="1" fill={fill} fillOpacity="0.7" />
      <rect y="8" width="4" height="2" rx="1" fill="white" fillOpacity="0.2" />
    </svg>
  );
};

export default BenefitsIcon;
