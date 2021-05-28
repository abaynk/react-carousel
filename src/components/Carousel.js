import React, { useState } from "react";
import { useRef } from "react";
import LeftArrow from "../assets/icons/left-arrow.svg";
import RightArrow from "../assets/icons/right-arrow.svg";
import "../assets/styles/Carousel.css";
import Thumbnails from "./Thumbnails";

const Carousel = ({ Data }) => {
  const [activeIndex, setActiveIndex] = useState(0);
  const setActive = (num) => {
    setActiveIndex(num);
  };
  const length = Data.length - 1;
  const SlideLeft = () => {
    activeIndex !== 0
      ? setActiveIndex(activeIndex - 1)
      : setActiveIndex(length);
  };
  const SlideRight = () => {
    activeIndex !== length
      ? setActiveIndex(activeIndex + 1)
      : setActiveIndex(0);
  };
  const [initPos, setInitPos] = useState(null);
  const [currPos, setCurrPos] = useState(null);

  const touchStart = (e) => {
    setInitPos(parseInt(e.touches[0].clientX));
  };
  const touchMove = (e) => {
    setCurrPos(parseInt(e.touches[0].clientX));
  };
  const touchEnd = () => {
    const diff = currPos - initPos;
    if (diff < -1) {
      SlideRight();
    }
    if (diff > 1) {
      SlideLeft();
    }
  };
  return (
    <div className="root">
      <div className="slider">
        <img
          onClick={SlideLeft}
          className="button left"
          role="button"
          src={LeftArrow}
          alt="left"
        />
        {Data.map((image, index) => {
          return (
            <div
              className={index === activeIndex ? "frame current" : "frame"}
              onTouchStart={touchStart}
              onTouchMove={touchMove}
              onTouchEnd={touchEnd}
            >
              {activeIndex === index && (
                <img src={image.image} alt={image.image} className="image" />
              )}
            </div>
          );
        })}
        <img
          onClick={SlideRight}
          className="button right"
          role="button"
          src={RightArrow}
          alt="right"
        />
      </div>
      <Thumbnails data={Data} active={activeIndex} setActive={setActive} />
    </div>
  );
};

export default Carousel;
