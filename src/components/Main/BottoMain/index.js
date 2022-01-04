import React from "react";
import Box from "./Box";
import BoxCountry from "./BoxCountry";
import { ToastContainer } from "react-toastify";
import Empty from "../../../assets/empty.svg";
import "./style.scss";
const BottoMain = ({ data, darkMode, setData }) => {
  return (
    <div className="Bottom-main-container">
      {data.byCountry ? (
        data.byCountry[0] ? (
          <BoxCountry data={data} setData={setData} darkMode={darkMode} />
        ) : (
          <>
            <div className="Nodata">
              <img src={Empty} alt="No Data" />
              <div>No data please back</div>
            </div>
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
          </>
        )
      ) : (
        <div className="Box">
          <Box
            data={data}
            byCountry={data}
            setData={setData}
            darkMode={darkMode}
          />
        </div>
      )}
    </div>
  );
};

export default BottoMain;
