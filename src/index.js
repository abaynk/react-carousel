import ReactDOM from "react-dom";
import React from "react";
import Carousel from "./components/Carousel";
import { Data } from "./components/Data.js";

const App = () => {
  return (
    <div>
      <Carousel Data={Data} />
    </div>
  );
};
ReactDOM.render(<App />, document.getElementById("app"));
