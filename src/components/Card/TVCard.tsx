import { Link } from "react-router-dom";
import { movieI } from "../../interfaces/movieInterface";

export default function TVCard({movie}:{movie:movieI}) {
  return (
    <div className="p-6">
      <Link to={`/tvDetails/${movie.id}`}>
        <img
          src={`https://image.tmdb.org/t/p/w500${movie.poster_path}`}
          alt={movie.title}
          className="w-full cursor-pointer topRatedImg"
        />
      </Link>
    </div>
  );
}
