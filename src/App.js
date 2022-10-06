import React from "react";
import { Route, Routes } from "react-router-dom";
import Home from "./pages/Home";
import About from "./pages/About";
import Contact from "./pages/Contact";
import Error from "./pages/Error";
import Service from "./pages/Service";
const App = () => {
  return (
    <>
      <Routes>
        <Route exact path="/" element={<Home/>} />
        <Route exact path="/contact" element={<Contact />} />
        <Route exact path="/service" element={<Service />} />
        <Route exact path="/about" element={<About />} />
        <Route path="*" element={<Error />} />
      </Routes>
    </>
  );
};

export default App;
