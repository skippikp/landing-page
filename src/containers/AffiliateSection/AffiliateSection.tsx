import React from 'react';
import Card from '../../components/Card/Card';
import cpaImage from '../../assets/cpa.png';
import paymentsImage from '../../assets/payments.png';
import revshareImage from '../../assets/revshare.png';
import './AffiliateSection.scss';

const cards = [
  {
    image: cpaImage,
    title: 'CPA:',
    text: '$20 ... $60',
  },
  {
    image: paymentsImage,
    title: 'Payments:',
    text: 'Every Day',
  },
  {
    image: revshareImage,
    title: 'Revshare:',
    text: 'UP to 60%',
  },
];

export const AffiliateSection = () => {
  return (
    <section>
      <div className="affiliate">
        <div className="affiliate__dash">
          <h1>–</h1>
        </div>
        <div className="container">
          <h1>Valorous Affiliate Program</h1>
          <div className="affiliate__cards-container">
            {cards.map((card, idx) => (
              <div key={idx} className={`affiliate__card_${idx + 1}`}>
                <Card>
                  <div className="affiliate__card">
                    <div className="affilate__card__image">
                      <img src={card.image} alt="cardImg" />
                    </div>
                    <div className="affiliate__card__text">
                      <p>{card.title}</p>
                      <h3>{card.text}</h3>
                    </div>
                  </div>
                </Card>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default AffiliateSection;
