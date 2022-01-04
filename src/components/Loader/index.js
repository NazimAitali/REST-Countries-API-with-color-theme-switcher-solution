import React from "react";
import "./style.scss";
import { FcGlobe } from "react-icons/fc";
const Loader = () => {
  return (
    <div className="Loder">
      <FcGlobe />
      <div>Loading ...</div>
    </div>
  );
};

export default Loader;
