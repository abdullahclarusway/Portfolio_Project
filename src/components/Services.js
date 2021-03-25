import React from "react";
import { faInternetExplorer } from "@fortawesome/free-brands-svg-icons";
import {
  faDesktop,
  faFileCode,
  faCode,
  faPenNib,
  faDatabase,
} from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

const Services = () => {
  return (
    <div id="services" className="services">
      <h1 className="py-5">my services</h1>
      <div className="py-5">
        <div className="container">
          <div className="row">
            <div className="col-md-3 col-sm-6">
              <div className="box">
                <div className="circle">
                  <FontAwesomeIcon icon={faCode} size="2x" className="icon" />
                </div>
                <h3>Web</h3>
                <h3>Design</h3>
                <p>
                  This service that I offer is of high quality, and above all
                  experience that I have in the labor field for many years
                </p>
              </div>
            </div>
            <div className="col-md-3 col-sm-6">
              <div className="box">
                <div className="circle">
                  <FontAwesomeIcon
                    icon={faInternetExplorer}
                    size="2x"
                    className="icon"
                  />
                </div>
                <h3>Web</h3>
                <h3>Development</h3>
                <p>
                  This service that I offer is of high quality, and above all
                  experience that I have in the labor field for many years
                </p>
              </div>
            </div>
            <div className="col-md-3 col-sm-6">
              <div className="box">
                <div className="circle">
                  <FontAwesomeIcon icon={faPenNib} size="2x" className="icon" />
                </div>
                <h3>UI/UX</h3>
                <h3>Design</h3>
                <p>
                  This service that I offer is of high quality, and above all
                  experience that I have in the labor field for many years
                </p>
              </div>
            </div>
            <div className="col-md-3 col-sm-6">
              <div className="box">
                <div className="circle">
                  <FontAwesomeIcon
                    icon={faDatabase}
                    size="2x"
                    className="icon"
                  />
                </div>
                <h3>Backend</h3>
                <h3>Development</h3>
                <p>
                  This service that I offer is of high quality, and above all
                  experience that I have in the labor field for many years
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Services;
