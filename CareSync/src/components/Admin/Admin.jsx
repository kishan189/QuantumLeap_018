import React from 'react'
import ApointmentManag from './ApointmentManag';
import UserManagement from './UserManagement';
import AddDataForm from '../CustomHooks/Posting';
import DoctorsData from './DoctorsData';
export default function Admin() {
  return (
    <>
    <div>Admin</div>
    <UserManagement/>
    <ApointmentManag/>
    <AddDataForm/>
    </>
  )
}
