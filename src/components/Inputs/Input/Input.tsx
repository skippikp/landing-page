import React, { InputHTMLAttributes } from 'react';
import clsx from 'clsx';
import './Input.scss';


type Props = InputHTMLAttributes<HTMLInputElement> & {
  error?: boolean;
  errorMessage?: string;
  label?: string;
};

export const Input = (props: Props) => {
  const { error, errorMessage, label, ...rest } = props;

  return (
    <div className="input">
      {error && <div className="input__error-container">{errorMessage}</div>}
      {label && <span className="input__label">{label}</span>}
      <input {...rest} className={clsx(error && 'input__error')} />
    </div>
  );
};

export default Input;
