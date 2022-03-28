import { BrowserRouter, HashRouter } from "react-router-dom";
import React from "react";
import AppRoutes from "./routes";
import { Home } from "./Pages/main/index";

function App() {
  return (
    // <BrowserRouter>
    //   <AppRoutes />
    // </BrowserRouter>
    <Home />
  );
}

export default App;
