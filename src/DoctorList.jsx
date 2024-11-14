// src/components/DoctorList.jsx
import React, { useState, useEffect } from 'react';
import DoctorCard from './DoctorCard';
import { database, ref, onValue } from './firebase'; // Corrected the import path

const DoctorList = () => {
  const [doctors, setDoctors] = useState([]);
  const [showFilters, setShowFilters] = useState(false);

  useEffect(() => {
    const doctorRef = ref(database, 'doctors'); // Reference to the doctors node in Firebase
    const unsubscribe = onValue(doctorRef, (snapshot) => {
      const data = snapshot.val();
      
      // Check if data exists and convert object data into an array
      if (data) {
        const doctorsArray = Object.keys(data).map((key) => ({
          id: key,
          ...data[key], // Destructure the doctor data
        }));
        setDoctors(doctorsArray);
      } else {
        setDoctors([]); // In case no data is available
      }
    });

    // Cleanup the listener on unmount
    return () => unsubscribe();
  }, []); // The empty dependency array ensures the effect runs once when the component mounts

  const toggleFilters = () => {
    setShowFilters(!showFilters);
  };

  return (
    <div className="doctor-list-container">
      <header className="header">
        <h2>Best Doctors in India</h2>
        <button className="filter-button" onClick={toggleFilters}>
          Filter Doctors
        </button>
      </header>

      {showFilters && (
        <div className="filter-options">
          <select className="filter-select">
            <option>Select Specialty</option>
            <option>Cardiology</option>
            <option>Neurology</option>
            <option>Orthopedics</option>
          </select>
          <select className="filter-select">
            <option>Select City</option>
            <option>Delhi</option>
            <option>Mumbai</option>
            <option>Bangalore</option>
          </select>
          <select className="filter-select">
            <option>Select Hospital</option>
            <option>Apollo Hospitals</option>
            <option>Fortis Hospital</option>
            <option>Max Healthcare</option>
          </select>
        </div>
      )}

      <div className="doctor-cards">
        {doctors.length > 0 ? (
          doctors.map((doctor, index) => (
            <DoctorCard key={index} doctor={doctor} />
          ))
        ) : (
          <p>No doctors available.</p>
        )}
      </div>
    </div>
  );
};

export default DoctorList;
