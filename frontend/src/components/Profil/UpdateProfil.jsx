import React from "react";
import { useSelector } from "react-redux";
import UploadImg from "./UploadImg";

const UpdateProfil = () => {
  const userData = useSelector((state) => state.userReducer);
  const error = useSelector((state) => state.errorReducer.userError);

  return (
    <div className="profil-container">
      <h2>{userData.pseudo}</h2>
      <div className="update-container">
        <img src={userData.picture} alt="user-pic" />
        <UploadImg />
      </div>
    </div>
  );
};

export default UpdateProfil;
