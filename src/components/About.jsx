import React from "react";
import howtouseApi from "../api/howtouseApi";

const About = () => {
  return (
    <>
      <section id="aboutSection" className="">
        {/* 1st part about section */}
        <div className="container my-5">
          <div className="row d-flex justify-content-center align-items-center ">
            {/* left side about section */}
            <div className="col-12 col-md-5 text-center ">
              <img
                className="img-thumbnail p-2 shadow-lg"
                src="./images/img2.jpg"
                alt="aboutimg"
              />
            </div>
            {/* right side about section */}
            <div className="col-12 col-md-7">
              <h3 className="text-center ">
                --<span className="text-success">Available</span> @
                <span className="text-primary"> IOS </span> and
                <span className="text-primary">GOOGLE</span> App Store only
              </h3>
              <h1
                id="about1stPartH1"
                className="text-center text-decoration-underline mb-3 "
              >
                How to use the APP
              </h1>
              <br />
              {howtouseApi.map((items, index) => {
                const { id, title, description } = items;
                return (
                  <div className="row " key={index}>
                    <div
                      className="col-1 bg-transparent rounded-circle ms-3  border border-2 border-secondary d-flex justify-content-center align-items-center "
                      style={{ width: "2rem", height: "2rem" }}
                    >
                      {id}
                    </div>
                    <div className="col-10 ms-3">
                      <h2 className=""> {title} </h2>
                      <p className="">{description}</p>
                    </div>
                  </div>
                );
              })}
              <form className="d-flex  ms-lg-3">
                <button
                  className="btn btn-light text-body btn-outline-primary rounded-pill shadow-smow ms-1 "
                  type="submit"
                >
                  Learn More
                </button>
              </form>
            </div>
          </div>
        </div>

        {/* 2nd part about section */}
        <div className="container my-5 ">
          <div className="row d-flex justify-content-center align-items-center ">
            {/* left side about section */}
            <div className="col-12 col-md-7">
              <h3 className="text-center fs-4 mb-3 ">
                -- Support in any Language
              </h3>
              <h1 className="text-center  mb-3 ">
                World class Support is <br />
                <span className="text-success ">Available 24/7</span>
              </h1>
              <br />
              {howtouseApi.map((items, index) => {
                const { id, title, description } = items;
                return (
                  <div className="row d-flex justify-content-center align-items-center " key={index}>
                    <div
                      className="col-1 bg-transparent rounded-circle ms-3  border border-2 border-secondary d-flex justify-content-center align-items-center "
                      style={{ width: "2rem", height: "2rem" }}
                    >
                      {id}
                    </div>
                    <div className="col-10 ms-3">
                      <h2 id="workH2" className="">
                        {title}
                      </h2>
                      <p id="workP" className="">
                        {description}
                      </p>
                    </div>
                  </div>
                );
              })}
              <form className="d-flex  ms-lg-3">
                <button
                  className="btn btn-primary text-body btn-outline-light rounded-pill shadow-lg ms-1 "
                  type="submit"
                >
                  Learn More
                </button>
              </form>
            </div>

            {/* right side about section : image */}
            <div className="col-12 col-md-5 text-center mt-4">
              <img
                className="img-thumbnail p-2 shadow-lg"
                src="./images/img3.jpg"
                alt="aboutimg"
              />
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default About;
