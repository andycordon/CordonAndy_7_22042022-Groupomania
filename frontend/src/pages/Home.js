import React from "react";
import Navbar from "../components/Navbar";
import { useSelector } from "react-redux";
import NewPostForm from "../components/Post/NewPostForm";
import Thread from "../components/Thread";

const Home = () => {
  const userData = useSelector((state) => state.userReducer);
  return (
    <div className="home">
      <Navbar />
      <h1>Bonjour {userData.pseudo} !</h1>
      <div className="main">
        <div className="home-header">
          <NewPostForm />
        </div>
        <Thread />
      </div>
      <div className="right-side">
        <div className="right-side-container"></div>
      </div>
    </div>
  );
};

export default Home;
