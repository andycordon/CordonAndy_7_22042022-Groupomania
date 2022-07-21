import React from "react";
import Regist from "../components/Log/Regist";
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
        <Regist />
      </div>
    </div>
  );
}
