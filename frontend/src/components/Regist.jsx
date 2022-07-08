import React from "react";
import SignUpForm from "./SignUpForm";
import { NavLink } from "react-router-dom";

export default function Log() {
  return (
    <div>
      <SignUpForm />
      <NavLink to="/" className="link">
        Déjà inscrit ?
      </NavLink>
    </div>
  );
}
