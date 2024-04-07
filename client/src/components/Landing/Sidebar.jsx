import React from "react";
import {GiHamburgerMenu} from "react-icons/gi";
import {BsFacebook} from "react-icons/bs";
import {FaYoutube, FaInstagram, FaFacebook} from "react-icons/fa";

const Sidebar = React.memo(() => {
  return (
    <aside className="landing-sidebar">
      <div className="top">
        <span>
          <GiHamburgerMenu />
        </span>
      </div>
      <div className="middle">
        <span>
          <FaFacebook />
        </span>
        <span>
          <FaYoutube />
        </span>
        <span>
          <FaInstagram />
        </span>
      </div>
    </aside>
  );
});

export default Sidebar;
