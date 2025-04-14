import React from "react";
import "./profile.css";

const Profile = () => {
    return (
        <div className="profile-container" style={{ width: "100%"}}>
            <div className="profile-card">
                <div className="profile-header">
                    <img id="profile-pic" src="/Profile_Avatar.jpeg" alt="Profile Picture" />
                    <h2 id="username" style={{color:"white"}}>Vedika Patidar</h2>
                    <p id="bio">A passionate web developer.</p>
                </div>
                <div className="profile-info">
                    <h3>Personal Information</h3>
                    <p><strong>Email:</strong> <span id="email">vedika@gmail.com</span></p>
                    <p><strong>Location:</strong> <span id="location">India</span></p>
                    <p><strong>Website:</strong> <a id="website" href="https://vedikapatidar.netlify.app/">My_Portfolio_Link</a></p>
                </div>
                <div className="edit-button">
                    <a href="/editprofile"><button id="edit-button">Edit Profile</button></a>
                    <button id="save-button" style={{ display: "none" }}>Save Changes</button>
                </div>
            </div>

        </div>
    );
};

export default Profile;
