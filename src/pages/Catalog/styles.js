import styled from "styled-components";

export const Grid = styled.div`
  display: grid;
  gap: 34px;
  grid-template-columns: repeat(3, 1fr);
  grid-auto-rows: minmax(100px, auto);
  overflow-y: scroll;
  max-height: 80vh;
`;
