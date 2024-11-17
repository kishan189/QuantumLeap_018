
import React, { useState } from 'react';
import './DoctorCard.css';

const DoctorCard = ({ doctor }) => {
  const [showForm, setShowForm] = useState(false);
  const [showPopup, setShowPopup] = useState(false);
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    age: '',
    appointmentDate: '',
    message: '',
  });
  const [isFormSubmitted, setIsFormSubmitted] = useState(false);

  const handleFormToggle = () => setShowForm((prev) => !prev);
  const handlePopupToggle = () => setShowPopup((prev) => !prev);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({ ...prevData, [name]: value }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setShowForm(false);
    setShowPopup(true);
    setIsFormSubmitted(true); // Mark that form has been submitted
    alert(`Appointment successfully booked with ${doctor.name}!`);
  };

  return (
    <div className="doctor-card">
      <div className="doctor-info">
        <img src={doctor.image} alt={doctor.name} className="doctor-photo" />
        <div className="doctor-details">
          <h3>{doctor.name}</h3>
          <p><strong>Age:</strong> {doctor.age} years</p>
          <p><strong>Qualification:</strong> {doctor.qualification}</p>
          <p><strong>Specialty:</strong> {doctor.specialty}</p>
          <p><strong>Experience:</strong> {doctor.experience} years</p>
          <p><strong>Languages:</strong> {doctor.language.join(', ')}</p>
          <p><strong>Location:</strong> {doctor.location}</p>
          <p><strong>Hospital:</strong> {doctor.hospital_name}</p>
          <p><strong>Ratings:</strong> {doctor.ratings} ★</p>

          <div className="appointment-buttons">
            <button className="appointment-button" onClick={handleFormToggle}>
              Book an Appointment
            </button>
            <button className="booked-appointment-button" onClick={handlePopupToggle}>
              Booked Appointments
            </button>
          </div>
        </div>
      </div>

      {showForm && (
        <div className="form-overlay">
          <div className="form-container">
            <h2>Book an Appointment</h2>
            <form onSubmit={handleSubmit}>
              <div className="form-group">
                <label htmlFor="name">Name:</label>
                <input
                  type="text"
                  id="name"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  required
                />
              </div>
              <div className="form-group">
                <label htmlFor="email">Email:</label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  required
                />
              </div>
              <div className="form-group">
                <label htmlFor="phone">Phone:</label>
                <input
                  type="tel"
                  id="phone"
                  name="phone"
                  value={formData.phone}
                  onChange={handleChange}
                  required
                />
              </div>
              <div className="form-group">
                <label htmlFor="age">Age:</label>
                <input
                  type="number"
                  id="age"
                  name="age"
                  value={formData.age}
                  onChange={handleChange}
                  min="1"
                  max="120"
                  required
                />
              </div>
              <div className="form-group">
                <label htmlFor="appointmentDate">Preferred Date:</label>
                <input
                  type="date"
                  id="appointmentDate"
                  name="appointmentDate"
                  value={formData.appointmentDate}
                  onChange={handleChange}
                  required
                />
              </div>
              <div className="form-group">
                <label htmlFor="message">Message:</label>
                <textarea
                  id="message"
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  placeholder="Any specific concerns?"
                ></textarea>
              </div>
              <div className="form-actions">
                <button type="submit" className="submit-button">Submit</button>
                <button type="button" className="cancel-button" onClick={handleFormToggle}>
                  Cancel
                </button>
              </div>
            </form>
          </div>
        </div>
      )}

      {showPopup && (
        <div className="popup-overlay" onClick={handlePopupToggle}>
          <div className="popup-content" onClick={(e) => e.stopPropagation()}>
            <h2>Booked Appointment Details</h2>
            {isFormSubmitted ? (
              <>
                <p><strong>Name:</strong> {formData.name}</p>
                <p><strong>Email:</strong> {formData.email}</p>
                <p><strong>Phone:</strong> {formData.phone}</p>
                <p><strong>Age:</strong> {formData.age}</p>
                <p><strong>Appointment Date:</strong> {formData.appointmentDate}</p>
                <p><strong>Message:</strong> {formData.message}</p>
              </>
            ) : (
              <p>No appointment booked</p>
            )}
            <button onClick={handlePopupToggle}>Close</button>
          </div>
        </div>
      )}
    </div>
  );
};

export default DoctorCard;
