//PROFIL

import React from "react";
import Navbar from "../components/Navbar";
import UpdateProfil from "../components/Profil/UpdateProfil";

const Profil = () => {
  return (
    <div className="profil-page">
      <Navbar /> {/*barre de menu*/}
      <UpdateProfil /> {/*formulaire de mise a jour de la photo de profil*/}
    </div>
  );
};

export default Profil;
