import React from "react";
import "./Highlights.css";
import ImageCard from "../ImageCard/ImageCard";
import { useSelector } from "react-redux";
import { Images_Data } from "../../data";

const Highlights = () => {
  const submenuSelected = useSelector((state) => state.submenu.submenuSelected);

  // Show only the selected  category of images in highlights section
  const Images = Images_Data[submenuSelected];

  return (
    <div className="highlights">
      <h1>Highlights</h1>
      <div className="hightlights-images">
        {Images.map((image, index) => (
          <ImageCard key={image} image={image} day={index + 1} />
        ))}
      </div>
    </div>
  );
};

export default Highlights;
