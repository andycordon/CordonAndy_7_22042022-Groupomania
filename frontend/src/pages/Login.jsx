import React from "react";
import Log from "../components/Log";

const Profil = () => {
  return (
    <div className="log-container">
      <div className="img-container">
        <img
          src="./img/log.png"
          alt="Img de présentation du réseau social Groupomania"
        />
      </div>
      <Log signin={true} signup={false} />
    </div>
  );
};

export default Profil;
