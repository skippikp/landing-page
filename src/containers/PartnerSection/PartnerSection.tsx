import React, { useState } from 'react';
import supportImage from '../../assets/support.png';
import conversionImage from '../../assets/conversion.png';
import softwareImage from '../../assets/software.png';
import successImage from '../../assets/success.png';
import promoImage from '../../assets/promo.png';
import { Card, RegistrationForm, AuthButton } from '../../components';
import { TelegramIcon } from '../../icons';
import './PartnerSection.scss';

const cards = [
  {
    title: 'Support',
    text: 'Personal manager 24/7, Support and training',
    image: supportImage,
  },
  {
    title: 'Conversion',
    text: 'Hight conversion from click to deposit (1:6)',
    image: conversionImage,
  },
  {
    title: 'Software',
    text: 'Webview & PWA Apps',
    image: softwareImage,
  },
  {
    title: 'Promo',
    text: 'Customized promo materials',
    image: promoImage,
  },
];

export const PartnerSection = () => {
  const [messageSended, setMessageSended] = useState<boolean>(false);

  return (
    <section className="partner">
      <div className="container">
        <div className="partner__title">
          <h1>Become a Partner and Get:</h1>
        </div>
        <div>
          <div className="partner__cards-container">
            {cards.map((card, idx) => (
              <div key={idx} className={`partner__card_${idx + 1}`}>
                <Card>
                  <div className="partner__card">
                    <div>
                      <h3>{card.title}</h3>
                      <p>{card.text}</p>
                    </div>
                    <img src={card.image} alt="cardImg" />
                    <span className="partner__card__number">{idx + 1}</span>
                  </div>
                </Card>
              </div>
            ))}
            <div className="partner__form-container">
              <Card>
                {messageSended ? (
                  <div className="success-message">
                    <img src={successImage} alt="success" />
                    <h3>Thank you for registering!</h3>
                    <p>
                      Please contact our manager via Telegram, indicating your email, which was used
                      while registering
                    </p>
                    <AuthButton color="gold" onClick={() => {}}>
                      <TelegramIcon fill="black" />
                      @ValorManager
                    </AuthButton>
                  </div>
                ) : (
                  <RegistrationForm onSubmit={() => setMessageSended(true)} />
                )}
              </Card>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default PartnerSection;
