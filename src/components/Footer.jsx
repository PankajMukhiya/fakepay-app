import React from "react";
import { NavLink } from "react-router-dom";

const Footer = () => {
  return (
    <>
      <footer className="text-white " style={{ background: "#182324" }}>
        <div className="container">
          <div className="row">
            <div className="col-12 col-lg-10 mx-auto">
              <div className="row p-4">
                {/* 1st */}
                <div className="col-12 col-lg-6">
                  <h4 className="text-center">FakePay</h4>
                  <ul className="navbar-nav d-flex flex-row gap-5 justify-content-center align-items-center">
                    <li className="nav-item">
                      <NavLink className="text-white footerUlLiA nav-link " to="/">
                        Home
                      </NavLink>
                    </li>
                    <li className="nav-item">
                      <NavLink
                        className="text-white footerUlLiA nav-link "
                        to="/service"
                      >
                        Service
                      </NavLink>
                    </li>
                    <li className="nav-item">
                      <NavLink
                        className="text-white footerUlLiA nav-link "
                        to="/about"
                      >
                        About
                      </NavLink>
                    </li>
                    <li className="nav-item">
                      <NavLink
                        className="text-white footerUlLiA nav-link "
                        to="/contact"
                      >
                        Contact
                      </NavLink>
                    </li>
                  </ul>
                </div>
                <div className="col-12 col-lg-6 mt-3">
                  <h4 className="text-center">Follow Us</h4>

                  <ul className="navbar-nav d-flex flex-row gap-5 justify-content-center align-items-center">
                    <li className="nav-item">
                      <NavLink className="text-white footerUlLiA nav-link " to="/" >
                        <i className="text-white fa-brands fa-facebook fs-2"></i>
                      </NavLink>
                    </li>
                    <li className="nav-item">
                      <NavLink
                        className="text-white footerUlLiA nav-link "
                        to="/services"
                      >
                        <i className="text-white fa-brands fa-instagram fs-2"></i>
                      </NavLink>
                    </li>
                    <li className="nav-item">
                      <NavLink
                        className="text-white footerUlLiA nav-link "
                        to="/about"
                      >
                        <i className="text-white fa-brands fa-linkedin fs-2 "></i>
                      </NavLink>
                    </li>
                    <li className="nav-item">
                      <NavLink
                        className="text-white footerUlLiA nav-link "
                        to="/contact"
                      >
                        <i className="text-white fa-brands fa-github fs-2 "></i>
                      </NavLink>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
            <hr />
            <div className="my-3">
              <p className="text-center">
                Copyright @ 2022 FakePay. All right reserved.
              </p>
            </div>
          </div>
        </div>
      </footer>
    </>
  );
};

export default Footer;
