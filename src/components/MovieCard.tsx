import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faHeart } from "@fortawesome/free-regular-svg-icons";
import { faHeart as faHeartSolid } from "@fortawesome/free-solid-svg-icons";
import { Movie } from "./Models";
// import { useLocalStorage } from "../hooks/useLocalStorage";
import { Dispatch, SetStateAction } from "react";

type MovieCardProps = {
  movie: Movie;
  setMovieList: Dispatch<SetStateAction<Movie[]>>;
};

const MovieCard = ({ movie, setMovieList }: MovieCardProps) => {
  // TODO: add liked movies to localstorage

  const handleClick = () => {
    console.log("you have liked", movie.original_title);
    setMovieList((prev) =>
      prev.map((movielist) =>
        movielist.original_title === movie.original_title
          ? { ...movielist, liked: true }
          : movielist
      )
    );
  };

  return (
    <>
      <div className="card w-44 bg-base-100 shadow-xl">
        <figure>
          <img
            src={`https://image.tmdb.org/t/p/original${movie.poster_path}`}
            alt="Movie poster"
          />
        </figure>
        <div className="card-body">
          <h2 className="card-title">{movie.original_title}</h2>
        </div>
        <div className="card-actions justify-end">
          {!movie.liked ? (
            <FontAwesomeIcon
              icon={faHeart}
              size="xl"
              className="heart-icon"
              onClick={handleClick}
            />
          ) : (
            <FontAwesomeIcon
              icon={faHeartSolid}
              size="xl"
              className="heart-icon heart-solid"
              onClick={handleClick}
            />
          )}
        </div>
      </div>
    </>
  );
};

export default MovieCard;
