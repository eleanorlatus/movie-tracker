import { useEffect, useState } from "react";
import Header from "./components/Header";
import MovieGrid from "./components/MovieGrid";
import { Movie } from "./components/Models";

function App() {
  const [movieList, setMovieList] = useState<Movie[]>([]);
  const [apiRequest, setApiRequest] = useState("topRated");

  useEffect(() => {
    let url = "";
    if (apiRequest === "topRated") {
      url =
        "https://api.themoviedb.org/3/movie/top_rated?api_key=c6888832bf05569c48c9dc5bf36c6fd7";
    } else if (apiRequest === "trendingThisWeek") {
      url =
        "https://api.themoviedb.org/3/trending/movie/week?api_key=c6888832bf05569c48c9dc5bf36c6fd7";
    }
    getMovieData(url);
  }, [apiRequest]);

  const getMovieData = async (url: string) => {
    const res = await fetch(url);
    const data = await res.json();
    setMovieList(
      data.results.map((movie: Movie) => ({
        ...movie,
        liked: false,
      }))
    );
  };

  return (
    <>
      <Header />
      <button className="btn" onClick={() => setApiRequest("topRated")}>
        Top Rated
      </button>
      <button className="btn" onClick={() => setApiRequest("trendingThisWeek")}>
        Trending this week
      </button>
      <MovieGrid movieList={movieList} setMovieList={setMovieList} />
    </>
  );
}

export default App;
