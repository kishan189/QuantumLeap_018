// const DoctorCard = ({ doctor }) => {
//   const languages = doctor.languages || []; // Default to an empty array if undefined

//   return (
//     <div className="doctor-card">
//       <div className="doctor-info">
//         <img src={doctor.photo} alt={doctor.name} className="doctor-photo" />
//         <div className="doctor-details">
//           <h3>{doctor.name}</h3>
//           <p>{doctor.qualifications}</p>
//           <p><strong>Experience:</strong> {doctor.experience} years</p>
//           <p><strong>Languages:</strong> {languages.join(', ')}</p>
//           <p><strong>Location:</strong> {doctor.location}</p>
          
//           <div className="availability-appointment">
//             <p className="availability"><strong>Availability:</strong> {doctor.availability}</p>
//             <button className="appointment-button">Book an Appointment</button>
//           </div>
//         </div>
//       </div>
//     </div>
//   );
// };

// export default DoctorCard;
const DoctorCard = ({ doctor }) => {
  const languages = doctor.language || []; // Use 'language' based on your provided data

  return (
    <div className="doctor-card">
      <div className="doctor-info">
        <img src={doctor.image} alt={doctor.name} className="doctor-photo" /> {/* Updated to use 'doctor.image' */}
        <div className="doctor-details">
          <h3>{doctor.name}</h3>
          <p><strong>Qualification:</strong> {doctor.qualification}</p>
          <p><strong>Specialty:</strong> {doctor.specialty}</p>
          <p><strong>Experience:</strong> {doctor.experience} years</p>
          <p><strong>Languages:</strong> {languages.join(', ')}</p>
          <p><strong>Location:</strong> {doctor.location}</p>
          <p><strong>Hospital:</strong> {doctor.hospital_name}</p>
          <p><strong>Ratings:</strong> {doctor.ratings} ★</p>
          
          <div className="availability-appointment">
            <p className="availability"><strong>Availability:</strong> {doctor.availability}</p>
            <button className="appointment-button">Book an Appointment</button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default DoctorCard;
