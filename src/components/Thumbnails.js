import React from "react";
import { useEffect } from "react";
import "../assets/styles/Thumbnails.css";

const Thumbnails = ({ data, active, setActive }) => {
  useEffect(() => {
    document.querySelector(".container").scrollTo(active * 100, 0);
  }, [active]);
  return (
    <div className="container">
      <div className="photobanner">
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
    </div>
  );
};

export default Thumbnails;
