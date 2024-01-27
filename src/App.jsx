import axios from "axios";
import React, { useEffect, useState } from "react";
import "./App.css";
import MoveisCard from "./Componats/MoveisCard";
import SeSearchIcon from "./assets/search.svg";
                                              
// 65a3abe5
const API_KEY = `http://www.omdbapi.com/?apikey=65a3abe5`;
const App = () => {
  const [movies, setmovies] = useState([]);
  const [search, setsearch] = useState("");
  const searchmovie = async (titel) => {
    const response = await axios.get(`${API_KEY}&s=${titel}`);
    setmovies(response.data.Search);
    console.log(movies);
  };

  useEffect(() => {
    searchmovie();
  }, []);

  return (
    <>
      <div className="app">
        <h1>MovieLand</h1>

        <div className="search">
          <input
            value={search}
            onChange={(e) => setsearch(e.target.value)}
            placeholder="Search for movies"
          />
          <img
            src={SeSearchIcon}
            alt="search"
            onClick={() => searchmovie(search)}
          />
        </div>

        {movies?.length > 0 ? (
          <div className="container">
            {movies.map((movie) => (
              <MoveisCard movie={movie} />
            ))}
          </div>
        ) : (
          <div className="empty">
            <h2>No movies found</h2>
          </div>
        )}
      </div>
    </>
  );
};

export default App;
