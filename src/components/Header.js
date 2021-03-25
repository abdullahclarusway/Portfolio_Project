import React from "react";
import Typed from "react-typed";

const Header = () => {
  return (
    <div className="header-wraper">
      <div className="main-info">
        <h1>Hello, I am Abdullah</h1>
        <Typed
          className="typed-text"
          strings={[
            "Web Development",
            "Web Design",
            "Mobile App Development",
            "MERN Stack",
          ]}
          typeSpeed={40}
          backSpeed={50}
          loop
        />
        <a className="btn-main-offer" href="#">
          contact me
        </a>
      </div>
    </div>
  );
};

export default Header;
