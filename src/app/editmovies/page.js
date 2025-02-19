'use client';

import { useState } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import Link from 'next/link';

export default function EditMovies() {
  const [selectedMovie, setSelectedMovie] = useState('');
  const [newTitle, setNewTitle] = useState('');
  const [newImage, setNewImage] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!selectedMovie || !newTitle || !newImage) {
      alert('Please fill all fields!');
      return;
    }
    alert(`Movie Updated: ${newTitle}`);
  };

  return (
    <div className="bg-black text-white min-vh-100">
      {/* Navbar */}
      <nav className="navbar navbar-expand-lg navbar-dark" style={{ backgroundColor: '#b71c1c' }}>
        <div className="container">
          <Link className="navbar-brand" href="#">Marvel Studios</Link>
          <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav">
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse" id="navbarNav">
            <ul className="navbar-nav ms-auto">
              <li className="nav-item"><Link className="nav-link" href="/user_dashboard">User Dashboard</Link></li>
              <li className="nav-item"><Link className="nav-link" href="/">Home</Link></li>
            </ul>
          </div>
        </div>
      </nav>
      
      {/* Edit Movie Form */}
      <div className="container mt-5">
        <h2 className="text-center text-warning">Edit Movies</h2>
        <form onSubmit={handleSubmit} className="mt-4">
          <div className="mb-3">
            <label htmlFor="movieSelect" className="form-label">Select Movie</label>
            <select className="form-control" id="movieSelect" value={selectedMovie} onChange={(e) => setSelectedMovie(e.target.value)} required>
              <option value="">Select a movie</option>
              <option value="ironman">Iron Man</option>
              <option value="antman">Ant Man</option>
              <option value="spiderman">Spider Man</option>
            </select>
          </div>
          <div className="mb-3">
            <label htmlFor="newMovieTitle" className="form-label">New Movie Title</label>
            <input type="text" className="form-control" id="newMovieTitle" placeholder="Enter new movie title" value={newTitle} onChange={(e) => setNewTitle(e.target.value)} required />
          </div>
          <div className="mb-3">
            <label htmlFor="newMovieImage" className="form-label">New Movie Image URL</label>
            <input type="url" className="form-control" id="newMovieImage" placeholder="Enter new image URL" value={newImage} onChange={(e) => setNewImage(e.target.value)} required />
          </div>
          <button type="submit" className="btn btn-warning btn-block">Update Movie</button>
        </form>
      </div>
      
      {/* Footer */}
      <footer className="text-center p-3 mt-5" style={{ backgroundColor: '#b71c1c' }}>
        <p>&copy; 2025 Maneesh Madhusudhanan | maneeshmadhusudhanan@2025KBA</p>
      </footer>
    </div>
  );
}
