import React from "react";

function UserProfile({ name, description, profileImage }) {
    return (
    <div className="user-profile">
        <img src={profileImage} alt={`${name}'s profile`} className="profile-image" />
        <h2>{name}</h2>
        <p>{description}</p>
    </div>
    );
}

export default UserProfile;
