import React from 'react';
import tesImage from '../../assets/tes.png';
import blockchainImage from '../../assets/blockchain.png';
import EventsCard from '../../components/EventsCard/EventsCard';
import './EventsSection.scss';


const events = [
  {
    img: tesImage,
    text: (
      <>
        <h3>
          Feb., 22. <span className="text_gray">2023</span>
        </h3>
        <p>
          Cascais, <span className="text_gray">Portugal</span>
        </p>
      </>
    ),
  },
  {
    img: blockchainImage,
    text: (
      <>
        <h3>
          Feb., 27. <span className="text_gray">2023</span>
        </h3>
        <p>
          Dubai, <span className="text_gray">UAE</span>
        </p>
      </>
    ),
  },
];

export const EventsSection = () => {
  return (
    <section className="events">
      <div className="container">
        <h1>We've been sleeping for the last 10 years and now we're awake!</h1>
        <h3 className="title">Shall we meet?</h3>
        <div className="events__cards-container">
          {events.map((event, idx) => (
            <EventsCard key={idx} img={event.img} text={event.text} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default EventsSection;
