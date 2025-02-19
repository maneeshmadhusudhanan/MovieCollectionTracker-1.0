"use client";
import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";

const movies = [
  { title: "Ant-Man", image: "/images/ant-man-15jeamc21qynar6g.jpg" },
  { title: "Spider Man", image: "/images/SPIDERMAN.jpg" },
  {
    title: "Captain America",
    image: "/images/captain-america-captain-america-thumbnail.jpg",
  },
  { title: "Thor", image: "/images/THOR.jpg" },
  { title: "Black Panther", image: "/images/blackpanther.jpeg" },
];

const Page = () => {
  return (
    <div className="container py-5">
      <h1 className="text-center mb-5 mt-5">Marvel Movie Collection</h1>
      <div className="row mb-5 mt-5">
        {movies.map((movie, index) => (
          <div key={index} className="col">
            <div className="card">
              <img
                src={movie.image}
                className="card-img-top"
                alt={movie.title}
                unoptimized={true}
              />
              <div className="card-body text-center">
                <h5 className="card-title">{movie.title}</h5>
                <a href="#" className="btn btn-danger">
                  Add to Collection
                </a>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Page;
