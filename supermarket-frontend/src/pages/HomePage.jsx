import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import background from "../assets/home-bg.jpg";
import "./PageStyles.css";

const HomePage = () => {
  const [loginData, setLoginData] = useState({ email: "", password: "" });
  const navigate = useNavigate();

  const handleLogin = async () => {
    if (!loginData.email || !loginData.password) {
      alert("Please fill in both email and password.");
      return;
    }

    try {
      const response = await fetch("http://localhost:8080/api/customers/login", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(loginData),
      });

      if (response.ok) {
        const data = await response.json();

        if (data && data.status === "Applied") {
          alert("Login successful!");
          localStorage.setItem("loggedInUser", JSON.stringify(data));
          navigate("/billing");
        } else {
          alert("Your account is not yet approved for login.");
        }
      } else if (response.status === 500) {
        alert("Invalid credentials or user not registered.");
      } else {
        alert("Login failed. Please check your credentials.");
      }
    } catch (error) {
      console.error("Login error:", error);
      alert("Something went wrong. Please try again later.");
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
          value={loginData.email}
          onChange={(e) =>
            setLoginData({ ...loginData, email: e.target.value })
          }
        />
        <input
          type="password"
          placeholder="Password"
          className="input-field"
          value={loginData.password}
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
