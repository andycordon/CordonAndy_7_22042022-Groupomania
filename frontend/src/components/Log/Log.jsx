//LOG

import React from "react";
import SignInForm from "./SignInForm";
import { NavLink } from "react-router-dom";

export default function Log() {
  return (
    <div>
      <SignInForm /> {/*page complete pour la connexion*/}
      <NavLink to="/register" className="link">
        Pas encore inscrit ?
      </NavLink>
      {/*lien pour aller à la page d'inscription*/}
    </div>
  );
}
