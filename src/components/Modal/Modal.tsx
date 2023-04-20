import React, { PropsWithChildren, FC } from 'react';
import CloseIcon from '../../icons/CloseIcon';
import './Modal.scss';

type Props = {
  onClose: () => void;
};

export const Modal: FC<PropsWithChildren<Props>> = ({ onClose, children }) => {
  return (
    <div className="modal" onClick={onClose}>
      <div className="modal__content" onClick={(e) => e.stopPropagation()}>
        <div className="close-icon" onClick={onClose}>
          <CloseIcon />
        </div>
        {children}
      </div>
    </div>
  );
};

export default Modal;
