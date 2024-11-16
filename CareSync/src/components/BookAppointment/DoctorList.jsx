
import React, { useState, useEffect, useMemo } from 'react';
import DoctorCard from './DoctorCard';
import { database } from './DoctorFirebase';
import { ref, onValue } from 'firebase/database';
import './DoctorList.css';

const DoctorList = () => {
  const [doctors, setDoctors] = useState([]);
  const [showFilters, setShowFilters] = useState(false);
  const [specialty, setSpecialty] = useState('');
  const [city, setCity] = useState('');
  const [hospital, setHospital] = useState('');

  // Pagination state
  const [currentPage, setCurrentPage] = useState(1);
  const doctorsPerPage = 10;

  useEffect(() => {
    const doctorRef = ref(database, 'doctors');
    const unsubscribe = onValue(doctorRef, (snapshot) => {
      const data = snapshot.val();
      if (data) {
        const doctorsArray = Object.keys(data).map((key) => ({
          id: key,
          ...data[key],
        }));
        setDoctors(doctorsArray);
      } else {
        setDoctors([]);
      }
    });

    return () => unsubscribe();
  }, []);

  const filteredDoctors = useMemo(() => {
    return doctors.filter((doctor) => {
      const specialtyMatch = specialty
        ? doctor.specialty?.toLowerCase().trim() === specialty.toLowerCase().trim()
        : true;
      const cityMatch = city
        ? doctor.location?.toLowerCase().trim() === city.toLowerCase().trim()
        : true;
      const hospitalMatch = hospital
        ? doctor.hospital_name?.toLowerCase().trim() === hospital.toLowerCase().trim()
        : true;
      return specialtyMatch && cityMatch && hospitalMatch;
    });
  }, [doctors, specialty, city, hospital]);

  // Calculate the paginated doctors
  const indexOfLastDoctor = currentPage * doctorsPerPage;
  const indexOfFirstDoctor = indexOfLastDoctor - doctorsPerPage;
  const currentDoctors = filteredDoctors.slice(indexOfFirstDoctor, indexOfLastDoctor);

  const totalPages = Math.ceil(filteredDoctors.length / doctorsPerPage);

  const toggleFilters = () => setShowFilters(!showFilters);

  const handlePageChange = (pageNumber) => setCurrentPage(pageNumber);

  return (
    <div className="doctor-list-container">
      <header className="doc_header">
        <h2>Best Doctors in India</h2>
        <button className="doc_filter_button" onClick={toggleFilters}>
          Filter Doctors
        </button>
      </header>

      {showFilters && (
        <div className="doc_filter_options">
          <select
            className="doc_filter_select"
            value={specialty}
            onChange={(e) => setSpecialty(e.target.value)}
          >
            <option value="">Select Specialty</option>
            <option value="Cardiology">Cardiology</option>
            <option value="Neurology">Neurology</option>
            <option value="Orthopedics">Orthopedics</option>
            <option value="Pediatrics">Pediatrics</option>
            <option value="General Medicine">General Medicine</option>
            <option value="Ophthalmology">Ophthalmology</option>
            <option value="ENT">ENT</option>
            <option value="Psychiatry">Psychiatry</option>
            <option value="Dermatology">Dermatology</option>
            <option value="Gastroenterology">Gastroenterology</option>
          </select>
          <select
            className="doc_filter_select"
            value={city}
            onChange={(e) => setCity(e.target.value)}
          >
            <option value="">Select City</option>
            <option value="Delhi">Delhi</option>
            <option value="Mumbai">Mumbai</option>
            <option value="Bangalore">Bangalore</option>
            <option value="Hyderabad">Hyderabad</option>
            <option value="Kolkata">Kolkata</option>
            <option value="Chandigarh">Chandigarh</option>
            <option value="Ahmedabad">Ahmedabad</option>
            <option value="Lucknow">Lucknow</option>
            <option value="Chennai">Chennai</option>
            <option value="Pune">Pune</option>
          </select>
          <select
            className="doc_filter_select"
            value={hospital}
            onChange={(e) => setHospital(e.target.value)}
          >
            <option value="">Select Hospital</option>
            <option value="Max Super Speciality Hospital">Max Super Speciality Hospital</option>
            <option value="Care Clinic">Care Clinic</option>
            <option value="Artemis Hospital">Artemis Hospital</option>
            <option value="AIIMS">AIIMS</option>
            <option value="Manipal Hospital">Manipal Hospital</option>
            <option value="Narayana Health">Narayana Health</option>
            <option value="Fortis Healthcare">Fortis Healthcare</option>
            <option value="Kokilaben Dhirubhai Ambani Hospital">Kokilaben Dhirubhai Ambani Hospital</option>
            <option value="Medanta">Medanta</option>
          </select>
        </div>
      )}

      <div className="doctor-cards">
        {currentDoctors.length > 0 ? (
          currentDoctors.map((doctor, index) => (
            <DoctorCard key={index} doctor={doctor} />
          ))
        ) : (
          <p>Loading.....</p>
        )}
      </div>

      {totalPages > 1 && (
        <Pagination
          currentPage={currentPage}
          totalPages={totalPages}
          onPageChange={handlePageChange}
        />
      )}
    </div>
  );
};

// Pagination component

const Pagination = ({ currentPage, totalPages, onPageChange }) => {
  const maxPagesToShow = 3;

  const getPageNumbers = () => {
    const pages = [];

    if (totalPages <= maxPagesToShow + 2) {
      for (let i = 1; i <= totalPages; i++) {
        pages.push(i);
      }
    } else {
      if (currentPage < maxPagesToShow) {
        for (let i = 1; i <= maxPagesToShow; i++) {
          pages.push(i);
        }
        pages.push("...");
        pages.push(totalPages);
      } else if (currentPage >= maxPagesToShow && currentPage <= totalPages - maxPagesToShow) {
        pages.push(1);
        pages.push("...");
        pages.push(currentPage - 1, currentPage, currentPage + 1);
        pages.push("...");
        pages.push(totalPages);
      } else {
        pages.push(1);
        pages.push("...");
        for (let i = totalPages - maxPagesToShow + 1; i <= totalPages; i++) {
          pages.push(i);
        }
      }
    }

    return pages;
  };

  return (
    <div className="pagination">
      {getPageNumbers().map((page, index) =>
        page === "..." ? (
          <span key={`ellipsis-${index}`} className="pagination-ellipsis">...</span>
        ) : (
          <button
            key={`page-${page}`}
            className={`pagination-button ${page === currentPage ? 'active' : ''}`}
            onClick={() => onPageChange(page)}
          >
            {page}
          </button>
        )
      )}
      <button
        className="pagination-button"
        onClick={() => onPageChange(currentPage + 1)}
        disabled={currentPage === totalPages}
      >
        Next
      </button>
    </div>
  );
};


export default DoctorList;
