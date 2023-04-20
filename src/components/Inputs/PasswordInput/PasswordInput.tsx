import React, { useState, InputHTMLAttributes } from 'react';
import Input from '../Input/Input';
import { EyeIcon } from '../../../icons';

import './PasswordInput.scss';

type Props = InputHTMLAttributes<HTMLInputElement> & {
  error?: boolean;
  errorMessage?: string;
  label?: string;
};

export const PasswordInput = (props: Props) => {
  const [showPass, setShowPass] = useState<boolean>(false);

  return (
    <div className="password__input-container">
      <Input {...props} type={showPass ? 'text' : 'password'} />
      <div className="input__icon" onClick={() => setShowPass((prev) => !prev)}>
        <EyeIcon fill={showPass ? 'white' : '#FCB223'} />
      </div>
    </div>
  );
};

export default PasswordInput;
