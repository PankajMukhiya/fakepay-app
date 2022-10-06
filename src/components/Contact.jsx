import React, { useState } from "react";
import { database } from "../firebase";
import { ref, push, child, update } from "firebase/database";

const Contact = () => {
  const [inpUserData, setInpUserData] = useState({
    firstName: "",
    lastName: "",
    phone: "",
    email: "",
    address: "",
    message: "",
  });

  let name, value;
  const getUserData = (event) => {
    // console.log(event.target.value);
    // console.log(event.target.name);
    name = event.target.name;
    value = event.target.value;
    setInpUserData({ ...inpUserData, [name]: value });
  };

  //alert section
  let alertSuccess = document.getElementById("resTrue");
  let alertDanger = document.getElementById("resFalse");

  // conect with firebase and submit handler
  const submitData = async (event) => {
    // console.log("clicked");
    const { firstName, lastName, phone, email, address, message } = inpUserData;
    //validation: all fields required
    if (firstName && lastName && phone && email && address && message) {
     
      const newPostKey = push(child(ref(database), "users")).key;
      const updatesUserInfo = {};
      updatesUserInfo["/" + newPostKey] = inpUserData;
      update(ref(database), updatesUserInfo);

      // let alertSuccess = document.getElementById("resTrue");
      // let alertDanger = document.getElementById("resFalse")
      // console.log(alertSuccess);
      // alert("Data Stored");
      alertSuccess.classList.remove("visually-hidden");
      alertDanger.classList.add("visually-hidden");
      setInpUserData({
        firstName: "",
        lastName: "",
        phone: "",
        email: "",
        address: "",
        message: "",
      });
    } else {
      alertDanger.classList.remove("visually-hidden");
      // alert("Please Fill all the Fields");
    }

    // if you want to remove the alert or then with in 5 second automatically removed
    setTimeout(() => {
      alertSuccess.classList.add("visually-hidden");
      alertDanger.classList.add("visually-hidden");
    }, 5000);
  };

  return (
    <>
      {/* this is the alert section when the form was submitted */}
      {/* SUCCESS ALERT ||  BEST WAY : CREATE A NEW COMPONENT ALERT.JSX */}
      <div
        id="resTrue"
        className="visually-hidden d-flex position-fixed bottom-0 end-0 p-3"
      >
        <div className="alert alert-success   " role="alert">
          <span className="me-3">Record Store Successfully</span>
          <button
            type="button"
            className="btn-close"
            aria-label="Close"
            onClick={() => {
              alertSuccess.classList.add("visually-hidden");
            }}
          ></button>
        </div>
      </div>

      {/* WARNING ALERT */}
      <div
        id="resFalse"
        className="visually-hidden d-flex position-fixed bottom-0 end-0 p-3"
      >
        <div className="alert alert-warning   " role="alert">
          <span className="me-3">Please Fill all the Data properly</span>
          <button
            type="button"
            className="btn-close"
            aria-label="Close"
            onClick={() => {
              alertDanger.classList.add("visually-hidden");
              alertSuccess.classList.add("visually-hidden");
            }}
          ></button>
        </div>
      </div>

      {/* ORIGINAL CONTACT SECTION */}
      <section id="contact" className="p-5 ">
        <div className="container">
          <div className="row">
            <div className="col-12 col-lg-10 mx-auto">
              <div className="row ">
                {/* contact section : left side */}
                <div className="col-12 col-md-5 d-flex justify-content-center ">
                  <div className="card shadow " style={{ width: "26rem" }}>
                    <div className="card-body">
                      <h5 className="card-title text-primary fw-bold">
                        Contect with Our <br /> Sales Team
                      </h5>
                      <p className="card-text text-black-50 ">
                        Lorem ipsum dolor sit amet consectetur adipisicing elit.
                        Quasi rem laborum totam, magni possimus architecto unde
                        omnis tempore quam? Accusamus.
                      </p>
                    </div>
                    <img
                      src="./images/img2.jpg"
                      className="card-img-bottom "
                      alt="contactImg"
                    />
                  </div>
                </div>
                {/* contact section : right side */}
                <div className="col-12 col-md-7 mt-3 mt-md-0">
                  <form method="POST">
                    <div className="row">
                      <div className="col-12 col-md-6">
                        <div className="form-floating mb-3">
                          <input
                            type="text"
                            value={inpUserData.firstName}
                            onChange={getUserData}
                            name="firstName"
                            className="form-control font-monospace"
                            id="floatingInput"
                            placeholder="Enter Your first Name"
                          />
                          <label htmlFor="floatingInput">First Name </label>
                        </div>
                      </div>
                      <div className="col-12 col-md-6">
                        <div className="form-floating mb-3">
                          <input
                            type="text"
                            name="lastName"
                            value={inpUserData.lastName}
                            onChange={getUserData}
                            className="form-control font-monospace"
                            id="floatingInput"
                            placeholder="Enter Your last Name"
                          />
                          <label htmlFor="floatingInput">Last Name </label>
                        </div>
                      </div>
                    </div>
                    <div className="row">
                      <div className="col-12 col-md-6">
                        <div className="form-floating mb-3">
                          <input
                            type="tel"
                            name="phone"
                            value={inpUserData.phone}
                            onChange={getUserData}
                            className="form-control font-monospace"
                            id="floatingInput"
                            placeholder="Enter Your phone"
                          />
                          <label htmlFor="floatingInput">Phone Number </label>
                        </div>
                      </div>
                      <div className="col-12 col-md-6">
                        <div className="form-floating mb-3">
                          <input
                            type="email"
                            name="email"
                            value={inpUserData.email}
                            onChange={getUserData}
                            className="form-control font-monospace"
                            id="floatingInput"
                            placeholder="Enter Your Email"
                          />
                          <label htmlFor="floatingInput">Your Email </label>
                        </div>
                      </div>
                    </div>
                    <div className="row">
                      <div className="col-12">
                        <div className="form-floating mb-3">
                          <input
                            type="text"
                            name="address"
                            value={inpUserData.address}
                            onChange={getUserData}
                            className="form-control  font-monospace"
                            id="floatingInput"
                            placeholder="Enter Your Address"
                          />
                          <label htmlFor="floatingInput">Your Address </label>
                        </div>
                      </div>
                    </div>
                    <div className="row">
                      <div className="col-12">
                        <div className="form-floating">
                          <textarea
                            name="message"
                            value={inpUserData.message}
                            onChange={getUserData}
                            className="form-control font-monospace"
                            placeholder="Leave a comment here"
                            id="floatingTextarea"
                          ></textarea>
                          <label htmlFor="floatingTextarea">Message</label>
                        </div>
                      </div>
                      <div className="form-check ms-3 mt-2">
                        <input
                          className="form-check-input font-monospace"
                          type="checkbox"
                          id="flexCheckDefault"
                        />
                        <label
                          className="form-check-label"
                          htmlFor="flexCheckDefault"
                        >
                          I agree that the FakePay may contact me at Email
                          address or Phone number above
                        </label>
                      </div>
                    </div>
                    <div className="mt-3 text-center">
                      <button
                        className="btn btn-light text-body btn-outline-success fw-bolder rounded-pill shadow-lg  ms-1 w-50 "
                        type="button"
                        onClick={submitData}
                      >
                        Submit
                      </button>
                    </div>
                    {/* alertsection */}
                    {/* <div id="resFalse" className="visually-hidden d-flex position-fixed bottom-0 end-0 p-3">
        <div  className="alert alert-warning   " role="alert">
          <span className="me-3">Please Fill all the Data properly</span>
          <button
            type="button"
            class="btn-close"
            aria-label="Close"
            onClick={() => {
               let closeAlert= document.getElementById("resFalse")
               closeAlert.classList.add("visually-hidden")
            }}
          ></button>
        </div>
      </div> */}
                  </form>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default Contact;
