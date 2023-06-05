/*!

=========================================================
* Daada INC - web - v1.0.0
=========================================================

=========================================================

* The above copyright notice and this permission notice shall be included in all copies or substantial portions of the Software.

*/
import React from "react";
import ReactDOM from "react-dom/client";
import { BrowserRouter, Route, Routes, Navigate } from "react-router-dom";

import "assets/css/nucleo-icons.css";
import "assets/scss/blk-design-system-react.scss";
import "assets/demo/demo.css";

import Index from "views/Index.js";
import LandingPage from "views/pages/LandingPage.js";
import RegisterPage from "views/pages/RegisterPage.js";
import ProfilePage from "views/pages/ProfilePage.js";

const root = ReactDOM.createRoot(document.getElementById("root"));

root.render(
  <BrowserRouter>
    <Routes>
      <Route path="/components" element={<Index />} />
      <Route path="/landing-page" element={<LandingPage />} />
      <Route path="/register-page" element={<RegisterPage />} />
      <Route path="/profile-page" element={<ProfilePage />} />
      <Route path="*" element={<Navigate to="/landing-page" replace />} />
    </Routes>
  </BrowserRouter>
);
