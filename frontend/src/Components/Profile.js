import React from "react";

const Profile=()=>{
    const data = localStorage.getItem('user');
    return(
        <div className="profile-section">
            <h1>Welcome To Your Profile {JSON.parse(data).name}</h1>
            <h1>Your Mongodb id :- {JSON.parse(data)._id}</h1>
            <h1>Your email id :- {JSON.parse(data).email}</h1>
        </div>
    )
}

export default Profile;