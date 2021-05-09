import React from "react";
import * as S from "./styles";
import { Link } from "react-router-dom";

const Header = (props) => {
  return (
    <S.HeaderContainer>
      <S.Nav>
        <span>teste</span>

        <div>
          <Link to="/">Home </Link>
          <Link to="/catalog">Catalogo </Link>
          <Link to="/details">Detalhes </Link>
        </div>
      </S.Nav>
    </S.HeaderContainer>
  );
};

export default Header;
