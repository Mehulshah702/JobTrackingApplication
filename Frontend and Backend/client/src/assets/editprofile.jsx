import React, { useState } from "react";
import "./editprofile.css";

const EditProfile = () => {
  const [isEditing, setIsEditing] = useState(false);
  const [username, setUsername] = useState("Vedika");
  const [bio, setBio] = useState("Full Stack MERN Developer");
  const [email, setEmail] = useState("vedika@example.com");
  const [phno, setPhno] = useState("1234567890");
  const [website, setWebsite] = useState("www.vedikapatidar.com");

  const handleEdit = () => {
    setIsEditing(true);
  };

  const handleSave = () => {
    setIsEditing(false);
  };

  return (
    <div className="profile-container">
        <h2>Edit Your Profile</h2>
        <div className="profile-details">
          <label>Username:</label>
          {isEditing ? (
            <input type="text" value={username} onChange={(e) => setUsername(e.target.value)} />
          ) : (
            <p>{username}</p>
          )}

          <label>Bio:</label>
          {isEditing ? (
            <input type="text" value={bio} onChange={(e) => setBio(e.target.value)} />
          ) : (
            <p>{bio}</p>
          )}

          <label>Email:</label>
          {isEditing ? (
            <input type="email" value={email} onChange={(e) => setEmail(e.target.value)} />
          ) : (
            <p>{email}</p>
          )}

          <label>Phone Number:</label>
          {isEditing ? (
            <input type="tel" value={phno} onChange={(e) => setPhno(e.target.value)} />
          ) : (
            <p>{phno}</p>
          )}

          <label>Website:</label>
          {isEditing ? (
            <input type="text" value={website} onChange={(e) => setWebsite(e.target.value)} />
          ) : (
            <p>{website}</p>
          )}

          <button onClick={isEditing ? handleSave : handleEdit}>
            {isEditing ? "Save" : "Edit"}
          </button>
        </div>
    </div>
  );
};

export default EditProfile;
