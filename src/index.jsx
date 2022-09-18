import React from "react";
import ReactDOM from "react-dom/client";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import "bootstrap/dist/css/bootstrap.min.css";
import "./index.scss";

import Home from "./pages/Home";
import Error from "./pages/Error"; 
import About from "./pages/About";
import SingleProduct from "./pages/SingleProduct";
import Header from "./components/Header";
import Footer from "./components/Footer";


const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <Router>
      <Header />
      <Routes>
        <Route exact path="/" element={<Home />} />
        <Route path="/a-propos" element={<About />} />
        <Route path="/annonce/:id" element={<SingleProduct/>}/>
        <Route path="/*" element={<Error />} />
      </Routes>
      <Footer />
    </Router>
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
