import React, { useEffect, useState } from 'react';
import "./Admin.css";
import useFetch from '../CustomHooks/UseFetch';
import DoctorsData from './DoctorsData';
import PatientsData from './PatientsData';
import useDelete from '../CustomHooks/useDelete';

export default function UserManagement() {
    const [userId, setUserID] = useState(null);
    const [usersData, setUsersData] = useState([]);
    const [DeleteData, isDeleted, deleteError] = useDelete();

    const [fetchedData, isLoading, fetchError] = useFetch("https://caresync-3911d-default-rtdb.firebaseio.com/users.json");

    // Initialize usersData state with fetched data
    useEffect(() => {
        if (fetchedData) {
            setUsersData(fetchedData);
        }
    }, [fetchedData]);

    const handleDelete = (id) => {
        const deleteUrl = `https://caresync-3911d-default-rtdb.firebaseio.com/users/${id}.json`;
        DeleteData(deleteUrl);
        setUserID(null);
    };

    useEffect(() => {
        if (isDeleted) {
            // Remove the deleted user from the local state
            setUsersData((prevData) => prevData.filter((_, index) => index !== userId));
            alert("User deleted successfully!");
        }
        if (deleteError) {
            console.log("Error deleting user:", deleteError);
        }
    }, [isDeleted, deleteError, userId]);

    if (isLoading) {
        return <p>Loading........</p>;
    }

    if (fetchError) {
        return <p>Oops! Something went wrong</p>;
    }

    return (
        <div className='userzDetailsg'>
            <div>User Management</div>
            <div className='trioContainerudp'>
                <div className='usersDataDisplay'>
                    <h2>User Details</h2>
                    <hr />
                    {usersData.map((el, id) =>
                        <div key={id} className='userDetailsK'>
                            <h3>Name: {el.first_name}</h3>
                            <h4>Email: {el.last_name}</h4>
                          
                            <div style={{ marginBottom: 10 }}>
                                <button>Edit</button>
                                <button onClick={() => handleDelete(id)}>Delete</button>
                            </div>
                            <hr />
                        </div>
                    )}
                </div>
                <DoctorsData />
                <PatientsData />
            </div>
        </div>
    );
}
