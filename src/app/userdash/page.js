
"use client";

import Link from "next/link";
import Image from "next/image";
import "bootstrap/dist/css/bootstrap.min.css";
import { useState, useEffect } from "react";

export default function Dashboard() {
  const [movies, setMovies] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    async function fetchMovies() {
      try {
        const res = await fetch("/api/fetchmovies");
        if (!res.ok) throw new Error("Failed to fetch movies");

        const data = await res.json();
        setMovies(data);
      } catch (error) {
        console.error("Error fetching movies:", error);
      } finally {
        setLoading(false);
      }
    }
    fetchMovies();
  }, []);

  return (
    <div
      style={{
        backgroundColor: "#000",
        color: "#fff",
        overflowX: "hidden",
        minHeight: "100vh",
      }}
    >
      {/* Navbar */}
      <nav
        className="navbar navbar-expand-lg"
        style={{ backgroundColor: "#b71c1c" }}
      >
        <div className="container-fluid">
          <Link className="navbar-brand text-white fw-bold" href="/">
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
                <Link className="nav-link text-white" href="/">
                  Home
                </Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link text-white" href="/login">
                  Logout
                </Link>
              </li>
            </ul>
          </div>
        </div>
      </nav>

      {/* User Dashboard */}
      <div className="container mt-5">
        <h2
          className="text-center mb-4"
          style={{ color: "#fdd835", fontWeight: "bold" }}
        >
          🎬 Movie Collection
        </h2>

        <div className="container mt-5">
          {loading ? (
            <p className="text-center text-white">Loading movies...</p>
          ) : movies.length === 0 ? (
            <p className="text-center text-white">No movies found.</p>
          ) : (
            <div className="row">
              {/* Add Movie Button */}
              <div className="col-2 mb-4">
                <div
                  className="card movie-card h-100 shadow-lg d-flex align-items-center justify-content-center"
                  style={{
                    cursor: "pointer",
                    backgroundColor: "#212121",
                    color: "#fff",
                  }}
                  onClick={() => (window.location.href = "/addmovies")}
                >
                  <div className="text-center">
                    <h1 className="fw-bold">+</h1>
                    <p className="mb-0">Add Movie</p>
                  </div>
                </div>
              </div>

              {/* Movies List */}
              {movies.map((movie, index) => (
                <div key={index} className="col-2 mb-4">
                  <div className="card movie-card h-100 shadow-lg">
                    <Image
                      src={movie.image_url}
                      className="card-img-top"
                      alt={movie.title}
                      width={300}
                      height={400}
                      unoptimized
                    />
                    <div className="card-body text-center">
                      <h5 className="card-title fw-bold">{movie.title}</h5>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          )}
        </div>
      </div>
    </div>
  );
}
