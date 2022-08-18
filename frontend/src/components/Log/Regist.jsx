//REGIST

import React from "react";
import SignUpForm from "./SignUpForm";
import { NavLink } from "react-router-dom";

export default function Log() {
  return (
    <div>
      <SignUpForm /> {/*page complete pour l'inscription*/}
      <NavLink to="/" className="link">
        Déjà inscrit ?
      </NavLink>
      {/*lien pour aller à la page de connexion*/}
    </div>
  );
}
