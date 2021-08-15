import React, { useState } from "react";
import NavBar from "../components/NavBar";
import { Sidebar } from "../components/Sidebar";

export const Home = () => {
  const [isOpen, setisOpen] = useState(false);

  const toggle = () => {
    setisOpen(!isOpen);
  };

  return (
    <div>
      <Sidebar isOpen={isOpen} toggle={toggle} />
      <NavBar toggle={toggle} />
    </div>
  );
};
