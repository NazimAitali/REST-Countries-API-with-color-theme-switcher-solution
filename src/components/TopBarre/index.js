import React from "react";
import "./style.scss";
import { RiMoonLine, RiMoonFill } from "react-icons/ri";
import { changeStateFunc } from "../../functions";
const TopBarre = ({ darkMode, setdarkMode }) => {
  return (
    <div
      className={
        darkMode
          ? "Top-barre-container"
          : "Top-barre-container Top-barre-container-dark"
      }
    >
      <div className="Title-container">
        <div className="Title-content">
          {" "}
          <div className="Title" onClick={() => window.location.reload(false)}>
            Where in the world?
          </div>
        </div>
      </div>
      <div className="Switch-container">
        <div className="Switch-content">
          <div className="Switch-icon">
            {darkMode ? (
              <RiMoonLine onClick={() => changeStateFunc(setdarkMode, false)} />
            ) : (
              <RiMoonFill
                className="Dark-icon"
                onClick={() => changeStateFunc(setdarkMode, true)}
              />
            )}
          </div>
          <div className="Switch-title">Dark Mode</div>
        </div>
      </div>
    </div>
  );
};

export default TopBarre;
