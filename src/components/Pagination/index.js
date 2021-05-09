import React from "react";
import { ChevronLeft, ChevronRight } from "react-feather";
import * as S from "./styles";

const Pagination = ({ changePage, page }) => {
  return (
    <S.PaginationContainer>
      <S.Button onClick={() => changePage(page - 1)} disabled={page === 1}>
        <ChevronLeft />
        Anterior
      </S.Button>
      <S.Button onClick={() => changePage(page + 1)}>
        Próximo
        <ChevronRight />
      </S.Button>
    </S.PaginationContainer>
  );
};

export default Pagination;
