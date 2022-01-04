import React from "react";
import "./style.scss";
import { BsArrowLeft } from "react-icons/bs";
import { prevStateFunc } from "../../../functions";
import Research from "./Research";
import Filter from "./Filter";

const TopMain = ({ setName, data, Name, setData, darkMode }) => {
  return (
    <div className="Top-main-container">
      {data.byCountry ? (
        data.byCountry.status !== 404 ? (
          <div className="Botton-container">
            <button
              className={darkMode ? "Button" : "Button Button-dark"}
              onClick={() => {
                prevStateFunc(setData, "byCountry", null);
                prevStateFunc(setData, "region", null);
              }}
            >
              <div>Back</div>
              <BsArrowLeft />
            </button>
          </div>
        ) : (
          <>
            {" "}
            <Research
              Name={Name}
              setName={setName}
              setData={setData}
              darkMode={darkMode}
            />
            <Filter setData={setData} darkMode={darkMode} data={data} />
          </>
        )
      ) : (
        <>
          {" "}
          <Research
            Name={Name}
            data={data}
            setName={setName}
            setData={setData}
            darkMode={darkMode}
          />
          <Filter setData={setData} darkMode={darkMode} data={data} />
        </>
      )}
    </div>
  );
};

export default TopMain;
