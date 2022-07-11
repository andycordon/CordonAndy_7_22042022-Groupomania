import React from "react";
// import { useSelector } from "react-redux";
import { NavLink } from "react-router-dom";
//import Logout from "./Logout";

export default function Navbar() {
  //   const uid = useContext(UidContext);
  //   const userData = useSelector((state) => state.userReducer);

  return (
    <nav>
      <NavLink exact to="/">
        DECONNEXION
        {/* <Logout /> */}
      </NavLink>
      {/* <h5>Bienvenue {userData.pseudo}</h5> */}
    </nav>
  );
}
