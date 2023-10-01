import { Dispatch, SetStateAction } from "react";
import { Movie } from "./Models";
import MovieCard from "./MovieCard";

type MovieGridProps = {
  movies: Movie[];
  setMovieList: Dispatch<SetStateAction<Movie[]>>;
};

const MovieGrid = (props: MovieGridProps) => {
  return (
    <div className="flex flex-row gap-4 p-24 flex-wrap justify-between">
      {props.movies.map((movie: Movie) => (
        <MovieCard
          movie={movie}
          key={movie.id}
          setMovieList={props.setMovieList}
        />
      ))}
    </div>
  );
};

export default MovieGrid;
