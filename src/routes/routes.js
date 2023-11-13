import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
// Components
import Dashboard from "../pages/Dashboard";
import Header from './../layout/Header';
import Footer from './../layout/Footer';

const AppRoutes = () => {
   return (
      <Routes>
         <Route path="/" element={<Dashboard />} />
      </Routes>
   );
}

const RoutesSet = () => {
   return (
      <Router>
         <Header />
         <AppRoutes />
         <Footer />
      </Router>
   );
}

export default RoutesSet;
