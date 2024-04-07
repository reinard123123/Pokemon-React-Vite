import React from "react";
import Navbar from "../components/Landing/Navbar";
import Sidebar from "../components/Landing/Sidebar";
import LandingPokemon from "/assets/landing-pokemon.jpg";

import {IconContext} from "react-icons/lib";
const LandingPage = React.memo(() => {
  return (
    <IconContext.Provider value={{className: "icon"}}>
      <section className="landing-page-container">
        <Sidebar />
        <div className="landing-content">
          <Navbar />
          <div className="landing-img-container">
            <img src={LandingPokemon} alt="landing-pokemon" />
            <div className="overlay"></div>
            <div className="text">
              <h2>PokeRivals</h2>
              <button>PLAY NOW</button>
            </div>
          </div>
        </div>
      </section>
    </IconContext.Provider>
  );
});

export default LandingPage;
