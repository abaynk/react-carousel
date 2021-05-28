import React from "react";
import { useEffect } from "react";
import "../assets/styles/Thumbnails.css";

const Thumbnails = ({ data, active, setActive }) => {
  useEffect(() => {
    document.querySelector(".container").scrollTo(active * 90, 0);
  }, [active]);
  return (
    <div className="container">
      {data.map((image, index) => {
        return (
          <img
            src={image.image}
            alt="photo"
            className={active === index ? "thumb active" : "thumb"}
            onClick={() => setActive(index)}
          />
        );
      })}
    </div>
  );
};

export default Thumbnails;
