import React from "react";
import {useNavigate, Link} from "react-router-dom";

const links = [
  {
    path: "/client",
    linkName: "Home",
  },
  {
    path: "/client/battle",
    linkName: "Battle",
  },
  {
    path: "/client/pokedex",
    linkName: "Pokedex",
  },
  {
    path: "/client/shop",
    linkName: "Shop",
  },
];

const Navbar = React.memo(() => {
  return (
    <nav className="landing-navbar">
      {links.map((item, index) => {
        const {path, linkName} = item;
        return (
          <Link key={index} to={path}>
            {linkName}
          </Link>
        );
      })}
    </nav>
  );
});

export default Navbar;
