import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import api from "../../services/api";
import { useHistory } from "react-router-dom";
import { setMovieId, setCatalog } from "../../redux/moviesSlice";
import * as S from "./styles";
import { motion } from "framer-motion";
import {
  animationOne,
  animationTwo,
  animationThree,
  transition,
} from "../../animations";

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
          // setMovie(res.data);

          dispatch(setCatalog(res.data.Search));

          history.push("/catalog");
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

  return (
    <motion.section
      initial="out"
      animate="in"
      exit="out"
      variants={animationOne}
      transition={transition}
    >
      <S.InputWrapper>
        <S.Input
          type="search"
          placeholder="Buscar filme..."
          onChange={(e) => handleChange(e.target.value)}
        />
      </S.InputWrapper>

      <S.Button onClick={() => searchMovie()}>Buscar</S.Button>
    </motion.section>
  );
};

export default Home;
