import React from "react";
import workapi from "../api/workApi";
const HowsWork = () => {
  return (
    <>
      <section id="downloadSection" className="mt-2 p-4 "  >
        <div className="container ">
          <h1 className="text-center text-primary">How does its works</h1>
          <div className="row d-flex justify-content-center align-items-center gx-2">
            {workapi.map((items) => {
              const {id , logo, title, description} = items
              return (
                <div className="col-12 col-md-4 gy-5 shadow-lg rounded-3 " key={id}>
                  <div className =" text-center">
                    <div className ="">
                      <i className={`fs-2 ${logo}`}></i>
                    </div>
                    <div className ="card-body">
                      <h5 id="howsworksectionh5" className ="card-title fs-3">{title}</h5>
                      <p id="howsworksectionP" className ="card-text text-black-50 px-4">{description}</p>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </section>
    </>
  );
};

export default HowsWork;
