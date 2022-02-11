import React from "react";
import { children } from "react";

const myProfile = {
  fullname: "Anagor Chidera",
  bio: "I am a Tech Enthusiast",
  profession: "Software Engineer",
};

 function Profile() {
  function HandleName() {
    const nameHandler = (fullname) => {
      alert(myProfile.fullname);
    };
    return (
      <div>
        <button onClick={nameHandler}>Start Here</button>
      </div>
    );
  }
  return (
    <div>
      <UserProfile
        fullname={myProfile.fullname}
        bio={myProfile.bio}
        profession={myProfile.profession}
      >
        <img
          src="image.jpg"
          alt="me"
        ></img>
        <HandleName />
      </UserProfile>
    </div>
  );
}

const UserProfile = ({ fullname, bio, profession, children, HandleName }) => {
  console.log(children);
  return (
    <div>
      <h2>{fullname}</h2>
      <p>{bio}</p>
      <h5>{profession}</h5>
      {children}
      {HandleName}
    </div>
  );
};

UserProfile.defaultProps = {
  fullname: "Anagor Chidera",
  bio: "I am a Tech Enthusiast",
  profession: "Software Engineer",
};

export default Profile;