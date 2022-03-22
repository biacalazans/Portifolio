import { BrowserRouter, HashRouter } from "react-router-dom";
import React from "react";
import AppRoutes from "./routes";

function App() {
  return (
    <HashRouter>
      <AppRoutes />
    </HashRouter>
  );
}

export default App;
