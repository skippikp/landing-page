import React, { useState } from 'react';
import logo from '../../assets/logo.png';
import {
  HomeIcon,
  BenefitsIcon,
  ContactIcon,
  FaqIcon,
  TelegramIcon,
  MailIcon,
  ManIcon,
  ExitIcon,
} from '../../icons';
import { NavButton, AuthButton, TextModal } from '../../components';
import FaqContent from '../../templates/FaqContent';

import './Header.scss';

const navItems = [
  {
    text: 'Home',
    Icon: HomeIcon,
  },
  {
    text: 'Benefits',
    Icon: BenefitsIcon,
  },
  {
    text: 'Contact',
    Icon: ContactIcon,
  },
  {
    text: 'F.A.Q.',
    Icon: FaqIcon,
  },
];

export const Header = () => {
  const [activePage, setActivePage] = useState<number>(0);
  const [showModal, setShowModal] = useState<boolean>(false);

  const handleClick = (page: string, idx: number) => {
    if (page === 'F.A.Q.') {
      setShowModal(true);
    } else {
      setActivePage(idx);
    }
  };

  return (
    <>
      <header className="header">
        <div className="header__side-buttons__container">
          <div className="header__side-button header__side-button_active">En</div>
          <div className="header__side-button btn_inactive">Ру</div>
        </div>
        <div className="nav">
          <div className="nav__left">
            <img src={logo} alt="logo" className="logo" />
            <div className="nav__buttons-container">
              {navItems.map(({ Icon, text }, idx) => (
                <NavButton
                  key={idx}
                  active={activePage === idx}
                  onClick={() => handleClick(text, idx)}
                >
                  <Icon fill={activePage === idx ? '#FCB223' : 'white'} />
                  {text}
                </NavButton>
              ))}
            </div>
          </div>
          <div className="nav__auth-buttons__container">
            <AuthButton onClick={() => {}}>
              <ExitIcon />
              Sign In
            </AuthButton>
            <AuthButton onClick={() => {}} color="gold">
              <ManIcon />
              Sign Up
            </AuthButton>
          </div>
        </div>
        <div className="header__side-buttons__container contact-buttons">
          <div className="header__side-button header__side-button_active">
            <TelegramIcon />
          </div>
          <div className="header__side-button header__side-button_active">
            <MailIcon />
          </div>
        </div>
      </header>
      <div className="mobile-logo">
        <img src={logo} alt="logo" className="logo_mobile" />
      </div>
      {showModal && (
        <TextModal onClose={() => setShowModal(false)}>
          <FaqContent />{' '}
        </TextModal>
      )}
    </>
  );
};

export default Header;
