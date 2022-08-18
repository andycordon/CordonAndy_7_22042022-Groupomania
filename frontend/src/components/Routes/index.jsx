//ROUTES INDEX

import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "../../pages/Home";
import Profil from "../../pages/Profil";
import Login from "../../pages/Login";
import ConditionsGenerales from "../../pages/ConditionsGenerales";
import Register from "../../pages/Register";

const index = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Login />} />{" "}
        {/*racine de l'application, page connexion*/}
        <Route path="/register" element={<Register />} />{" "}
        {/*page d'inscription*/}
        <Route path="/home" element={<Home />} />{" "}
        {/*page d'accueil, fil d'actualité*/}
        <Route path="/profil" element={<Profil />} />{" "}
        {/*page profil pour changer sa photo d'utilisateur*/}
        <Route path="/conditions" element={<ConditionsGenerales />} />{" "}
        {/*page des conditions generales fictives*/}
        <Route path="*" element={<Login replace to="/" />} />{" "}
        {/*si dans l'url il est marquer toute autre chose que les routes connue, on retourne à la racine de l'app, la page de connexion*/}
      </Routes>
    </BrowserRouter>
  );
};

export default index;
