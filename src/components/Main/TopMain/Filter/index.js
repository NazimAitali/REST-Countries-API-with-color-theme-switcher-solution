import React from "react";
import { IoIosArrowDown } from "react-icons/io";
import { prevStateFunc } from "../../../../functions";
const Filter = ({ darkMode, setData, data }) => {
  const REGION = ["Africa", "Americas", "Asia", "Europe", "Oceania"];
  return (
    <div className="Filter-container">
      <div className="Filter-content">
        <div className="Filter">
          <div
            className={
              darkMode ? "Filter-title" : "Filter-title Filter-title-dark"
            }
            onClick={() =>
              data.filter
                ? prevStateFunc(setData, "filter", false)
                : prevStateFunc(setData, "filter", true)
            }
          >
            Filter by Region
          </div>
          <div className="Select-arrow">
            {" "}
            <IoIosArrowDown
              onClick={() =>
                data.filter
                  ? prevStateFunc(setData, "filter", false)
                  : prevStateFunc(setData, "filter", true)
              }
            />
          </div>
          <ul
            className={
              darkMode ? "Filter-liste " : "Filter-liste Filter-liste-dark"
            }
            style={data.filter ? { display: "flex" } : { display: "none" }}
          >
            <div className="Liste">
              {REGION.map((item, i) => (
                <li
                  key={i}
                  onClick={() => {
                    prevStateFunc(setData, "region", item);
                    prevStateFunc(setData, "filter", false);
                  }}
                >
                  {item}
                </li>
              ))}
            </div>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default Filter;
