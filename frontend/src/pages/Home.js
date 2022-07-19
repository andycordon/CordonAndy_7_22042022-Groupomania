import React from "react";

import NewPostForm from "../components/Post/NewPostForm";
import Thread from "../components/Thread";

const Home = () => {
  return (
    <div className="home">
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
