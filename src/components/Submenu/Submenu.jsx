import React from "react";
import "./Submenu.css";
import { useSelector } from "react-redux";
import SubmenuItem from "../SubmenuItem/SubmenuItem";

const Submenu = () => {
  const submenuData = useSelector((state) => state.submenu.submenuList);
  const submenuSelected = useSelector((state) => state.submenu.submenuSelected);
  const menuSelected = useSelector((state) => state.menu.menuSelected);

  // Show  submenu based on the menu selected from header
  const subMenu = submenuData[menuSelected];

  return (
    <div className="submenu">
      {/* display the submenu */}
      <div className="submenu-wrapper">
        {subMenu.map((item) => (
          <SubmenuItem
            key={item}
            title={item}
            submenuSelected={submenuSelected}
            isSelected={submenuSelected === item}
          />
        ))}
      </div>
      {submenuSelected === null && (
        <h3 className="submenu-heading">Select a sub category</h3>
      )}
    </div>
  );
};

export default Submenu;
