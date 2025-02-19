"use client";

import "bootstrap/dist/css/bootstrap.min.css";
import { useState } from "react";
import Image from "next/image";

export default function Signup() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    password: "",
  });

  const [message, setMessage] = useState(""); // For success or error messages
  const [loading, setLoading] = useState(false); // Loading state

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);
    setMessage("");

    try {
      const response = await fetch("/api/sign", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(formData),
      });

      const data = await response.json();

      if (response.ok) {
        setMessage("✅ Signup successful! Redirecting...");
        setTimeout(() => {
          window.location.href = "/login"; // Redirect to login
        }, 2000);
      } else {
        setMessage(`❌ ${data.message}`);
      }
    } catch (error) {
      setMessage("❌ Something went wrong. Try again!");
    }

    setLoading(false);
  };

  return (
    <div className="container mt-5">
      <nav className="navbar navbar-expand-lg bg-danger">
        <div className="container-fluid">
          <a className="navbar-brand text-white" href="#">Marvel Studios</a>
          <div className="collapse navbar-collapse" id="navbarNav">
            <ul className="navbar-nav ms-auto">
              <li className="nav-item">
                <a className="nav-link text-white" href="/login">Login</a>
              </li>
              <li className="nav-item">
                <a className="nav-link text-white" href="/">Home</a>
              </li>
            </ul>
          </div>
        </div>
      </nav>

      <h2 className="text-center mt-4">Signup</h2>
      <div className="form-container mx-auto p-4 rounded shadow"
        style={{ maxWidth: "500px", background: "#212121", color: "white" }}>
        <Image
          src="/images/wp2436369-marvel-cinematic-universe-wallpapers.jpg"
          width={500}
          height={300}
          alt="Marvel Banner"
          className="mb-3 rounded"
        />
        
        {message && <div className="alert alert-warning">{message}</div>}

        <form onSubmit={handleSubmit}>
          <div className="mb-3">
            <label className="form-label">Name</label>
            <input
              type="text"
              className="form-control"
              name="name"
              value={formData.name}
              onChange={handleChange}
              required
            />
          </div>
          <div className="mb-3">
            <label className="form-label">Email</label>
            <input
              type="email"
              className="form-control"
              name="email"
              value={formData.email}
              onChange={handleChange}
              required
            />
          </div>
          <div className="mb-3">
            <label className="form-label">Password</label>
            <input
              type="password"
              className="form-control"
              name="password"
              value={formData.password}
              onChange={handleChange}
              required
            />
          </div>
          <button type="submit" className="btn btn-warning w-100" disabled={loading}>
            {loading ? "Signing up..." : "Signup"}
          </button>
        </form>
      </div>
    </div>
  );
}
