import React from "react";

const Pokedex = React.memo(() => {
  return (
    <section className="pokedex-container">
      <header className="pokedex-header"></header>
      <div className="search-container"></div>
      <div className="filter-container"></div>
      <div className="middle">hatdog</div>
      <div className="side"></div>
    </section>
  );
});

export default Pokedex;
