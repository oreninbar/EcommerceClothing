import React, { useState, useEffect } from "react";
import "../sass/components/slider.scss";
const sliderItems = require("../data").sliderItems;

export const Slider = () => {
  const [sliderPosition, setSliderPosition] = useState(1);
  const [img, setImage] = useState(sliderItems[sliderPosition].img);
  const [title, setTitle] = useState(sliderItems[sliderPosition].title);
  const [description, setDes] = useState(sliderItems[sliderPosition].desc);

  const changeSlide = async (arrow) => {
    console.log(sliderPosition);
    if (arrow === "start") {
      if (sliderPosition - 1 < 0) {
        setSliderPosition(2);
      } else setSliderPosition(sliderPosition - 1);
    } else {
      if (sliderPosition + 1 > 2) setSliderPosition(0);
      else setSliderPosition(sliderPosition + 1);
    }
  };

  useEffect(() => {
    setImage(sliderItems[sliderPosition].img);
    setTitle(sliderItems[sliderPosition].title);
    setDes(sliderItems[sliderPosition].desc);
  }, [sliderPosition]);
  
  return (
    <div className="slider-contianer">
      <div className="arrow start" onClick={() => changeSlide("start")}>
        <i className="fas fa-angle-left"></i>
      </div>
      <div className="image-wrapper">
        <img alt="something" className="slider-pic" src={img} />
        <div className="slider-content">
          <h1 className="slider-title">{title}</h1>
          <div className="slider-description">{description}</div>
          <button className="slider-btn">Enter</button>
        </div>
      </div>
      <div className="arrow end" onClick={() => changeSlide("end")}>
        <i className="fas fa-angle-right"></i>
      </div>
    </div>
  );
};
