import React from "react";
import "./ImageCard.css";
import { useSelector } from "react-redux";

const ImageCard = ({ image, day }) => {
  const submenuSelected = useSelector((state) => state.submenu.submenuSelected);
  return (
    <div className="card">
      <div className="card-imagecontainer">
        <img loading="lazy" src={image} alt="" className="card-image" />
      </div>
      <div className="card-content">
        <div className="card-content-top">
          <span className="card-heading">
            Day {day} of {submenuSelected}
          </span>
          <p className="card-time">5:12</p>
        </div>
        <div className="card-content-bottom">
          <span className="card-button">Heats</span>
          <span className="card-button">Hightlight</span>
        </div>
      </div>
    </div>
  );
};

export default ImageCard;
