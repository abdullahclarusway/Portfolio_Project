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
            "Frontend Development",
            "Mobile App Development",
            "React Development",
            "Web Development",
            "MERN Stack",
          ]}
          typeSpeed={60}
          backSpeed={70}
          loop
        />
        <a className="btn-main-offer" href="mailto:ab.bey@web.de">
          contact me
        </a>
      </div>
    </div>
  );
};

export default Header;
