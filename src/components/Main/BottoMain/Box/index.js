import React from "react";
import Loader from "../../../Loader";
import noImage from "../../../../assets/no-image.png";
import { researchCountry } from "../../../../functions";
import { toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import "./style.scss";
const Box = ({ data, darkMode, setData }) => {
  return (
    <>
      {data.loading ? (
        <Loader />
      ) : data.error ? (
        data.error
      ) : data.all ? (
        data.region ? (
          data.all
            .filter((item) => item.region === data.region)
            .map((item, i) => (
              <div
                className={
                  darkMode
                    ? "Box-container"
                    : "Box-container Box-container-dark"
                }
                key={i}
                onClick={() => researchCountry(item.name, data, toast, setData)}
              >
                <div className="Box-content">
                  <div className="Box-image">
                    {item.flag ? (
                      <>
                        <img src={item.flag} alt="flag" />
                      </>
                    ) : (
                      <>
                        <div className="Box-image-available">
                          Flag is not available
                        </div>
                        <img src={noImage} alt="no-flag" />
                      </>
                    )}
                  </div>
                  <div className="Box-details">
                    <div className="Box-title-content">
                      <div className="Box-title">
                        <h2 className="Title-data">
                          {item.name.substring(0, 18)}
                        </h2>
                      </div>
                    </div>
                    <div className="Box-details-content">
                      <div className="Population-content">
                        <div className="Population">
                          <div className="Details-title">Population:</div>
                          <div className="Details-data">
                            {item.population.toLocaleString("en")}
                          </div>
                        </div>
                      </div>
                      <div className="Region-content">
                        <div className="Region">
                          <div className="Details-title">Region:</div>
                          <div className="Details-data">{item.region}</div>
                        </div>
                      </div>
                      <div className="Capital-content">
                        <div className="Capital">
                          <div className="Details-title">Capital:</div>
                          <div className="Details-data">{item.capital}</div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            ))
        ) : (
          data.all.map((item, i) => (
            <div
              className={
                darkMode ? "Box-container" : "Box-container Box-container-dark"
              }
              key={i}
              onClick={() => researchCountry(item.name, data, toast, setData)}
            >
              <div className="Box-content">
                <div className="Box-image">
                  {item.flag ? (
                    <>
                      <img src={item.flag} alt="flag" />
                    </>
                  ) : (
                    <>
                      <div className="Box-image-available">
                        Flag is not available
                      </div>
                      <img src={noImage} alt="no-flag" />
                    </>
                  )}
                </div>

                <div className="Box-details">
                  <div className="Box-title-content">
                    <div className="Box-title">
                      <h2 className="Title-data">
                        {item.name.substring(0, 18)}
                      </h2>
                    </div>
                  </div>
                  <div className="Box-details-content">
                    <div className="Population-content">
                      <div className="Population">
                        <div className="Details-title">Population:</div>
                        <div className="Details-data">
                          {item.population.toLocaleString("en")}
                        </div>
                      </div>
                    </div>
                    <div className="Region-content">
                      <div className="Region">
                        <div className="Details-title">Region:</div>
                        <div className="Details-data">{item.region}</div>
                      </div>
                    </div>
                    <div className="Capital-content">
                      <div className="Capital">
                        <div className="Details-title">Capital:</div>
                        <div className="Details-data">{item.capital}</div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          ))
        )
      ) : (
        <div>No data</div>
      )}
    </>
  );
};

export default Box;
