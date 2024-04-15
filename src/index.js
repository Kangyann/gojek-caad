// import "./index.css";
import "core/styles/app.scss";
import React, { StrictMode } from "react";
import ReactDOM from "react-dom/client";

import { BrowserRouter, Routes, Route } from "react-router-dom";

import Home from "presentation/container/pages/Home";
import Partner from "presentation/container/pages/Partner";
import Careers from "presentation/container/pages/Careers";
import Company from "presentation/container/pages/Company";
import Products from "presentation/container/pages/Products";
import Blog from "presentation/container/pages/Blog";
import Help from "presentation/container/pages/Help";
import NotFound from "presentation/container/pages/NotFound";
const root = ReactDOM.createRoot(document.getElementById("root"));

root.render(
  <StrictMode>
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/partner" element={<Partner />} />
        <Route path="/careers" element={<Careers />} />
        <Route path="/company" element={<Company />} />
        <Route path="/products" element={<Products />} />
        <Route path="/blog" element={<Blog />} />
        <Route path="/help" element={<Help />} />
        
        <Route path="*" element={<NotFound />} /> 
      </Routes>
    </BrowserRouter>
  </StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
