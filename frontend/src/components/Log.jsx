import React from "react";
import SignInForm from "./SignInForm";
import { NavLink } from "react-router-dom";

export default function Log() {
  return (
    <div>
      <SignInForm />
      <NavLink to="/register" className="link">
        Pas encore inscrit ?
      </NavLink>
      <NavLink to="/" className="link">
        Mot de passe oublier
      </NavLink>
    </div>
  );
}
