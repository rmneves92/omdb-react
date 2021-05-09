import styled from "styled-components";

export const Container = styled.section`
  display: flex;
  align-items: center;
  height: 100%;
  width: 100%;
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
`;

export const Input = styled.input`
  font-size: 18px;
  padding: 10px 10px 10px 5px;
  display: block;
  width: 300px;
  border: none;
  border-bottom: 1px solid #757575;
  &:focus {
    outline: none;
  }
`;
