import React from "react";
import { useSelector } from "react-redux";
import { NavLink } from "react-router-dom";
import Logout from "./Log/Logout";

const Navbar = () => {
  const userData = useSelector((state) => state.userReducer);

  return (
    <nav>
      <div className="nav-container">
        <div className="logo">
          <NavLink to="/home">
            <div className="logo">
              <img
                src="./img/icon.png"
                alt="icon pour aller à la page d'accueil"
              />
              <h3>Groupomania</h3>
            </div>
          </NavLink>
        </div>
        <ul>
          <li>
            <h4>Bonjour {userData.pseudo}</h4>
          </li>
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
