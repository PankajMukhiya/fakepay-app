import React from "react";

const Header = () => {
  return (
    <>
      <header id="headerSection" className="mb-0 pb-0">
        <section id="headerContainer" className="container">
          <div className="row d-flex justify-content-center align-items-center ">
            
            <div
              id="headeLeft"
              className="col-12 col-md-6 d-flex justify-content-center align-bottom align-items-center mt-5 "
            >
              <img
                id="headerImg1"
                src="./images/img1.jpg"
                alt=""
                className="img-fluid shadow-lg "
                style={{width: "20rem", height:"15rem"}}
              />
            </div>
            <div
              id="headrRight"
              className="col-12 col-md-6 d-flex flex-column justify-content-center mt-5 "
            >
              <h1 id="headerH1" className="text-info text-capitalize">
                Online Payment made <br /> easy for you
              </h1>
              <p id="headerP" className="text-black-50">
                Lorem ipsum dolor sit, amet consectetur adipisicing elit.
                Blanditiis, consectetur! Sint mollitia quia,
              </p>
              <h3 id="headerH3" className="text-success text-capitalize  mt-2 mt-lg-4">
                get early acess for you
              </h3>
              <div className ="input-group mb-3">
                <input
                  id=""
                  type="email"
                  className ="form-control rounded-pill me-1 border-3 font-monospace"
                  placeholder="Enter Your Email"
                  aria-label="Recipient's username"
                  aria-describedby="button-addon2"
                />
                <button
                  className ="btn btn-outline-success rounded-pill shadow-lg ms-1"
                  type="button"
                  id="button-addon2"
                >
                  Get Now
                </button>
              </div>
            </div>
          </div>
        </section>
      </header>
    </>
  );
};

export default Header;
