


'use client';

import { useState } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';

export default function DeleteMovies() {
    const [selectedMovie, setSelectedMovie] = useState('');

    const handleDelete = (e) => {
        e.preventDefault();
        if (selectedMovie) {
            alert(`Movie ${selectedMovie} deleted successfully!`);
            setSelectedMovie('');
        } else {
            alert('Please select a movie to delete.');
        }
    };

    return (
        <div>
            {/* Navbar */}
            <nav className="navbar navbar-expand-lg navbar-dark" style={{ background: 'linear-gradient(90deg, #b71c1c, #e53935)' }}>
                <div className="container">
                    <a className="navbar-brand" href="#">Marvel Studios</a>
                    <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNav">
                        <span className="navbar-toggler-icon"></span>
                    </button>
                    <div className="collapse navbar-collapse" id="navbarNav">
                        <ul className="navbar-nav ml-auto">
                            <li className="nav-item"><a className="nav-link" href="/user_dashboard">User Dashboard</a></li>
                            <li className="nav-item"><a className="nav-link" href="/">Home</a></li>
                        </ul>
                    </div>
                </div>
            </nav>

            {/* Content */}
            <div className="container mt-5 p-4" style={{ background: '#212121', borderRadius: '10px', boxShadow: '0 4px 12px rgba(0, 0, 0, 0.5)' }}>
                <h2 className="text-center" style={{ color: '#fdd835', fontWeight: 'bold' }}>Delete Movies</h2>
                <form onSubmit={handleDelete}>
                    <div className="form-group mt-4">
                        <label htmlFor="movieSelect" style={{ fontWeight: 'bold' }}>Select Movie to Delete</label>
                        <select className="form-control" id="movieSelect" value={selectedMovie} onChange={(e) => setSelectedMovie(e.target.value)}>
                            <option value="">Select a movie</option>
                            <option value="Iron Man">Iron Man</option>
                            <option value="Ant Man">Ant Man</option>
                            <option value="Spider Man">Spider Man</option>
                            <option value="Thor">Thor</option>
                            <option value="Hulk">Hulk</option>
                            <option value="Black Panther">Black Panther</option>
                        </select>
                    </div>
                    <button type="submit" className="btn btn-danger btn-block mt-4" style={{ background: 'linear-gradient(90deg, #fdd835, #c6a700)', fontWeight: 'bold' }}>Delete Movie</button>
                </form>
            </div>

            {/* Footer */}
            <footer className="text-center p-3 mt-5" style={{ backgroundColor: '#b71c1c', color: '#ffffff' }}>
                <p>&copy; 2023 Maneesh Madhusudhanan | maneeshmadhusudhanan@2025KBA</p>
            </footer>
        </div>
    );
}
