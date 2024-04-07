import React, {lazy, Suspense} from "react";
import {Route, Routes} from "react-router-dom";
import Sidebar from "../../components/Sidebar";

const User = lazy(() => import("../User"));
const Battle = lazy(() => import("../Battle"));
const Pokedex = lazy(() => import("../Pokedex"));
const Shop = lazy(() => import("../Shop"));
const Friends = lazy(() => import("../Friends"));

const Client = React.memo(() => {
  return (
    <div className="client">
      <Sidebar />
      <Suspense fallback={<h1>Loading...</h1>}>
        <Routes>
          <Route path="/" element={<User />} />
          <Route path="/friends" element={<Friends />} />
          <Route path="/battle" element={<Battle />} />
          <Route path="/pokedex" element={<Pokedex />} />
          <Route path="/shop" element={<Shop />} />
        </Routes>
      </Suspense>
    </div>
  );
});

export default Client;
