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

export const Button = styled.button`
  color: #ffffff;
  cursor: pointer;
  border: none;
  background: none;
  min-height: 48px;
  font-size: 1rem;
  line-height: 1;
  padding: 0.75em 1.875em;
  box-shadow: inset 0 0 0px 2px rgb(255 255 255 / 20%);
`;

// export const Group = styled.div`
//   position: relative;
//   margin-bottom: 45px;

//   > input {
//     font-size: 18px;
//     padding: 10px 10px 10px 5px;
//     display: block;
//     width: 300px;
//     border: none;
//     border-bottom: 1px solid #757575;

//     &:focus {
//       outline: none;
//     }

//     &:focus ~ label,
//     &:valid ~ label {
//       top: -20px;
//       font-size: 14px;
//       color: #5264ae;
//     }
//   }

//   > label {
//     color: #999;
//     font-size: 18px;
//     font-weight: normal;
//     position: absolute;
//     pointer-events: none;
//     left: 5px;
//     top: 10px;
//     transition: 0.2s ease all;
//     -moz-transition: 0.2s ease all;
//     -webkit-transition: 0.2s ease all;
//   }

//   .bar {
//     position: relative;
//     display: block;
//     width: 300px;

//     &::before,
//     &::after {
//       content: "";
//       height: 2px;
//       width: 0;
//       bottom: 1px;
//       position: absolute;
//       background: #5264ae;
//       transition: 0.2s ease all;
//       -moz-transition: 0.2s ease all;
//       -webkit-transition: 0.2s ease all;
//     }

//     &::before {
//       left: 50%;
//     }

//     &::after {
//       right: 50%;
//     }
//   }
// `;
