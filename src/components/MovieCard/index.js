import React from "react";
import * as S from "./styles";

const MovieCard = ({ Title, Year, imdbID, Poster, open }) => {
  return (
    <S.Card onClick={() => open(imdbID)}>
      <S.Poster src={Poster}></S.Poster>
      <h3>{Title}</h3>
      <span>{Year}</span>
    </S.Card>
  );
};

export default MovieCard;
