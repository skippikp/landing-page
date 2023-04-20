import React, { useState } from 'react';
import logo from '../../assets/logo.png';
import logoMobile from '../../assets/logo-mobile.png';
import { MailIcon, TelegramIcon } from '../../icons';
import {TextModal} from '../../components';
import TermsContent from '../../templates/TermsContent';
import FaqContent from '../../templates/FaqContent';
import './Footer.scss';

export const Footer = () => {
  const [showFaqModal, setShowFaqModal] = useState<boolean>(false);
  const [showTermsModal, setShowTermsModal] = useState<boolean>(false);

  return (
    <footer className="footer">
      <div className="container footer-container">
        <div className="footer__left-side">
          <img src={logo} alt="logo" className="logo" />
          <p className="text_mini">© 2023. Valor Partners</p>
          <img src={logoMobile} alt="logo" className="logo_mobile" />
          <div className="footer__actions">
            <p className="text_mini text_gray" onClick={() => setShowFaqModal(true)}>
              F.A.Q.
            </p>
            <p className="text_mini text_gray" onClick={() => setShowTermsModal(true)}>
              Term
            </p>
            <div className="footer__lang_mobile">
              <p className="text_mini text_gray">En</p>
              <p className="text_mini">Ru</p>
            </div>
          </div>
          <div className="footer__contact">
            <div className="footer__telegram">
              <TelegramIcon />
              <a href="https://t.me/ValorManager" className="text_mini">
                @ValorManager
              </a>
            </div>
            <div className="footer__mail">
              <MailIcon />
              <a href="mailto: support@valor.casino" className="text_mini">
                support@valor.casino
              </a>
            </div>
          </div>
        </div>
        <div className="footer__lang">
          <p className="text_mini text_gray">En</p>
          <p className="text_mini">Ru</p>
        </div>
      </div>
      {showTermsModal && (
        <TextModal onClose={() => setShowTermsModal(false)}>
          <TermsContent />
        </TextModal>
      )}
      {showFaqModal && (
        <TextModal onClose={() => setShowFaqModal(false)}>
          <FaqContent />
        </TextModal>
      )}
    </footer>
  );
};

export default Footer;
