import React from "react";

function Home() {
  return (
    <div className="home">
      <div className="home__left">
        <div className="home__message">
          <p className="home__p">Hello I`m </p>
          <h1 className="home__h1"> Javascript</h1>
        </div>
      </div>
      <div className="home__right">
        <div className="home__message border--none">
          <p className="home__p display--none">Hello I`am</p>
          <h1 className="home__h1 color--dark ">Developer</h1>
        </div>
      </div>
    </div>
  );
}

export default Home;
