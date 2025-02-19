"use client";

import "bootstrap/dist/css/bootstrap.min.css";
import { useState, useEffect } from "react";
import Image from "next/image";
import Link from "next/link";
import { useRouter } from "next/navigation";

export default function Login() {
  const [formData, setFormData] = useState({ email: "", password: "" });
  const [error, setError] = useState("");
  const router = useRouter();

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setError("");

    try {
      const response = await fetch("/api/login", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(formData),
      });

      const data = await response.json();

      if (response.ok) {
        localStorage.setItem("token", data.token);
        router.push("/userdash");
      } else {
        setError(data.message);
      }
    } catch (err) {
      setError("Something went wrong. Please try again.");
    }
  };

  useEffect(() => {
    require("bootstrap/dist/js/bootstrap.bundle.min.js");
  }, []);

  return (
    <div className="container mt-5">
      <nav className="navbar navbar-expand-lg bg-danger">
        <div className="container-fluid">
          <Link className="navbar-brand text-white" href="/">
            Marvel Studios
          </Link>
          <button
            className="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarNav"
          >
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse" id="navbarNav">
            <ul className="navbar-nav ms-auto">
              <li className="nav-item">
                <Link className="nav-link text-white" href="/sign">
                  Signup
                </Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link text-white" href="/">
                  Home
                </Link>
              </li>
            </ul>
          </div>
        </div>
      </nav>

      <h2 className="text-center mt-4">Login</h2>
      <div
        className="form-container mx-auto p-4 rounded shadow"
        style={{ maxWidth: "500px", background: "#212121", color: "white" }}
      >
        <Image
          src="/images/wp2436369-marvel-cinematic-universe-wallpapers.jpg"
          width={500}
          height={300}
          alt="Marvel Banner"
          className="mb-3 rounded img-fluid"
        />
        {error && <div className="alert alert-danger">{error}</div>}
        <form onSubmit={handleSubmit}>
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
          <button type="submit" className="btn btn-warning w-100">
            Login
          </button>
          <div className="mt-3 text-center">
            <Link href="/forgot-password" className="text-warning">
              Forgot Password?
            </Link>
            <br />
            <Link href="/signup" className="text-light">
              Don't have an account? Signup
            </Link>
          </div>
        </form>
      </div>
    </div>
  );
}
