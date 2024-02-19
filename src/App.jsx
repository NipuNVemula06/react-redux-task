import React from "react";
import "./App.css";
import Header from "./components/Header/Header";
import Submenu from "./components/Submenu/Submenu";
import Highlights from "./components/Highlights/Highlights";
import { useSelector } from "react-redux";

const App = () => {
  const menuSelected = useSelector((state) => state.menu.menuSelected);
  const submenuSelected = useSelector((state) => state.submenu.submenuSelected);
  return (
    <div className="container">
      <Header />
      {menuSelected && <Submenu />}
      {submenuSelected && <Highlights />}
    </div>
  );
};

export default App;
