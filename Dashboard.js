import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";

function Dashboard() {
  const navigate = useNavigate();
  const [message, setMessage] = useState("");

  // Retrieve user data safely
  const user = JSON.parse(localStorage.getItem("user")) || {};

  // Redirect if user data is not found
  useEffect(() => {
    if (!user.name) {
      navigate("/Dashboard");
    } else {
      setMessage("Login successful! Welcome to your dashboard.");
    }
  }, [navigate, user.name]);

  const handleLogout = () => {
    localStorage.removeItem("token");
    localStorage.removeItem("user");
    navigate("/login");
  };

  return (
    <div>
      {message && <p style={{ color: "green", fontWeight: "bold" }}>{message}</p>}
      <h2>Welcome</h2>
      {/* <p>Email: {user.email}</p>   {user.name}!*/}
      <button onClick={handleLogout}>Logout</button>
    </div>
  );
}

export default Dashboard;
