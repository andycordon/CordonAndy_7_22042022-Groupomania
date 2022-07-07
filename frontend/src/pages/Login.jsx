import React from "react";
import Log from "../components/Log";
import { UidContext } from "../components/AppContext";
import { useContext } from "react";

export default function Login() {
  const uid = useContext(UidContext);

  return (
    <div className="login-page">
      {uid ? (
        <h1>UPDATE PAGE</h1>
      ) : (
        <div className="log-container">
          <div className="img-container">
            <img
              src="./img/log.png"
              alt="Logo de l'entreprise avec son nom Groupomania"
            />
          </div>
          <Log />
        </div>
      )}
    </div>
  );
}
