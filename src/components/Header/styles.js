import styled from "styled-components";

export const HeaderContainer = styled.header`
  position: fixed;
  width: 100%;
  height: 100px;
  z-index: 10;
  border: 2px dashed white;
  display: flex;
  align-items: center;
`;

export const Nav = styled.nav`
  display: flex;
  justify-content: space-between;
  align-items: center;
  color: #fff;

  border: 2px dashed green;
  width: 100%;
  padding: 0 42px;
`;
