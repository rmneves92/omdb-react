import styled from "styled-components";

export const Container = styled.section`
  /* margin-top: 200px;

  width: 100%;
  padding-right: 1rem;
  padding-left: 1rem;
  margin-right: auto;
  margin-left: auto;

  max-width: 60rem;

  border: 3px dashed yellow; */

  border: 3px dashed yellow;
  display: flex;
  align-items: center;
  height: 100%;
`;

export const Hero = styled.div`
  border: 2px solid purple;
  padding-top: 0rem;
  padding-bottom: 0rem;

  position: relative;
  width: 100%;

  margin-right: auto;
  margin-left: auto;

  max-width: 60rem;

  padding: 8rem;
`;

export const Input = styled.input`
  border: 0;
  background-color: inherit;
  border-bottom: 1px solid #fff;

  &:focus {
    outline: none;
  }
`;
