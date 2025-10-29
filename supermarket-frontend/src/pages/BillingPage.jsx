import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import background from "../assets/billing-bg.jpg";
import "./PageStyles.css";

const itemsList = [
  { name: "Rice", price: 80 },
  { name: "Wheat", price: 70 },
  { name: "Sugar", price: 45 },
  { name: "Milk", price: 60 },
  { name: "Bread", price: 30 },
  { name: "Oil", price: 150 },
  { name: "Soap", price: 40 },
  { name: "Shampoo", price: 120 },
  { name: "Toothpaste", price: 55 },
  { name: "Salt", price: 20 },
  { name: "Coffee", price: 90 },
  { name: "Tea", price: 85 },
];

const BillingPage = () => {
  const navigate = useNavigate();
  const [quantities, setQuantities] = useState(Array(itemsList.length).fill(0));
  const [total, setTotal] = useState(0);
  const [discountApplied, setDiscountApplied] = useState(false);

  const loggedInUser = JSON.parse(localStorage.getItem("loggedInUser"));

  // Calculate total whenever quantities change
  useEffect(() => {
    const newTotal = itemsList.reduce(
      (sum, item, idx) => sum + item.price * quantities[idx],
      0
    );

    setTotal(newTotal);

    // Apply discount only if a logged-in user exists
    if (loggedInUser && newTotal > 0) {
      setDiscountApplied(true);
    } else {
      setDiscountApplied(false);
    }
  }, [quantities, loggedInUser]);

  const handleQuantityChange = (index, value) => {
    const qty = Math.max(0, Number(value));
    const newQuantities = [...quantities];
    newQuantities[index] = qty;
    setQuantities(newQuantities);
  };

  const saveBill = async () => {
    try {
      const billData = {
        customerEmail: loggedInUser ? loggedInUser.email : "Guest",
        items: itemsList
          .map((item, idx) => ({ ...item, quantity: quantities[idx] }))
          .filter((it) => it.quantity > 0),
        total: discountApplied ? total * 0.9 : total,
      };

      const response = await fetch("http://localhost:8080/api/bills/save", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(billData),
      });

      if (response.ok) {
        alert("Bill saved successfully!");
        navigate("/saved-bills");
      } else {
        alert("Failed to save bill");
      }
    } catch (err) {
      console.error(err);
      alert("Error saving bill");
    }
  };

  return (
    <div
      className="page-container"
      style={{ backgroundImage: `url(${background})` }}
    >
      <div className="content-box billing-box">
        <h1>Billing Section</h1>

        <div className="items-header">
          <span>Item</span>
          <span>Price</span>
          <span>Quantity</span>
        </div>

        <div className="items-list">
          {itemsList.map((item, idx) => (
            <div className="item-row" key={idx}>
              <span>{item.name}</span>
              <span>₹{item.price}</span>
              <input
                type="number"
                min="0"
                max="10"
                value={quantities[idx]}
                onChange={(e) => handleQuantityChange(idx, e.target.value)}
                className="quantity-input"
              />
            </div>
          ))}
        </div>

        <h3>
          Total: ₹
          {discountApplied ? (total * 0.9).toFixed(2) : total.toFixed(2)}
          {discountApplied && <span> (10% off)</span>}
        </h3>

        <button className="main-button" onClick={saveBill}>
          Save Bill
        </button>
      </div>
    </div>
  );
};

export default BillingPage;
