import React from 'react';
import './Card.css';

const services = [
  { title: 'Book Appointment', icon: '📅' },
  { title: 'Book Health Check-Up', icon: '📝' },
  { title: 'Consult Online', icon: '💻' },
  { title: 'Buy Medicine', icon: '💊' },
  { title: 'Find Hospital', icon: '🏥' },
];

const Cards = () => {
  return (
    <div className="service-cards">
      {services.map((service, index) => (
        <div key={index} className={`card ${index === 0 ? 'active' : ''}`}>
          <div className="icon">{service.icon}</div>
          <div className="title">{service.title}</div>
        </div>
      ))}
    </div>
  );
};

export default Cards;
