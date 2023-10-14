import { useEffect, useState } from "react";
import Header from "./Header";
import MovieGrid from "./MovieGrid";
import { Movie } from "./Models";
import Toolbar from "./Toolbar";

function App() {
  const [movieList, setMovieList] = useState<Movie[]>([]);
  const [apiRequest, setApiRequest] = useState("topRated");
  const [theme, setTheme] = useState<"light" | "dark">("light");

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

  useEffect(() => {
    document.querySelector("html").setAttribute("data-theme", theme);
  }, [theme]);

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
      <Toolbar
        setApiRequest={setApiRequest}
        setTheme={setTheme}
        theme={theme}
      />
      <MovieGrid movieList={movieList} setMovieList={setMovieList} />
    </>
  );
}

export default App;
