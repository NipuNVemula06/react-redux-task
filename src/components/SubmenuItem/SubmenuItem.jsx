import React from "react";
import "./SubmenuItem.css";
import { useDispatch } from "react-redux";
import { setSubmenuSelected } from "../../redux/reducers/submenuSlice";

const SubmenuItem = ({ title, isSelected, submenuSelected }) => {
  const dispatch = useDispatch();

  const handleClick = (submenu) => {
    dispatch(setSubmenuSelected(submenu)); //update the state when user selects a submenu
    if (submenuSelected === submenu) {
      dispatch(setSubmenuSelected(null)); // update the state to null when user selects same item
    }
  };
  return (
    <span
      onClick={() => handleClick(title)}
      className={`submenu-btn ${isSelected && "submenu-active"}`}
    >
      {title}
    </span>
  );
};

export default SubmenuItem;
