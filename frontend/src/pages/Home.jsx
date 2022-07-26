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
        <Navbar />
      </div>
      <div className="home-container">
        <div className="user-container">
          <h2>Bonjour {userData.pseudo}</h2>
          <img
            src={userData.picture}
            alt="Img de profil de l'utilisateur de groupomania"
          />
        </div>
        <NewPostForm />
      </div>
      <Thread />
    </div>
  );
};

export default Home;
