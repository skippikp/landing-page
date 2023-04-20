import React, { FC, PropsWithChildren } from 'react';
import './Card.scss';

type Props = {
  color?: 'dark' | 'light';
};

export const Card: FC<PropsWithChildren<Props>> = ({ color = 'light', children }) => {
  return (
    <div className={`card card_${color}`}>
      <div className="reflection">
        <div className="reflection_2">
          <div className="reflection_3"></div>
        </div>
      </div>
      {children}
    </div>
  );
};

export default Card;
