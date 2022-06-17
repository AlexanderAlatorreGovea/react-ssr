import React from "react";
import { Route, Routes } from "react-router";
import { HomePage } from "./pages/HomePage";

const App = (props) => (
  <div>
    Home
    <Routes>
      <Route path="/" element={<HomePage {...props} />} />
    </Routes>
  </div>
);

export { App };
