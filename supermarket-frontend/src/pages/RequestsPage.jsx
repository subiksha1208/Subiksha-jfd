import React, { useEffect, useState } from "react";
import background from "../assets/requests-bg.jpg";
import "./PageStyles.css";

const RequestsPage = () => {
  const [users, setUsers] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    fetch("http://localhost:8080/api/customers/requests")
      .then((res) => {
        if (!res.ok) throw new Error("Network response was not ok");
        return res.json();
      })
      .then((data) => {
        setUsers(data);
        setLoading(false);
      })
      .catch((err) => {
        console.error("Error fetching requests:", err);
        setError("Failed to fetch requests from backend.");
        setLoading(false);
      });
  }, []);

  return (
    <div
      className="page-container"
      style={{ backgroundImage: `url(${background})` }}
    >
      <div className="content-box">
        <h1>Customer Applications</h1>

        {loading && <p>Loading applications...</p>}
        {error && <p style={{ color: "red" }}>{error}</p>}

        {!loading && !error && (
          <>
            {users.length === 0 ? (
              <p>No applications yet.</p>
            ) : (
              <table
                style={{
                  width: "100%",
                  borderCollapse: "collapse",
                  textAlign: "center",
                }}
              >
                <thead>
                  <tr
                    style={{
                      backgroundColor: "#f5f5f5",
                      color: "black",
                      fontWeight: "bold",
                      borderBottom: "2px solid #000",
                    }}
                  >
                    <th style={{ padding: "10px" }}>Email</th>
                    <th style={{ padding: "10px" }}>Date of Application</th>
                    <th style={{ padding: "10px" }}>Status</th>
                  </tr>
                </thead>
                <tbody>
                  {users.map((user, idx) => (
                    <tr
                      key={idx}
                      style={{
                        backgroundColor:
                          idx % 2 === 0
                            ? "rgba(255,255,255,0.85)"
                            : "rgba(245,245,245,0.85)",
                      }}
                    >
                      <td style={{ padding: "10px" }}>{user.email}</td>
                      <td style={{ padding: "10px" }}>
                        {user.registeredDate || "N/A"}
                      </td>
                      <td
                        style={{
                          padding: "10px",
                          fontWeight: "bold",
                          color:
                            (user.status || "").toLowerCase() === "applied"
                              ? "green"
                              : "black",
                        }}
                      >
                        {(user.status || "").toLowerCase() === "applied"
                          ? "Registered"
                          : user.status || "Pending"}
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            )}
          </>
        )}
      </div>
    </div>
  );
};

export default RequestsPage;
