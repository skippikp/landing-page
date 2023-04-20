import React from 'react';
import './Checkbox.scss';

type Props = {
  label: string;
  onChange: () => void;
  checked?: boolean;
};

export const Checkbox = ({ label, onChange, checked }: Props) => {
  return (
    <div className='checkbox'>
      <label>
        <input checked={checked} onChange={onChange} type="checkbox" />
        {label}
      </label>
    </div>
  );
};

export default Checkbox;
