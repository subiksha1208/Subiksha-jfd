import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import background from "../assets/register-bg.jpg";
import "./PageStyles.css";

const RegisterPage = () => {
  const [form, setForm] = useState({ email: "", dob: "", password: "" });
  const navigate = useNavigate();

  const handleSubmit = async () => {
    if (!form.email || !form.dob || !form.password) {
      alert("Please fill all fields");
      return;
    }

    try {
      const response = await fetch("http://localhost:8080/api/customers/register", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(form),
      });

      if (response.ok) {
        alert("Application submitted successfully!");
        navigate("/");
      } else {
        alert("Failed to submit application.");
      }
    } catch (err) {
      console.error(err);
      alert("Error connecting to backend");
    }
  };

  return (
    <div
      className="page-container"
      style={{ backgroundImage: `url(${background})` }}
    >
      <div className="content-box">
        <h1>Register</h1>
        <input
          type="email"
          placeholder="Email"
          className="input-field"
          onChange={(e) => setForm({ ...form, email: e.target.value })}
        />
        <input
          type="date"
          className="input-field"
          onChange={(e) => setForm({ ...form, dob: e.target.value })}
        />
        <input
          type="password"
          placeholder="Password"
          className="input-field"
          onChange={(e) => setForm({ ...form, password: e.target.value })}
        />
        <button className="main-button" onClick={handleSubmit}>
          Apply
        </button>
      </div>
    </div>
  );
};

export default RegisterPage;
