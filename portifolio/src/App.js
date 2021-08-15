import { BrowserRouter } from "react-router-dom";
import React from "react";

import { Home } from "./Pages/index";

function App() {
  return (
    <BrowserRouter>
      <Home />
    </BrowserRouter>
  );
}

export default App;
