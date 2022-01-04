import React from "react";
import { ToastContainer, toast } from "react-toastify";
import { researchCountry, changeStateFunc } from "../../../../functions";
import "react-toastify/dist/ReactToastify.css";
import { HiOutlineSearch } from "react-icons/hi";
const Research = ({ Name, setName, setData, darkMode, data }) => {
  return (
    <div className="Research-container">
      <div className="Research">
        <ToastContainer
          position="top-center"
          autoClose={5000}
          hideProgressBar={false}
          newestOnTop={false}
          closeOnClick
          rtl={false}
          pauseOnFocusLoss
          draggable
          pauseOnHover
        />
        <div className="Research-content">
          <div
            className={
              darkMode ? "Research-icon" : "Research-icon Research-icon-dark"
            }
            onClick={() => researchCountry(Name, data, toast, setData)}
          >
            <HiOutlineSearch />
          </div>{" "}
          <input
            type="search"
            placeholder="Search for a country"
            className={
              darkMode ? "Research-input" : "Research-input Research-input-dark"
            }
            onChange={(e) => changeStateFunc(setName, e.target.value)}
          />
        </div>
      </div>
    </div>
  );
};

export default Research;
