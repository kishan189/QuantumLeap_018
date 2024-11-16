import React, { useEffect, useState } from 'react';
import "./Admin.css";
import DoctorsData from './DoctorsData';
import PatientsData from './PatientsData';
import UsersData from './UsersData';


export default function UserManagement() {
 
    return (
        <div className='userzDetailsg'>
            <div>User Management</div>
           
            <div className='trioContainerudp'>
               
                <UsersData/>
                <DoctorsData />
                <PatientsData />
            </div>
        </div>
    );
}
