import clsx from 'clsx';
import React, { FC, PropsWithChildren } from 'react'

type Props = {
  active: boolean;
  onClick: () => void;
}

export const NavButton: FC<PropsWithChildren<Props>> = ({ active, onClick, children }) => {
  return (
    <button onClick={onClick} className={clsx('btn', active ? 'btn_dark' : 'btn_inactive')}>
      <div className='btn-content'>
        {children}
      </div>
    </button>
  )
}

export default NavButton;