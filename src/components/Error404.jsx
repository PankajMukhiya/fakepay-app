import React from "react";
import { NavLink } from "react-router-dom";

const Error404 = () => {
  return (
    <>
      <section style={{ width: "100%", height: "60vh"}}>
        <div className="container">
          <div className="row position-relative" style={{ opacity: "0.8" }}>
            <div
              style={{ fontSize: "10rem", zIndex: "-0" }}
              className="position-absolute  col-12 d-flex justify-content-center align-items-center"
            >
              <h1
                style={{ fontSize: "15rem", zIndex: "-0", color: "#ffe2e2" }}
                className=" "
              >
                404
              </h1>
            </div>
            <div
              style={{ zIndex: "100", marginTop: "8rem" }}
              className="position-absolute col-12 d-flex justify-content-center align-items-center flex-column"
            >
              <h3 className="text-danger fw-bolder fs-2 text-center">WE ARE SORRY, PAGE NOT FOUND </h3>
              <p className="fw-bold text-center">
                The Page Your are Looking For Might Have Been Removed OR Its
                Name Changed OR Temporarily Unavailable
              </p>
              <NavLink
                className="btn btn-info text-body btn-outline-light rounded-pill shadow-lg fw-bolder mt-3  "
                to="/"
              >
                Go Back to HomePage
              </NavLink>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default Error404;
