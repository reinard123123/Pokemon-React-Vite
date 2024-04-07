import React, {lazy, Suspense} from "react";
import Client from "./pages/util/Client";
import {Route, Routes} from "react-router-dom";

const LandingPage = lazy(() => import("./pages/LandingPage"));
const NotFound = lazy(() => import("./pages/NotFound"));

const App = React.memo(() => {
  return (
    <div className="container">
      <Routes>
        <Route path="/" element={<LandingPage />} />
        <Route path="/client/*" element={<Client />} />
        <Route path="*" element={<NotFound />} />
      </Routes>
    </div>
  );
});

export default App;
