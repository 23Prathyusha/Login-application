import React from "react";
import { useNavigate } from "react-router-dom";

const Welcome = () => {
  const username = localStorage.getItem("username");
  const navigate = useNavigate();

  const handleLogout = () => {
    localStorage.removeItem("username");
    navigate("/");
  };

  return (
    <div className="app-container">
      <div className="welcome-container">
        <h1>Welcome, {username || "Guest"}!</h1>
        <p>You have successfully logged in to the application.</p>
        <button className="logout-button" onClick={handleLogout}>
          Logout
        </button>
      </div>
    </div>
  );
};

export default Welcome;
