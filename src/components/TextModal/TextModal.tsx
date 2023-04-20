import React, {FC, PropsWithChildren} from 'react';
import Modal from '../Modal/Modal';
import './TextModal.scss';

type Props = {
  onClose: () => void;
};

export const TextModal: FC<PropsWithChildren<Props>> = ({ onClose, children }) => {
  return (
    <Modal onClose={onClose}>
      <div className="text__content">
        {children}
      </div>
    </Modal>
  );
};

export default TextModal;
