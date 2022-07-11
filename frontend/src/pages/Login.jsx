import React from "react";
import Log from "../components/Log";
import "../styles/index.scss";

export default function Login() {
  return (
    <div className="login-page">
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
    </div>
  );
}
