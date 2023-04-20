import React, { useState } from 'react';
import {Input, PasswordInput, AuthButton, Checkbox, Select, FileAttachment } from '../'
import { ManIcon } from '../../icons';

import './RegistrationForm.scss';

const selectorOptions = ['Chicken Breeding', 'Female Voice Actor', 'Parrot-Costume Promoter'];
const EMPTY_FIELD = 'Can not be empty';

type Props = {
  onSubmit: () => void;
};

export const RegistrationForm = ({ onSubmit }: Props) => {
  const [termsAccepted, setTermsAccepted] = useState<boolean>(false);
  const [passwordValidation, setPasswordValidation] = useState({ error: '', touched: false });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setPasswordValidation((prev) => {
      const newFields = { ...prev };
      newFields.touched = true;
      if (e.target.value === '') {
        newFields.error = EMPTY_FIELD;
      } else {
        newFields.error = '';
      }
      return newFields;
    });
  };

  const handleBlur = (e: React.FocusEvent<HTMLInputElement, Element>) => {
    setPasswordValidation((prev) => {
      const newFields = { ...prev };
      newFields.touched = true;
      if (e.target.value === '') {
        newFields.error = EMPTY_FIELD;
      } else {
        newFields.error = '';
      }
      return newFields;
    });
  };

  return (
    <form
      className="partner__form"
      onSubmit={(e) => {
        e.preventDefault();
      }}
    >
      <Input label="Email" placeholder="..." />
      <PasswordInput
        onChange={handleChange}
        onBlur={handleBlur}
        label="Password"
        placeholder="..."
        error={!!passwordValidation.error && passwordValidation.touched}
        errorMessage={passwordValidation.error}
      />
      <Select label="Your Business" options={selectorOptions} placeholder="Select one or more" />
      <Input label="You Telegram Account" placeholder="..." />
      <FileAttachment />
      <div className="terms-container">
        <Checkbox
          checked={termsAccepted}
          label="I have read and agree to the Terms & Coditions"
          onChange={() => setTermsAccepted((prev) => !prev)}
        />
        <AuthButton onClick={onSubmit} color="gold">
          <ManIcon />
          Sign Up
        </AuthButton>
      </div>
    </form>
  );
};

export default RegistrationForm;
