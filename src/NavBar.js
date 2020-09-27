import React, { useEffect, useState } from "react";
import "./NavBar.css";

function NavBar() {
  const [show, handleShow] = useState(false);

  useEffect(() => {
    window.addEventListener("scroll", () => {
      //100px down and then it shows
      if (window.scrollY > 100) {
        handleShow(true);
      } else handleShow(false);
    });
    return () => {
      window.removeEventListener("scroll");
    };
  }, []);

  return (
    <div className={`navBar ${show && "navBar__black"}`}>
      <img
        className="navBar__logo"
        src={
          "https://upload.wikimedia.org/wikipedia/commons/thumb/0/08/Netflix_2015_logo.svg/1920px-Netflix_2015_logo.svg.png"
        }
        alt="Netflix Logo"
      />
      <img
        className="navBar__avatar"
        src="https://i.pinimg.com/originals/0d/dc/ca/0ddccae723d85a703b798a5e682c23c1.png"
        alt="User Avatar"
      />
    </div>
  );
}

export default NavBar;
