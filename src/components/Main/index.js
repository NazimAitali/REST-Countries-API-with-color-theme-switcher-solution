import React, { useEffect, useState } from "react";
import BottoMain from "./BottoMain";
import { ToastContainer } from "react-toastify";
import { fetchData } from "../../functions";
import "react-toastify/dist/ReactToastify.css";
import "./style.scss";
import TopMain from "./TopMain";
import axios from "axios";
const Main = ({ darkMode }) => {
  const [data, setData] = useState({
    all: null,
    byCountry: null,
    region: null,
    filter: false,
    loading: true,
    error: null,
  });
  const [Name, setName] = useState(null);

  useEffect(() => {
    fetchData(axios, setData);
  }, []);

  return (
    <div
      className={
        darkMode ? "Main-container" : "Main-container Main-container-dark"
      }
    >
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
      <TopMain
        Name={Name}
        setName={setName}
        data={data}
        setData={setData}
        darkMode={darkMode}
      />
      <BottoMain data={data} setData={setData} darkMode={darkMode} />
    </div>
  );
};

export default Main;
