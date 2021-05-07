import React, { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import api from "../../services/api";

const Details = (props) => {
  const moviesSlice = useSelector((state) => state.movies);
  const [movie, setMovie] = useState({});

  useEffect(() => {
    if (moviesSlice.data) {
      loadDetails(moviesSlice.data);
    }
  }, [moviesSlice.data]);

  const loadDetails = (id) => {
    try {
      api
        .get(`/?i=${id}`)
        .then((res) => {
          console.log("________details: ", res.data);
          setMovie(res.data);
        })
        .catch((err) => {
          console.error(err);
        });
    } catch (err) {
      console.error(err);
    }
  };

  return (
    <>
      <h1> {movie.Title} </h1>

      <p>Ano: {movie.Year}</p>
      <p>Nota: {movie.imdbRating}</p>
      <p>Data: {movie.Released}</p>
      <p>Genero: {movie.Genre}</p>
    </>
  );
};

export default Details;
