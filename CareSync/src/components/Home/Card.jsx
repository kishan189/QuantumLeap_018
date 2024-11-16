// import React from 'react';
// import './Card.css';

// const services = [
//   { title: 'Book Appointment', icon: '📅' },
//   { title: 'Book Health Check-Up', icon: '📝' },
//   { title: 'Consult Online', icon: '💻' },
//   { title: 'Buy Medicine', icon: '💊' },
//   { title: 'Find Hospital', icon: '🏥' },
// ];

// const Cards = () => {
//   return (
//     <div className="service-cards">
//       {services.map((service, index) => (
//         <div key={index} className={`card ${index === 0 ? 'active' : ''}`}>
//           <div className="icon">{service.icon}</div>
//           <div className="title">{service.title}</div>
//         </div>
//       ))}
//     </div>
//   );
// };

// export default Cards; 
import React from 'react';
import { NavLink } from 'react-router-dom';
import './Card.css';

const services = [
  { title: 'Book Appointment', icon: '📅', path: '/book-appointment' },
  { title: 'Nutrition Tracking', icon: '📝', path: '/Nutrition-tracking' },
  { title: 'Consult Online', icon: '💻', path: '/consult-online' },
  { title: 'Buy Medicine', icon: '💊', path: '/buy-medicine' },
  { title: 'Find Hospital', icon: '🏥', path: '/find-hospital' },
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
