import React from "react";
import * as S from "./styles";

const MovieCard = ({ Title, imdbID, Poster, open }) => {
  return (
    <S.Card onClick={() => open(imdbID)}>
      <S.PosterContainer>
        <S.Poster src={Poster} alt={Title}></S.Poster>
      </S.PosterContainer>

      <S.Title>{Title}</S.Title>
    </S.Card>
  );
};

export default MovieCard;
