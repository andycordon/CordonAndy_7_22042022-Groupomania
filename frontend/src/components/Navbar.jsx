import React from "react";
//import { useSelector } from "react-redux";
import { NavLink } from "react-router-dom";
import Logout from "./Logout";

export default function Navbar() {
  // const uid = useContext(UidContext);
  //const userData = useSelector((state) => state.userReducer);

  return (
    <nav>
      <div className="nav-container">
        <div className="logo">
          <NavLink exact to="/Home">
            <div className="logo2">
              <img
                className="logo-navbar"
                src="./img/icon.png"
                alt="Logo du site Groupomania"
              />
              <h3>Groupomania</h3>
            </div>
          </NavLink>
        </div>

        <ul>
          <li>Mon Profil</li>
          <li className="welcome">
            <NavLink exact to="/profil">
              <h5>Bienvenue userData.firstName</h5>
            </NavLink>
          </li>
          <Logout />
        </ul>
      </div>
    </nav>
  );
}
