import React, { useState, useEffect } from "react";
import background from "../assets/home-bg.jpg";
import "./PageStyles.css";

const SavedBillsPage = () => {
  const [bills, setBills] = useState([]);

  useEffect(() => {
    fetch("http://localhost:8080/api/bills/all")
      .then((res) => res.json())
      .then((data) => setBills(data))
      .catch((err) => console.error(err));
  }, []);

  return (
    <div
      className="page-container"
      style={{ backgroundImage: `url(${background})` }}
    >
      <div className="content-box">
        <h1>Saved Bills</h1>
        {bills.length === 0 ? (
          <p>No saved bills found.</p>
        ) : (
          bills.map((bill, idx) => (
            <div key={idx} className="bill-card">
              <p>
                <b>Customer:</b> {bill.customerEmail}
              </p>
              <p>
                <b>Total:</b> ₹{bill.total.toFixed(2)}
              </p>
              <ul>
                {bill.items.map((it, i) => (
                  <li key={i}>
                    {it.name} - ₹{it.price} × {it.quantity}
                  </li>
                ))}
              </ul>
            </div>
          ))
        )}
      </div>
    </div>
  );
};

export default SavedBillsPage;
