import React from "react";
import "./MenuItem.css";
import { useDispatch } from "react-redux";
import { setMenuSelected } from "../../redux/reducers/menuSlice";
import { setSubmenuSelected } from "../../redux/reducers/submenuSlice";

const MenuItem = ({ title, icon, isSelected, menuSelected }) => {
  const dispatch = useDispatch();

  const handleClick = (item) => {
    dispatch(setMenuSelected(item)); // update the state when menu is selected
    dispatch(setSubmenuSelected(null)); // set submenu state to null when user changes menu
    if (menuSelected === item) {
      dispatch(setMenuSelected(null)); // update menu state when clicked on same menu item
    }
  };
  return (
    <div
      title={title}
      onClick={() => handleClick(title)}
      className={`header-link ${isSelected && "header-active"}`}
    >
      <span className="header-icon">
        <i class={`fa-solid fa-${icon}`}></i>
      </span>
      <span className="header-title">{title}</span>
    </div>
  );
};

export default MenuItem;
