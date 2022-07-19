import React, { useContext } from "react";
import Log from "../components/Log";
import { UidContext } from "../components/AppContext";
import UpdateProfil from "../components/Profil/UpdateProfil";

const Profil = () => {
  const uid = useContext(UidContext);

  return (
    <div className="profil-page">
      {uid ? (
        <UpdateProfil />
      ) : (
        <div className="log-container">
          <div className="img-container">
            <img
              src="./img/log.png"
              alt="Img de présentation du réseau social Groupomania"
            />
          </div>
          <Log signin={true} signup={false} />
        </div>
      )}
    </div>
  );
};

export default Profil;
