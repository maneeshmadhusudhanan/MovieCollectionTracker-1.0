"use client";

import { useState } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import axios from "axios";
import Link from "next/link";

export default function AddMovie() {
  const [formData, setFormData] = useState({
    title: "",
    image: "",
    description: "",
  });
  const [message, setMessage] = useState("");

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setMessage("");

    try {
      const response = await axios.post("/api/addmovies", formData);
      setMessage(response.data.message);
      setFormData({ title: "", image: "", description: "" });
    } catch (error) {
      setMessage("Error adding movie.");
    }
  };

  return (
    <div className="container mt-5">
      {/* Navbar */}
      <nav className="navbar navbar-expand-lg navbar-dark bg-danger">
        <div className="container">
          <Link className="navbar-brand" href="/">
            Marvel Studios
          </Link>
          <div className="collapse navbar-collapse" id="navbarNav">
            <ul className="navbar-nav ms-auto">
              <li className="nav-item">
                <Link className="nav-link" href="/user-dashboard">
                  User Dashboard
                </Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link" href="/">
                  Home
                </Link>
              </li>
            </ul>
          </div>
        </div>
      </nav>

      {/* Add Movie Form */}
      <h2 className="text-center text-warning mt-4">Add Movies</h2>
      <div
        className="form-container mx-auto p-4 rounded shadow"
        style={{ maxWidth: "500px", background: "#212121", color: "white" }}
      >
        {message && <p className="text-center text-success">{message}</p>}
        <form onSubmit={handleSubmit}>
          <div className="mb-3">
            <label className="form-label">Movie Title</label>
            <input
              type="text"
              className="form-control"
              name="title"
              value={formData.title}
              onChange={handleChange}
              required
            />
          </div>
          <div className="mb-3">
            <label className="form-label">Movie Image URL</label>
            <input
              type="url"
              className="form-control"
              name="image"
              value={formData.image}
              onChange={handleChange}
              required
            />
          </div>
          <div className="mb-3">
            <label className="form-label">Description</label>
            <textarea
              className="form-control"
              name="description"
              value={formData.description}
              onChange={handleChange}
              rows="3"
              required
            ></textarea>
          </div>
          <button type="submit" className="btn btn-warning w-100">
            Add Movie
          </button>
        </form>
      </div>
    </div>
  );
}
