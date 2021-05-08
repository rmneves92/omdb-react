import moment from "moment";
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

  console.log({ movie });
  return (
    <>
      <h1> {movie.Title} </h1>

      <p>Ano: {movie.Year}</p>
      <p>
        Nota: {movie.imdbRating}/10 ( {movie.imdbVotes?.replace(/,/g, ".")}{" "}
        votos)
      </p>
      <p>Data: {moment(movie.Released, "DD MMM YYYY").format("DD/MM/YYYY")}</p>
      <p>Genero: {movie.Genre}</p>

      <img src={movie.Poster} alt={movie.Title}></img>
    </>
  );
};

export default Details;
