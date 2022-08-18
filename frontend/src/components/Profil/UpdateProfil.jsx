//UPDATEPROFIL

import React from "react";
import { useSelector } from "react-redux";
import UploadImg from "./UploadImg";

const UpdateProfil = () => {
  const userData = useSelector((state) => state.userReducer);

  return (
    <div className="profil-container">
      <h2>{userData.pseudo}</h2> {/*récupere le pseudo*/}
      <div className="update-container">
        <img src={userData.picture} alt="user-pic" />{" "}
        {/*récupere la photo de profil, de base celle par defaut*/}
        <UploadImg /> {/*permet de modifier sa photo de profil*/}
      </div>
    </div>
  );
};

export default UpdateProfil;
