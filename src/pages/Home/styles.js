import styled from "styled-components";

export const Container = styled.section`
  overflow: scroll;
  max-height: calc(100vh - 100px);
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

export const InputWrapper = styled.div`
  position: relative;
  margin-bottom: 45px;
  flex-wrap: wrap;
  display: flex;
`;

export const Input = styled.input`
  font-size: 18px;
  padding: 10px;
  display: block;
  width: 300px;
  border: none;
  border-bottom: 1px solid #757575;
  &:focus {
    outline: none;
  }

  @media (max-width: 1024px) {
    width: 100%;
  }
`;

export const Label = styled.h1`
  font-size: 32px;
  color: #fff;
  margin-bottom: 12px;

  @media (max-width: 1024px) {
    font-size: 24px;
  }
`;

export const Grid = styled.div`
  display: grid;
  gap: 34px;
  grid-template-columns: repeat(3, 1fr);
  grid-auto-rows: minmax(100px, auto);

  @media (max-width: 1024px) {
    grid-template-columns: repeat(2, 1fr);
  }
`;
