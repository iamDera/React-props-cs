import React from "react";
import myProfile from "./profile";

 function HandleName() {
  const nameHandler = () => {
    alert(myProfile.fullname);
  };
  return (
    <div>
      <button onClick={nameHandler}>Start Here</button>
    </div>
  );
}

export default HandleName;