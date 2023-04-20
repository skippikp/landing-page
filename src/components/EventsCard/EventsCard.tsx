import React from 'react';
import './EventsCard.scss';

type Props = {
  img: string;
  text: JSX.Element;
};

export const EventsCard = ({ img, text }: Props) => {
  return (
    <div className="event-card">
      <div className="event-card__image-container">
        <div className="reflection">
          <div className="reflection_2">
            <div className="reflection_3"></div>
          </div>
        </div>
        <img src={img} alt="card_img" />
      </div>
      <div className="event-card__text">{text}</div>
    </div>
  );
};

export default EventsCard;
