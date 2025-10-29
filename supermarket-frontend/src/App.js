import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import HomePage from "./pages/HomePage";
import BillingPage from "./pages/BillingPage";
import RegisterPage from "./pages/RegisterPage";
import SavedBillsPage from "./pages/SavedBillsPage";
import RequestsPage from "./pages/RequestsPage";
import "./App.css";

function App() {
  const loggedInUser = JSON.parse(localStorage.getItem("loggedInUser"));

  return (
    <Router>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route
          path="/billing"
          element={<BillingPage loggedInUserEmail={loggedInUser?.email} />}
        />
        <Route path="/register" element={<RegisterPage />} />
        <Route path="/saved-bills" element={<SavedBillsPage />} />
        <Route path="/requests" element={<RequestsPage />} />
      </Routes>
    </Router>
  );
}

export default App;
