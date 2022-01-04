import React, { useState } from "react";
import "../App.scss";
import TopBarre from "../components/TopBarre";
import Main from "../components/Main";

const Screen = () => {
  const [darkMode, setdarkMode] = useState(true);

  return (
    <div className="Screen-container">
      <TopBarre darkMode={darkMode} setdarkMode={setdarkMode} />
      <Main darkMode={darkMode} />
    </div>
  );
};

export default Screen;
