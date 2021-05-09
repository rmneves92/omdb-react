import React from "react";
import * as S from "./styles";

const Button = ({ children, disabled, handleClick }) => {
  return (
    <S.Button disabled={disabled} onClick={() => handleClick()}>
      {children}
    </S.Button>
  );
};

export default Button;
