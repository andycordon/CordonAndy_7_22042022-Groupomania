import React from "react";
import Navbar from "../components/Navbar";
import UpdateProfil from "../components/Profil/UpdateProfil";

const Profil = () => {
  return (
    <div className="profil-page">
      <Navbar />
      <UpdateProfil />
    </div>
  );
};

export default Profil;
