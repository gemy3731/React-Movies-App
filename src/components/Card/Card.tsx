import { Link } from "react-router-dom";

export default function Card({movie}:{movie:any}) {
  return (
    <div className="p-6">
      <Link to={`/moviesDetails/${movie.id}`}>
        <img
          src={`https://image.tmdb.org/t/p/w500${movie.poster_path}`}
          alt=""
          className="w-full cursor-pointer topRatedImg"
        />
      </Link>
    </div>
  );
}
