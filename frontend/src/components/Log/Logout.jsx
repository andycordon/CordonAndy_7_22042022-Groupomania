//LOGOUT

import React from "react";
import axios from "axios";
import cookie from "js-cookie";

//permet de detruire le cookie lors de la deconnexion
const Logout = () => {
  const removeCookie = (key) => {
    if (window !== "undefined") {
      //en modifiant son temps d'expiration à 1ms
      cookie.remove(key, { expires: 1 });
    }
  };

  const logout = async () => {
    await axios({
      method: "get",
      url: `${process.env.REACT_APP_API_URL}api/auth/logout`,
      withCredentials: true,
    })
      .then(() => removeCookie("jwt"))
      .catch((err) => console.log(err));

    window.location = "/"; //redirection vers la racine, la page de connexion
  };

  return (
    //icon de lien pour se deconnecter
    <li onClick={logout}>
      <img src="./img/icons/door-open-solid.svg" alt="logout" />
    </li>
  );
};

export default Logout;
