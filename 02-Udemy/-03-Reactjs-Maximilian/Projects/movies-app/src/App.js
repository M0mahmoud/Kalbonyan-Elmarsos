import React, { useState, useEffect, useCallback } from "react";

import MoviesList from "./components/MoviesList";
import Loading from "./components/Loading/Loading";
import AddMovie from "./components/AddMovie/AddMovie";
import "./App.css";

function App() {
  const [movies, setMovies] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState(null);

  const fetchMovieHandler = useCallback(async () => {
    setIsLoading(true);
    setError(null);
    try {
      const response = await fetch(
        "https://mahmoud-react-default-rtdb.firebaseio.com/movies.json"
      );
      if (!response.ok) {
        throw new Error("Error ⊙﹏⊙");
      }

      const date = await response.json();

      //To Show Ur Date U Send
      const loadedMovies = [];
      for (const key in date) {
        loadedMovies.push({
          id: key,
          title: date[key].title,
          openingText: date[key].openingText,
          releaseDate: date[key].releaseDate,
        });
      }
      setMovies(loadedMovies);
      // Here Again For We Get Some Date
    } catch (error) {
      setError(error.message);
    }
    setIsLoading(false);
  }, []);

  useEffect(() => {
    fetchMovieHandler();
  }, [fetchMovieHandler]);

  async function addMovieHandler(movie) {
    const response = await fetch(
      "https://mahmoud-react-default-rtdb.firebaseio.com/movies.json",
      {
        method: "POST",
        body: JSON.stringify(movie),
        headers: {
          "content-type": "application.json",
        },
      }
    );
    const date = await response.json();
    console.log(date);
  }

  let content = <h2>Found No Movies.</h2>;

  if (movies.length > 0) {
    content = <MoviesList movies={movies} />;
  }
  if (error) {
    content = <h2>{error}</h2>;
  }
  if (isLoading) {
    content = <Loading />;
  }

  return (
    <React.Fragment>
      <section>
        <AddMovie onAddMovie={addMovieHandler} />
      </section>
      <section>
        <button onClick={fetchMovieHandler}>Fetch Movies</button>
      </section>
      <section>{content}</section>
    </React.Fragment>
  );
}

export default App;
