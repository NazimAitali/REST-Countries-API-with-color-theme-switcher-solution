import React from "react";
import "./style.scss";
import { AiFillWarning } from "react-icons/ai";
import { alphaToName, researchCountry } from "../../../../functions";
import { toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
const BoxCountry = ({ data, darkMode, setData }) => {
  return (
    <>
      {data.byCountry.map((item, i) => (
        <div key={i} className="Box-Country-container">
          <div className="Box-Country-image-container">
            <div className="Box-Country-image-content">
              <div className="Box-Country-image">
                <img src={item.flags.png} alt="flag" />
              </div>
            </div>
          </div>
          <div className="Box-Country-data-container">
            <div className="Box-Country-data-content">
              <div className="Box-Country-title-container">
                <div className="Box-Country-title-content">
                  {item.name ? (
                    item.name
                  ) : (
                    <div className="Box-Country-no-data">
                      No data <AiFillWarning />
                    </div>
                  )}
                </div>
              </div>
              <div className="Box-Country-details-container">
                <div className="Box-Country-details-top-container">
                  <div className="Box-Country-details-top-content">
                    <div className="Box-Country-details-left-container">
                      <div className="Box-Country-details-content">
                        <div className="Box-Country-details">
                          <div className="Box-Country-details-name">
                            Native Name:
                          </div>
                          <div className="Box-Country-details-value">
                            {item.nativeName ? (
                              item.nativeName
                            ) : (
                              <div className="Box-Country-no-data">
                                No data <AiFillWarning />
                              </div>
                            )}
                          </div>
                        </div>
                        <div className="Box-Country-details">
                          <div className="Box-Country-details-name">
                            Population:
                          </div>
                          <div className="Box-Country-details-value">
                            {item.population ? (
                              item.population
                            ) : (
                              <div className="Box-Country-no-data">
                                No data <AiFillWarning />
                              </div>
                            )}
                          </div>
                        </div>
                        <div className="Box-Country-details">
                          <div className="Box-Country-details-name">
                            Region:
                          </div>
                          <div className="Box-Country-details-value">
                            {item.region ? (
                              item.region
                            ) : (
                              <div className="Box-Country-no-data">
                                No data <AiFillWarning />
                              </div>
                            )}
                          </div>
                        </div>
                        <div className="Box-Country-details">
                          <div className="Box-Country-details-name">
                            Sub Region:
                          </div>
                          <div className="Box-Country-details-value">
                            {item.subregion ? (
                              item.subregion
                            ) : (
                              <div className="Box-Country-no-data">
                                No data <AiFillWarning />
                              </div>
                            )}
                          </div>
                        </div>
                        <div className="Box-Country-details">
                          <div className="Box-Country-details-name">
                            Capital:
                          </div>
                          <div className="Box-Country-details-value">
                            {item.capital ? (
                              item.capital
                            ) : (
                              <div className="Box-Country-no-data">
                                No data <AiFillWarning />
                              </div>
                            )}
                          </div>
                        </div>
                      </div>
                    </div>
                    <div className="Box-Country-details-right-container">
                      <div className="Box-Country-details-content">
                        <div className="Box-Country-details">
                          <div className="Box-Country-details-name">
                            Top Level Domain:
                          </div>
                          <div className="Box-Country-details-value">
                            {item.topLevelDomain[0] ? (
                              item.topLevelDomain[0]
                            ) : (
                              <div className="Box-Country-no-data">
                                No data <AiFillWarning />
                              </div>
                            )}
                          </div>
                        </div>
                        <div className="Box-Country-details">
                          <div className="Box-Country-details-name">
                            Currencies:
                          </div>
                          <div className="Box-Country-details-value">
                            {item.currencies ? (
                              item.currencies[0].name
                            ) : (
                              <div className="Box-Country-no-data">
                                No data <AiFillWarning />
                              </div>
                            )}
                          </div>
                        </div>
                        <div className="Box-Country-details">
                          <div className="Box-Country-details-name">
                            Languages:
                          </div>
                          <div className="Box-Country-details-value">
                            {item.languages ? (
                              item.languages.map((lang, i) => `${lang.name},`)
                            ) : (
                              <div className="Box-Country-no-data">
                                No data <AiFillWarning />
                              </div>
                            )}
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="Box-Country-details-bottom-container">
                  <div className="Box-Country-details-bottom-content">
                    <div className="Box-Country-details-border">
                      <div className="Box-Country-details-border-content">
                        <div className="Box-Country-details-border-title">
                          Border Countries:
                        </div>
                      </div>

                      <div className="Box-Country-details-border-value-container">
                        <div className="Box-Country-details-border-value-content">
                          {item.borders
                            ? item.borders.map((border, i) => (
                                <div
                                  className={
                                    darkMode
                                      ? "Box-Country-details-border-value"
                                      : "Box-Country-details-border-value Box-Country-details-border-value-dark"
                                  }
                                  key={i}
                                  onClick={() =>
                                    researchCountry(
                                      alphaToName(data, border)[0].name,
                                      data,
                                      toast,
                                      setData
                                    )
                                  }
                                >
                                  {border}
                                </div>
                              ))
                            : `${item.name} has no border country`}
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      ))}
    </>
  );
};

export default BoxCountry;
