import React from "react";
import Home from "../pages/Home";
import { render, screen, waitFor } from "@testing-library/react";
import "@testing-library/jest-dom/extend-expect";
import mockAxios from "axios";
import userEvent from "@testing-library/user-event";
import { Provider } from "react-redux";
import store from "../redux/store";

const fakeMovies = [
  {
    Poster:
      "https://m.media-amazon.com/images/M/MV5BOTY4YjI2N2MtYmFlMC00ZjcyLTg3YjEtMDQyM2ZjYzQ5YWFkXkEyXkFqcGdeQXVyMTQxNzMzNDI@._V1_SX300.jpg",
    Title: "Batman Begins",
    Type: "movie",
    Year: "2005",
    imdbID: "tt0372784",
  },
  {
    Poster:
      "https://m.media-amazon.com/images/M/MV5BYThjYzcyYzItNTVjNy00NDk0LTgwMWQtYjMwNmNlNWJhMzMyXkEyXkFqcGdeQXVyMTQxNzMzNDI@._V1_SX300.jpg",
    Title: "Batman v Superman: Dawn of Justice",
    Type: "movie",
    Year: "2016",
    imdbID: "tt2975590",
  },
];

describe("Home Page", () => {
  it("should call axios and return movies without errors", async () => {
    mockAxios.get.mockImplementation((url) => {
      switch (url) {
        case `/?s=batman&type=movie&page=1`:
          return Promise.resolve({ data: { Search: fakeMovies } });
        case `/?s=&type=movie&page=1`:
          return Promise.resolve({ data: { genres: [] } });
        default:
          return Promise.reject(new Error("not found"));
      }
    });

    render(
      <Provider store={store}>
        <Home />
      </Provider>
    );
    const inputElement = screen.getByTestId("input");
    const buttonElement = screen.getByTestId("button");

    userEvent.clear(inputElement);
    userEvent.click(buttonElement);

    expect(mockAxios.get).toHaveBeenCalledTimes(2);

    await waitFor(() =>
      expect(screen.queryAllByTestId("movie-item").length).toEqual(0)
    );

    userEvent.type(inputElement, "batman");
    userEvent.click(buttonElement);

    await waitFor(() =>
      expect(screen.getAllByTestId("movie-item").length).toEqual(2)
    );
  });
});
