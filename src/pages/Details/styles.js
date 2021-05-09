import styled from "styled-components";

export const DetailsContainer = styled.div`
  display: flex;
`;

export const MoviePoster = styled.img``;

export const MovieInfo = styled.div`
  display: flex;
  flex-direction: column;
  margin-left: 12px;
`;

// ============

export const Container = styled.div`
  display: flex;
  justify-content: center;
  flex-wrap: wrap;
  color: #fff;

  h2 {
    font-weight: 700;
  }
`;

export const PosterContainer = styled.div`
  height: 100%;
`;

export const Poster = styled.img`
  margin-bottom: 24px;
`;

export const MovieDetails = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
  margin-left: 36px;

  > * {
    margin-bottom: 20px;
  }

  @media (min-width: 640px) {
    width: 50%;
  }
`;

export const MovieTitle = styled.h2`
  font-size: 36px;
`;

export const MovieOverview = styled.p`
  font-size: 16px;
  line-height: 1.2;
`;

export const TagGenre = styled.div`
  border: 2px solid #fff;
  border-radius: 20px;
  padding: 5px 10px;
  margin-right: 8px;
  margin-top: 8px;
`;

export const Score = styled.div`
  display: flex;
  align-items: center;

  small {
    font-size: 12px;
  }

  > * {
    margin-right: 8px;
    font-weight: 500;
  }
`;

export const ReleaseDate = styled.span`
  display: inline;
`;

export const GenreContainer = styled.span`
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
  justify-content: flex-start;
`;

export const Genre = styled.span`
  border: 2px solid #fff;
  border-radius: 20px;
  padding: 5px 10px;
  margin-right: 8px;
  margin-top: 8px;
`;
