import React, { TextareaHTMLAttributes } from 'react';

type Props = TextareaHTMLAttributes<HTMLTextAreaElement> & {
  error?: boolean;
  errorMessage?: string;
  label?: string;
};

export const TextArea = (props: Props) => {
  const { error, errorMessage, label, ...rest } = props;

  return (
    <div className="input textarea">
      {error && <div className="input__error-container"></div>}
      {label && <span className="input__label">{label}</span>}
      <textarea {...rest} />
    </div>
  );
};

export default TextArea;
