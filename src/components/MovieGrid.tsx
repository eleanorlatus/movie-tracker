import { Dispatch, SetStateAction, useState } from "react";
import { Movie } from "./Models";
import MovieCard from "./MovieCard";

type MovieGridProps = {
  movieList: Movie[];
  setMovieList: Dispatch<SetStateAction<Movie[]>>;
};

const MovieGrid = ({ movieList, setMovieList }: MovieGridProps) => {
  const [sortBy, setSortBy] = useState<string>("");

  let sortedMovies = [...movieList];

  if (sortBy === "Liked") {
    sortedMovies = [...movieList].sort(
      (a: Movie, b: Movie) => Number(b.liked) - Number(a.liked)
    );
  } else if (sortBy === "Popularity") {
    sortedMovies = [...movieList].sort(
      (a: Movie, b: Movie) => b.vote_average - a.vote_average
    );
  } else if (sortBy === "A-Z") {
    sortedMovies = [...movieList].sort(function (a: Movie, b: Movie) {
      const textA = a.original_title.toUpperCase();
      const textB = b.original_title.toUpperCase();
      return textA < textB ? -1 : textA > textB ? 1 : 0;
    });
  }

  return (
    <div className="px-24">
      <div className="form-control w-full max-w-xs py-4">
        <label className="label">
          <span className="label-text">Sort By</span>
        </label>
        <select
          className="select select-bordered"
          onChange={(event) => setSortBy(event.target.value)}
        >
          <option disabled>Sort by</option>
          <option>Popularity</option>
          <option>A-Z</option>
          <option>Liked</option>
        </select>
      </div>
      <div className="flex flex-row gap-2 flex-wrap justify-around">
        {sortedMovies.map((movie: Movie) => (
          <MovieCard movie={movie} key={movie.id} setMovieList={setMovieList} />
        ))}
      </div>
    </div>
  );
};

export default MovieGrid;
