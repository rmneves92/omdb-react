import styled from "styled-components";

export const Button = styled.button`
  display: flex;
  align-items: center;
  padding: 0 10px;
  color: #fff;
  cursor: pointer;
  background: none;
  border: none;
  font: inherit;
  outline: inherit;
  margin-bottom: 24px;

  &:disabled {
    color: #808080;
  }
`;

export const PaginationContainer = styled.div`
  display: flex;
`;
