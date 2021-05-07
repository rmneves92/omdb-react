import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import api from "../../services/api";
import { useHistory } from "react-router-dom";
import {
  setMovieId,
  fetch,
  fetchFailure,
  fetchSuccess,
} from "../../redux/moviesSlice";

const Home = (props) => {
  const dispatch = useDispatch();
  const moviesSlice = useSelector((state) => state.movies);
  const history = useHistory();

  const [movie, setMovie] = useState(null);
  const [value, setValue] = useState("");

  const loadMovies = (query) => {
    try {
      api
        .get(`/?s=${query}`)
        .then((res) => {
          console.log("________movies: ", res.data);
          setMovie(res.data);
        })
        .catch((err) => {
          console.error(err);
        });
    } catch (err) {
      console.error(err);
    }
  };

  const handleChange = (value) => {
    setValue(value);
  };

  const searchMovie = () => {
    loadMovies(value);
  };

  const openDetails = (id) => {
    dispatch(setMovieId(id));
    history.push("/details");
  };

  return (
    <>
      <h1>Home</h1>

      <input
        type="search"
        placeholder="Buscar filme..."
        onChange={(e) => handleChange(e.target.value)}
      />
      <button onClick={() => searchMovie()}>Buscar</button>
      <button onClick={() => console.log(moviesSlice)}>Get details</button>

      <div>
        {movie &&
          movie.Search.map((m) => (
            <div onClick={() => openDetails(m.imdbID)}>
              <h3>{m.Title}</h3>
              <span>{m.Year}</span>
            </div>
          ))}
      </div>
    </>
  );
};

export default Home;
