//HOME

import React from "react";
import Navbar from "../components/Navbar";
import { useSelector } from "react-redux";
import NewPostForm from "../components/Post/NewPostForm";
import Thread from "../components/Thread";

const Home = () => {
  const userData = useSelector((state) => state.userReducer);
  return (
    <div>
      <div>
        <Navbar /> {/*Barre de menu*/}
      </div>
      <div className="home-container">
        <div className="user-container">
          <h2>Bienvenue {userData.pseudo}</h2>{" "}
          {/*récupération du pseudo de user*/}
          <img
            src={userData.picture}
            alt="Img de profil de l'utilisateur de groupomania"
          />{" "}
          {/*récupération de la photo de profil de user*/}
        </div>
        <NewPostForm /> {/*formulaire de création de post*/}
      </div>
      <Thread /> {/*fil d'actualité*/}
    </div>
  );
};

export default Home;
