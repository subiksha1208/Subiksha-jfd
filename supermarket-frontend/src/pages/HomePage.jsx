import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import background from "../assets/home-bg.jpg";
import "./PageStyles.css";

const HomePage = () => {
  const [loginData, setLoginData] = useState({ email: "", password: "" });
  const navigate = useNavigate();

  const handleLogin = () => {
    const users = JSON.parse(localStorage.getItem("users") || "[]");
    const foundUser = users.find(
      (u) => u.email === loginData.email && u.password === loginData.password
    );
    if (foundUser && foundUser.status === "Applied") {
      alert("Login successful!");
      localStorage.setItem("loggedInUser", JSON.stringify(foundUser));
      navigate("/billing");
    } else if (foundUser) {
      alert("Your account is not yet approved for login.");
    } else {
      alert("Invalid credentials or user not registered.");
    }

  };

  return (
    <div
      className="page-container"
      style={{ backgroundImage: `url(${background})` }}
    >
      <div className="content-box">
        <h1>Customer Login</h1>
        <input
          type="email"
          placeholder="Email"
          className="input-field"
          onChange={(e) =>
            setLoginData({ ...loginData, email: e.target.value })
          }
        />
        <input
          type="password"
          placeholder="Password"
          className="input-field"
          onChange={(e) =>
            setLoginData({ ...loginData, password: e.target.value })
          }
        />
        <button className="main-button" onClick={handleLogin}>
          Login
        </button>

        <p className="offer-text">10% off for Customer ID holders!</p>

        <p>
          Not registered?{" "}
          <span className="link" onClick={() => navigate("/register")}>
            Register now
          </span>
        </p>

        <button
          className="secondary-button"
          onClick={() => navigate("/billing")}
        >
          Continue Without Login
        </button>

        <div className="bottom-buttons">
          <button onClick={() => navigate("/requests")}>Show Requests</button>
          <button onClick={() => navigate("/saved-bills")}>Saved Bills</button>
        </div>

        <footer>© Designed by Subiksha R</footer>
      </div>
    </div>
  );
};

export default HomePage;
