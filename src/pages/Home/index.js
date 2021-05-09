import React, { useEffect, useState, useRef } from "react";
import { useDispatch, useSelector } from "react-redux";
import api from "../../services/api";
import { useHistory } from "react-router-dom";
import { setMovieId, setCatalog, setTitle } from "../../redux/moviesSlice";
import * as S from "./styles";
import { motion } from "framer-motion";
import Button from "../../components/Button";
import Pagination from "../../components/Pagination";
import {
  animationOne,
  animationTwo,
  animationThree,
  transition,
} from "../../animations";

import MovieCard from "../../components/MovieCard";

const Home = (props) => {
  const dispatch = useDispatch();
  const history = useHistory();
  const inputRef = useRef();
  const moviesSlice = useSelector((state) => state.movies);

  const [page, setPage] = useState(1);

  useEffect(() => {
    loadMovies(moviesSlice.title);
  }, [page]);

  useEffect(() => {
    inputRef.current.focus();
  }, []);

  // const [value, setValue] = useState("captain");

  const loadMovies = (query) => {
    try {
      api
        .get(`/?s=${query}&type=movie&page=${page}`)
        .then((res) => {
          console.log(res);
          if (res.data.Search?.length > 0) {
            dispatch(setCatalog(res.data.Search));
            // history.push("/catalog");
          }
        })
        .catch((err) => {
          console.error(err);
        });
    } catch (err) {
      console.error(err);
    }
  };

  const handleChange = (value) => {
    // setValue(value);
    dispatch(setTitle(value));
  };

  const searchMovie = () => {
    loadMovies(moviesSlice.title);
  };

  const handleKeyDown = (e) => {
    console.log("down");
    if (e.key === "Enter") {
      loadMovies(moviesSlice.title);
    }
  };

  const handleClick2 = (id) => {
    console.log("====>> id do filme: ", id);
    dispatch(setMovieId(id));
    history.push("/details");
  };

  return (
    <motion.section
      initial="out"
      animate="in"
      exit="out"
      variants={animationOne}
      transition={transition}
    >
      <S.Label>Digite o título do filme</S.Label>
      <S.InputWrapper>
        <S.Input
          ref={inputRef}
          value={moviesSlice.title}
          type="search"
          placeholder="Buscar filme..."
          onChange={(e) => handleChange(e.target.value)}
          onKeyDown={(e) => handleKeyDown(e)}
        />

        <Button handleClick={() => searchMovie()} disabled={!moviesSlice.title}>
          Buscar
        </Button>
      </S.InputWrapper>

      <motion.section
        initial="out"
        animate="in"
        exit="out"
        variants={animationOne}
        transition={transition}
      >
        {moviesSlice.catalog.length >= 10 && (
          <Pagination changePage={setPage} page={page} />
        )}
        <motion.section
          initial="out"
          animate="in"
          exit="out"
          variants={animationThree}
          transition={transition}
        >
          <S.Grid>
            {moviesSlice.catalog.map((m, i) => (
              <MovieCard key={i} {...m} open={handleClick2} />
            ))}
          </S.Grid>
        </motion.section>
      </motion.section>
    </motion.section>
  );
};

export default Home;
