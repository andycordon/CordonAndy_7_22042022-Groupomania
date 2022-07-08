import React from "react";
import Log from "../components/Log";
import { UidContext } from "../components/AppContext";
import { useContext } from "react";
import "../styles/index.scss";
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
              className="logo"
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
