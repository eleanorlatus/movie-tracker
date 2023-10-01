import { Movie } from "./Models";
import MovieCard from "./MovieCard";

type MovieGridProps = {
  movies: Movie[];
};

const MovieGrid = (props: MovieGridProps) => {
  console.log(props.movies);
  return (
    <div className="flex flex-row gap-4 p-24 flex-wrap justify-between">
      {props.movies.map((movie: Movie) => (
        <MovieCard movie={movie} key={movie.id} />
      ))}
    </div>
  );
};

export default MovieGrid;
