import React from "react";
import * as S from "./styles";

const Button = ({ children, handleClick }) => {
  return <S.Button onClick={() => handleClick()}>{children}</S.Button>;
};

export default Button;
