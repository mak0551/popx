import React, { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import "../styles.css";

function AccountSettings() {
  const navigate = useNavigate();
  const user = JSON.parse(localStorage.getItem("user"));

  useEffect(() => {
    if (localStorage.getItem("loggedIn") !== "true") {
      alert("Please login first.");
      navigate("/login");
    }
  }, [navigate]);

  if (!user) return null;

  return (
    <div className="container-2">
      <h2>Account Settings</h2>
      <div className="profile-card">
        <img
          src=".././public/Ellipse 114/Ellipse 114@2x.png"
          alt="Profile"
          className="profile-img"
        />
        <div>
          <strong>{user.fullName}</strong>
          <p>{user.email}</p>
        </div>
      </div>
      <p className="desc">
        Lorem Ipsum Dolor Sit Amet, Consetetur Sadipscing Elitr, Sed Diam Nonumy
        Eirmod Tempor Invidunt Ut Labore Et Dolore Magna Aliquyam Erat, Sed Diam
      </p>
    </div>
  );
}

export default AccountSettings;