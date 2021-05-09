import styled from "styled-components";

export const Card = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  cursor: pointer;
  color: #fff;

  &:hover img {
    transform: scale(1.1);
  }
`;

export const PosterContainer = styled.div`
  display: inline-block;
  overflow: hidden;
  box-shadow: rgba(0, 0, 0, 0.35) 0px 5px 15px;
`;

export const Poster = styled.img`
  object-fit: contain;
  width: 100%;
  display: block;
  transition: transform 0.5s ease;
`;

export const Title = styled.h2`
  padding: 12px;
  font-weight: 400; ;
`;
