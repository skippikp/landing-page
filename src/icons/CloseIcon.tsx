import React from 'react';

type Props = {
  width?: number | string;
  height?: string | number;
};

const CloseIcon = ({ width = 16, height = 16 }: Props) => {
  return (
    <svg width={width} height={height} viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
      <path
        d="M15.707 14.293C16.0977 14.6836 16.0977 15.3164 15.707 15.707C15.5117 15.9023 15.2559 16 15 16C14.7441 16 14.4883 15.9023 14.293 15.707L8 9.41406L1.70703 15.707C1.51172 15.9023 1.25586 16 1 16C0.744141 16 0.488281 15.9023 0.292969 15.707C-0.0976562 15.3164 -0.0976562 14.6836 0.292969 14.293L6.58594 8L0.292969 1.70703C-0.0976561 1.31641 -0.0976561 0.683594 0.292969 0.292969C0.683594 -0.0976561 1.31641 -0.0976561 1.70703 0.292969L8 6.58594L14.293 0.292969C14.6836 -0.0976562 15.3164 -0.0976562 15.707 0.292969C16.0977 0.683594 16.0977 1.31641 15.707 1.70703L9.41406 8L15.707 14.293Z"
        fill="#FCB223"
      />
    </svg>
  );
};

export default CloseIcon;