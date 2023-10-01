import { useEffect, useState } from "react";
import Header from "./components/Header";
import MovieGrid from "./components/MovieGrid";
import { Movie } from "./components/Models";

function App() {
  const [movieList, setMovieList] = useState<Movie[]>([]);

  useEffect(() => {
    const getMovieData = async () => {
      const res = await fetch(
        `https://api.themoviedb.org/3/movie/top_rated?api_key=c6888832bf05569c48c9dc5bf36c6fd7`
      );
      const data = await res.json();
      const newArr = data.results.map((movie: Movie) => ({
        ...movie,
        liked: false,
      }));
      setMovieList(newArr);
    };
    getMovieData();
  }, []);

  return (
    <>
      <Header />
      <MovieGrid movies={movieList} setMovieList={setMovieList} />
    </>
  );
}

export default App;
