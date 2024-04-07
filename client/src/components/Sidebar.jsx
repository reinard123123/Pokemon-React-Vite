import React from "react";
import {Link, useNavigate} from "react-router-dom";
import {BsPeopleFill} from "react-icons/bs";
import {TbPokeball} from "react-icons/tb";
import {FaShoppingCart, FaUserAlt, FaHome} from "react-icons/fa";
import {RiSwordFill} from "react-icons/ri";
import PokemonLogo from "/assets/pokemon-logo.png";

const links = [
  {
    path: "/client",
    linkName: "User",
    icon: <FaUserAlt />,
  },
  {
    path: "/client/friends",
    linkName: "Friends",
    icon: <BsPeopleFill />,
  },
  {
    path: "/client/battle",
    linkName: "Battle",
    icon: <RiSwordFill />,
  },
  {
    path: "/client/pokedex",
    linkName: "Pokedex",
    icon: <TbPokeball />,
  },
  {
    path: "/client/shop",
    linkName: "Shop",
    icon: <FaShoppingCart />,
  },
];

const Sidebar = React.memo(() => {
  const navigate = useNavigate();
  return (
    <aside className="sidebar-client">
      <div className="logo-container">
        <img src={PokemonLogo} alt="Pokemon Logo" />
      </div>
      <div className="sidebar-links-container">
        {links.map((link, index) => {
          const {linkName, path, icon} = link;
          return (
            <div
              onClick={() => {
                navigate(path);
              }}
              className="link-container"
              key={index}
            >
              <span>{icon}</span>
              <p>{linkName}</p>
            </div>
          );
        })}
      </div>
    </aside>
  );
});

export default Sidebar;
