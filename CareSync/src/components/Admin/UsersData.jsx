import React, { useEffect, useState } from "react";
import "./Admin.css";
import useFetch from "../CustomHooks/UseFetch";
import useDelete from "../CustomHooks/useDelete";
import useUpdate from "../CustomHooks/useUpdate";

export default function UsersData() {
  // Fetch data and state hooks
  const [fetchedData, isLoading, fetchError] = useFetch(
    "https://caresync-3911d-default-rtdb.firebaseio.com/users.json"
  );
  const [usersData, setUsersData] = useState([]);
  const [DeleteData, isDeleted, deleteError] = useDelete();
  const [updateData, IsUpdated, updaterror] = useUpdate();

  // Transform fetched data into an array
  useEffect(() => {
    if (fetchedData) {
      const transformedData = Object.keys(fetchedData)
        .filter((key) => fetchedData[key] !== null) // Exclude null values
        .map((key) => ({
          id: key,
          ...fetchedData[key],
        }));
      setUsersData(transformedData);
    }
  }, [fetchedData]);

  // Handle delete user
  const handleDelete = async (id, first_name) => {
    await DeleteData(`https://caresync-3911d-default-rtdb.firebaseio.com/users/${id}.json`);
    if (isDeleted) {
      alert(`${first_name} deleted`);
      setUsersData(usersData.filter((user) => user.id !== id)); // Update state
    } else if (deleteError.length > 0) {
      console.error("Something went wrong while deleting:", deleteError);
    }
  };

  // Edit user data
  const [isFormVisible, setFormVisible] = useState(false);
  const [oldId, setOldId] = useState(null);
  const [firstName, setFirstName] = useState("");
  const [lasttName, setLastName] = useState("");
  const [email2, setEmail2] = useState("");
  const [password2, setPass2] = useState("");

  const handleEdit = (id, first_name, last_name, email, password) => {
    setOldId(id);
    setFirstName(first_name || ""); // Ensure default value is empty
    setLastName(last_name || "");
    setEmail2(email || "");
    setPass2(password || "");
    setFormVisible(!isFormVisible);
  };

  // Handle form submission for updates
  const handleForm = async (e) => {
    e.preventDefault();
    const updatedUser = {
      first_name: firstName,
      last_name: lasttName,
      email: email2,
      password: password2,
    };

    await updateData(
      `https://caresync-3911d-default-rtdb.firebaseio.com/users/${oldId}.json`,
      updatedUser
    );

    if (IsUpdated) {
      alert("User updated");
      const updatedUsers = usersData.map((user) =>
        user.id === oldId ? { ...user, ...updatedUser } : user
      );
      setUsersData(updatedUsers);
    } else if (updaterror.length > 0) {
      console.error("Something went wrong while updating:", updaterror);
    }
    setFormVisible(false);
  };

  
   if (isLoading) {
    return <p>Loading...</p>;
  }

  if (fetchError) {
    return <p>Oops! Something went wrong</p>;
  }

  // Render user data
  return (
    <div className="usersDataDisplay">
      <h2>User Details</h2>
      {isFormVisible && (
        <div className="formForUpdateDatas">
          <form onSubmit={handleForm}>
            <div>
              <input
                type="text"
                value={firstName}
                onChange={(e) => setFirstName(e.target.value)}
                placeholder="First Name"
              />
            </div>
            <div>
              <input
                type="text"
                value={lasttName}
                onChange={(e) => setLastName(e.target.value)}
                placeholder="Last Name"
              />
            </div>
            <div>
              <input
                type="email"
                value={email2}
                onChange={(e) => setEmail2(e.target.value)}
                placeholder="Email"
              />
            </div>
            <div>
              <input
                type="password"
                value={password2}
                onChange={(e) => setPass2(e.target.value)}
                placeholder="Password"
              />
            </div>
            <div>
              <button type="submit">Submit</button>
            </div>
          </form>
        </div>
      )}
      <hr />
      {usersData.length > 0 ? (
        usersData.map((user,i) => (
          <div key={i} className="userDetailsK">
            <h3>Name: {user.first_name || "N/A"}</h3>
            <p>Last Name: {user.last_name || "N/A"}</p>
            <p>Email: {user.email || "N/A"}</p>
            <p>Password: {user.password || "N/A"}</p>
            <div style={{ marginBottom: 10 }}>
              <button
                onClick={() =>
                  handleEdit(user.id, user.first_name, user.last_name, user.email, user.password)
                }
              >
                {isFormVisible ? "Cancel" : "Edit"}
              </button>
              <button onClick={() => handleDelete(user.id, user.first_name)}>Delete</button>
            </div>
            <hr />
          </div>
        ))
      ) : (
        <p>No users found.</p>
      )}
    </div>
  );
}
