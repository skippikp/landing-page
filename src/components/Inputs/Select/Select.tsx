import React, { useEffect, useRef, useState } from 'react';
import Checkbox from '../Checkbox/Checkbox';
import { MenuIcon } from '../../../icons';
import './Select.scss';

type Props = {
  label: string;
  options: string[];
  placeholder?: string;
};

export const Select = ({ label, options, placeholder }: Props) => {
  const [showOptions, setShowOptions] = useState<boolean>(false);
  const [selectedOptions, setSelectedOptions] = useState<string[]>([]);
  const selectRef = useRef<HTMLDivElement | null>(null);

  const handleShowOptions = () => {
    setShowOptions((prev) => !prev);
  };

  const handleSelect = (option: string) => {
    if (selectedOptions.includes(option)) {
      setSelectedOptions((prev) => prev.filter((opt) => opt !== option));
    } else {
      setSelectedOptions((prev) => [...prev, option]);
    }
  };

  useEffect(() => {
    const handler = (e: MouseEvent) => {
      if (selectRef.current && !selectRef.current.contains(e.target as Node)) {
        setShowOptions(false);
      }
    };
    document.addEventListener('mousedown', handler);
    return () => document.removeEventListener('mousedown', handler);
  });

  return (
    <div className="select-container">
      {label && <div className="select__label">{label}</div>}
      <div ref={selectRef} className="select" onClick={handleShowOptions}>
        <input disabled value={selectedOptions.join(', ')} placeholder={placeholder} />
        <div className="select__icon">
          <MenuIcon fill={showOptions ? 'white' : '#FCB223'} />
        </div>
        {showOptions && (
          <div onClick={(e) => e.stopPropagation()} className="select__options">
            {options.map((option, idx) => (
              <Checkbox
                key={idx}
                label={option}
                onChange={() => handleSelect(option)}
                checked={selectedOptions.includes(option)}
              />
            ))}
          </div>
        )}
      </div>
    </div>
  );
};

export default Select;
