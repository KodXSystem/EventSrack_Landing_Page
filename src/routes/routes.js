import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
// Components
import Dashboard from "../pages/Dashboard";
import Header from './../layout/Header';
import Footer from './../layout/Footer';
import EventDetails from "../pages/EventDetails";
import TicketBook from "../pages/TicketBook";
import EventSearch from "../pages/EventSearch";
const AppRoutes = () => {
   return (
      <Routes>
         <Route path="/" element={<Dashboard />} />
         <Route path="/EventDetails" element={<EventDetails />} />
         <Route path="/TicketBook" element={<TicketBook />} />
         <Route path="/EventSearch" element={<EventSearch />} />
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
