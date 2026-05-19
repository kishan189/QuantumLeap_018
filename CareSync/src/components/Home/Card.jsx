import React from 'react';
import { NavLink } from 'react-router-dom';
import './Card.css';

const services = [
  { title: 'Book Appointment', icon: '📅', path: '/book-appointment' },
  { title: 'Nutrition Tracking', icon: '📝', path: '/Nutrition-tracking' },
  { title: 'Physical Activity Trainer', icon: '💻', path: '/HomePhysicalActivityTracker' },
  // { title: 'Buy Medicine', icon: '💊', path: '/buy-medicine' },
  // { title: 'Find Hospital', icon: '🏥', path: '/find-hospital' },
];

const Cards = () => {
  return (
    <div className="service-cards">
      {services.map((service, index) => (
        <NavLink to={service.path} key={index} className="card-link">
          <div className={`card ${index === 0 ? 'active' : ''}`}>
            <div className="icon">{service.icon}</div>
            <div className="title">{service.title}</div>
          </div>
        </NavLink>
      ))}
    </div>
  );
};

export default Cards;
