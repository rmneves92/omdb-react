import moment from "moment";
import React, { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import api from "../../services/api";
import { motion } from "framer-motion";
import {
  animationOne,
  animationTwo,
  animationThree,
  transition,
} from "../../animations";
import * as S from "./styles";

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
        .get(`/?i=${id}&plot=full`)
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
    <motion.section
      initial="out"
      animate="in"
      exit="out"
      variants={animationTwo}
      transition={transition}
    >
      <S.Container>
        <S.PosterContainer>
          {movie.Poster && (
            <S.Poster src={movie.Poster} alt={movie.Title}></S.Poster>
          )}
        </S.PosterContainer>

        <S.MovieDetails>
          <S.MovieTitle data-testid="movie-title">{movie.Title}</S.MovieTitle>

          <S.Score>
            {/* <Star color="gold" /> */}
            <span>
              {movie.imdbRating}/10 ({movie.imdbVotes?.replace(/,/g, ".")}{" "}
              votes)
            </span>
          </S.Score>

          <S.GenreContainer>
            {movie.Genre &&
              movie.Genre.split(",").map((genre, index) => (
                <S.Genre key={index}>{genre}</S.Genre>
              ))}
          </S.GenreContainer>

          <S.MovieOverview>{movie.Plot}</S.MovieOverview>

          <S.BottomInfo>
            <S.SecondaryInfo>
              <S.SecondaryInfoTitle>Data</S.SecondaryInfoTitle>
              {moment(movie.Released, "DD MMM YYYY").format("DD/MM/YYYY")}
            </S.SecondaryInfo>

            <S.SecondaryInfo>
              <S.SecondaryInfoTitle>Diretor</S.SecondaryInfoTitle>
              {movie.Director}
            </S.SecondaryInfo>

            <S.SecondaryInfo>
              <S.SecondaryInfoTitle>Diretor</S.SecondaryInfoTitle>
              {movie.Runtime}
            </S.SecondaryInfo>
          </S.BottomInfo>
        </S.MovieDetails>
      </S.Container>
    </motion.section>
  );
};

export default Details;
