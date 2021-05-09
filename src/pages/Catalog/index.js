import React, { useState, useEffect } from "react";
import { useHistory } from "react-router-dom";
import { motion } from "framer-motion";
import { useDispatch, useSelector } from "react-redux";
import MovieCard from "../../components/MovieCard";
import * as S from "./styles";
import { setMovieId, setCatalog } from "../../redux/moviesSlice";
import {
  animationOne,
  animationTwo,
  animationThree,
  transition,
} from "../../animations";

const Catalog = ({ movies }) => {
  const history = useHistory();
  const dispatch = useDispatch();
  const moviesSlice = useSelector((state) => state.movies);

  // useEffect(() => {
  //   effect
  //   return () => {
  //     cleanup
  //   }
  // }, [input])

  const handleClick = (id) => {
    console.log("====>> id do filme: ", id);
    dispatch(setMovieId(id));
    history.push("/details");
  };

  console.log("___________________ catalogo de filmes: ", moviesSlice.catalog);
  return (
    <motion.section
      initial="out"
      animate="in"
      exit="out"
      variants={animationOne}
      transition={transition}
    >
      <S.Grid>
        {moviesSlice.catalog.map((m) => (
          <MovieCard {...m} open={handleClick} />
        ))}
      </S.Grid>
    </motion.section>
  );
};

export default Catalog;
