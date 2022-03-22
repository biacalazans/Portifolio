import { Routes, Route } from "react-router-dom";
import React from "react";
import { Home } from "./Pages/main/index";
import Productions from "./Pages/productions";

const AppRoutes = () => {
  return (
    <Routes>
      <Route element={<Home />} path="https://biacalazans.github.io"></Route>
      <Route
        element={<Productions />}
        path="https://biacalazans.github.io/producoes"
      ></Route>
    </Routes>
  );
};

export default AppRoutes;
