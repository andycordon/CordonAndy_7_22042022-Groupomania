import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "../../pages/Home";
import Profil from "../../pages/Profil";
import Login from "../../pages/Login";
import ConditionsGenerales from "../../pages/ConditionsGenerales";

const index = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Login />} />
        <Route path="/home" element={<Home />} />
        <Route path="/profil" element={<Profil />} />
        <Route path="/conditions" element={<ConditionsGenerales />} />
        <Route path="*" element={<Login replace to="/" />} />
      </Routes>
    </BrowserRouter>
  );
};

export default index;
