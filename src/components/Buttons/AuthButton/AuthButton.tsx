import React, { FC, PropsWithChildren } from 'react';
import clsx from 'clsx';
import './AuthButton.scss';

type Props = {
  onClick: () => void;
  color?: 'gold' | 'dark';
};

export const AuthButton: FC<PropsWithChildren<Props>> = ({ onClick, color = 'dark', children }) => {
  return (
    <button onClick={onClick} className={clsx('btn', color && `btn_${color}`, 'auth-btn')}>
      <div className='btn-content auth-btn__content'>
        {children}
      </div>
    </button>
  );
};

export default AuthButton;
