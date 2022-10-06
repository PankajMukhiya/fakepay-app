import React from "react";
import serviceApi from "../api/serviceApi";

const Service = () => {
  return (
    <>
      <section id="" className="">
        <div className="container">
          <h2 className="text-center mt-5">How to Send Money</h2>
          <div className=" mt-5 row d-flex flex-row justify-content-center align-items-center  gap-3 p-5">
            {serviceApi.map((items) => {
              const { id, logo, title, description } = items;
              return (
                <div  id="serviceCard" key={id} className="col-12 col-lg-4 d-flex flex-column justify-content-center align-items-center border border-3 rounded-3 shadow ">
                  <div
                    className=" m-3 rounded-circle border border-secondary d-flex justify-content-center align-items-center "
                    style={{ width: "4rem", height: "4rem" , background: "#f2f6ad"}}
                  >
                    <i className={`fs-2  ${logo}`}></i>
                  </div>
                  <h4 id="serviceH4" className="mb-3 fs-2">
                    {title}
                  </h4>
                  <p className=" text-black-50">{description} </p>
                </div>
              );
            })}
          </div>
        </div>
      </section>
    </>
  );
};

export default Service;
