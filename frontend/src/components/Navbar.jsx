import React from "react";
import { NavLink } from "react-router-dom";
import Logout from "./Log/Logout";

const Navbar = () => {
  return (
    <nav>
      <div className="nav-container">
        <div className="logo">
          <NavLink to="/home">
            <div className="logo">
              <img
                src="./img/icon.png"
                alt="icon groupomania pour aller à la page d'accueil"
              />
              <h1>Groupomania</h1>
            </div>
          </NavLink>
        </div>
        <ul>
          <li>
            <NavLink to="/home">
              <div>
                <img
                  src="./img/icons/house-solid.svg"
                  alt="icon pour aller à la page d'accueil"
                />
              </div>
            </NavLink>
          </li>
          <li>
            <NavLink to="/profil">
              <img
                src="./img/icons/user-gear-solid.svg"
                alt="icon pour aller à la page profil"
              />
            </NavLink>
          </li>
          <Logout />
        </ul>
      </div>
    </nav>
  );
};

export default Navbar;
