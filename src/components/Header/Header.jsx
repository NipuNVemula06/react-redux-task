import React from "react";
import "./Header.css";
import MenuItem from "../MenuItem/MenuItem";
import { useSelector } from "react-redux";

const Header = () => {
  const headerData = useSelector((state) => state.menu.menuList);
  const selected = useSelector((state) => state.menu.menuSelected);

  return (
    <header>
      <div className="header-wrapper">
        {headerData.map((item) => (
          <MenuItem
            key={item.id}
            title={item.title}
            icon={item.icon}
            menuSelected={selected}
            isSelected={selected === item.title}
          />
        ))}
      </div>
      {selected === null && <h3 className="header-heading">Select a Sport</h3>}
    </header>
  );
};

export default Header;
