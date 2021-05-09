import React from "react";
import Details from "../pages/Details";
import { render, screen, waitFor } from "@testing-library/react";
import "@testing-library/jest-dom/extend-expect";
import userEvent from "@testing-library/user-event";
import mockAxios from "axios";
import { Provider } from "react-redux";
import store from "../redux/store";
import { setMovieId } from "../redux/moviesSlice";

jest.mock("react-router-dom", () => ({
  ...jest.requireActual("react-router-dom"),
  useParams: () => ({
    id: "460465",
  }),
  useRouteMatch: () => ({ url: "/details/460465" }),
}));

const fakeMovie = {
  Actors: "Christian Bale, Michael Caine, Liam Neeson, Katie Holmes",
  Awards: "Nominated for 1 Oscar. Another 13 wins & 78 nominations.",
  BoxOffice: "$206,852,432",
  Country: "USA, UK",
  DVD: "09 Sep 2009",
  Director: "Christopher Nolan",
  Genre: "Action, Adventure",
  Language: "English, Mandarin",
  Metascore: "70",
  Plot:
    "When his parents are killed, billionaire playboy Bruce Wayne relocates to Asia where he is mentored by Henri Ducard and Ra's Al Ghul in how to fight evil. When learning about the plan to wipe out evil in Gotham City by Ducard, Bruce prevents this plan from getting any further and heads back to his home. Back in his original surroundings, Bruce adopts the image of a bat to strike fear into the criminals and the corrupt as the icon known as 'Batman'. But it doesn't stay quiet for long.",
  Poster:
    "https://m.media-amazon.com/images/M/MV5BOTY4YjI2N2MtYmFlMC00ZjcyLTg3YjEtMDQyM2ZjYzQ5YWFkXkEyXkFqcGdeQXVyMTQxNzMzNDI@._V1_SX300.jpg",
  Production: "Warner Brothers, Di Bonaventura Pictures",
  Rated: "PG-13",
  Ratings: [
    { Source: "Internet Movie Database", Value: "8.2/10" },
    { Source: "Rotten Tomatoes", Value: "84%" },
    { Source: "Metacritic", Value: "70/100" },
  ],
  Released: "15 Jun 2005",
  Response: "True",
  Runtime: "140 min",
  Title: "Batman Begins",
  Type: "movie",
  Website: "N/A",
  Writer:
    "Bob Kane (characters), David S. Goyer (story), Christopher Nolan (screenplay), David S. Goyer (screenplay)",
  Year: "2005",
  imdbID: "tt0372784",
  imdbRating: "8.2",
  imdbVotes: "1,327,215",
};

describe("Details Page", () => {
  it("should display movie details without errors", async () => {
    mockAxios.get.mockImplementation((url) => {
      switch (url) {
        case `/?i=tt0372784&plot=full&type=movie`:
          return Promise.resolve({ data: fakeMovie });

        default:
          return Promise.reject(new Error("not found"));
      }
    });

    store.dispatch(setMovieId("tt0372784"));

    render(
      <Provider store={store}>
        <Details />
      </Provider>
    );

    expect(mockAxios.get).toHaveBeenCalledTimes(1);
    expect(mockAxios.get).toHaveBeenCalledWith(
      `/?i=tt0372784&plot=full&type=movie`
    );

    await waitFor(() => {
      expect(screen.getByTestId("movie-title")).toHaveTextContent(
        /Batman Begins/i
      );
    });
  });
});
