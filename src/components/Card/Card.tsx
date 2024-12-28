import { Link } from "react-router-dom";
import { movieI } from "../../interfaces/movieInterface";
import { IoMdAdd } from "react-icons/io";
import { MdFavorite } from "react-icons/md";
import { useSelector } from "react-redux";
import toast from "react-hot-toast";
export default function Card({ movie, pos=null }: { movie: movieI,pos?:string|null }) {
  const { userSession } = useSelector((store: any) => store.tokenReducer);
  const addFav = async () => {
    const res = await fetch(
      `https://api.themoviedb.org/3/account/21648036/favorite?session_id=${userSession}`,
      {
        headers: {
          accept: "application/json",
          "content-type": "application/json",
          Authorization:
            "Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiI1N2ExNDAyY2EwYjRmZWEwMmU2MzMyODY3NmYxNmRkNyIsIm5iZiI6MTczMjM3OTc5OC4wMjIsInN1YiI6IjY3NDIwNDk2N2I4MjVlNjg1YjRlNWVmMCIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.Sa5TY__-QVyFct-xdXvl0cIxfAPQGwmIqjaB_T9l29E",
        },
        cache: "no-cache",
        body: JSON.stringify({
          media_type: "movie",
          media_id: movie.id,
          favorite: true,
        }),
        method: "POST",
      }
    );
    const finalRes = await res.json();
    if (finalRes.success) {
      toast.success("Added to Favourite list", {
        position: "top-center",
        style: {
          backgroundColor: "black",
          color: "white",
        },
      });
    } else {
      toast.error("Something went wrong", {
        position: "top-center",
        style: {
          backgroundColor: "black",
          color: "white",
        },
      });
    }
  };
  const addWatchList = async () => {
    const res = await fetch(
      `https://api.themoviedb.org/3/account/21648036/watchlist?session_id=${userSession}`,
      {
        headers: {
          accept: "application/json",
          "content-type": "application/json",
          Authorization:
            "Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiI1N2ExNDAyY2EwYjRmZWEwMmU2MzMyODY3NmYxNmRkNyIsIm5iZiI6MTczMjM3OTc5OC4wMjIsInN1YiI6IjY3NDIwNDk2N2I4MjVlNjg1YjRlNWVmMCIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.Sa5TY__-QVyFct-xdXvl0cIxfAPQGwmIqjaB_T9l29E",
        },
        cache: "no-cache",
        body: JSON.stringify({
          media_type: "movie",
          media_id: movie.id,
          watchlist: true,
        }),
        method: "POST",
      }
    );
    const finalRes = await res.json();
    if (finalRes.success) {
      toast.success("Added to watchlist", {
        position: "top-center",
        style: {
          backgroundColor: "black",
          color: "white",
        },
      });
    } else {
      toast.error("Something went wrong", {
        position: "top-center",
        style: {
          backgroundColor: "black",
          color: "white",
        },
      });
    }
  };
  return (
    <div className="p-6 ">
      <div className="relative topRatedImg overflow-hidden">
        <Link to={`/moviesDetails/${movie.id}`}>
          <img
            src={`https://image.tmdb.org/t/p/w500${movie.poster_path}`}
            alt={movie.title}
            className="w-full cursor-pointer"
          />
        </Link>
        {pos!='fav'&&<div className="addLayout absolute bottom-[3px] left-[3px] right-[3px] rounded-b-[20px] bg-slate-900 bg-opacity-85 flex flex-col md:flex-row justify-evenly items-center gap-4 py-8 text-[32px] text-white">
          <IoMdAdd title="Add to watchlist" onClick={addWatchList} className="cursor-pointer" />
          <MdFavorite title="Add favourite" onClick={addFav} className="cursor-pointer" />
        </div>}
        
      </div>
    </div>
  );
}
