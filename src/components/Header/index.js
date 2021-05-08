import React from "react";
import * as S from "./styles";

const Header = (props) => {
  return (
    <S.HeaderContainer>
      <S.Nav>
        <span>teste</span>
        <div>
          <a>link1</a>
          <a>link2</a>
          <a>link3</a>
        </div>
      </S.Nav>
    </S.HeaderContainer>
  );
};

export default Header;
