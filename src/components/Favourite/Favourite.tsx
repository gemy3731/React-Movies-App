import { Pagination } from "flowbite-react";
import Card from "../Card/Card";
import { useEffect, useState } from "react";
import { moviesI } from "../../interfaces/movieInterface";
import { useSearchParams } from "react-router-dom";
import { useSelector } from "react-redux";

export default function Favourite() {
  const [movies, setMovies] = useState<moviesI>();
  const { userSession } = useSelector((store: any) => store.tokenReducer);
  const [searchParams, setSearchParams] = useSearchParams();
  const currentPage: number = Number(searchParams.get("page")) || 1;
  useEffect(() => {
    getFavMovies();
  }, [currentPage]);
  const onPageChange = (page: number): void => {
    setSearchParams({ page: page.toString(),tab:'all' });
  };
  const getFavMovies = async () => {
    const res = await fetch(
      `https://api.themoviedb.org/3/account/21648036/favorite/movies?page=${currentPage}&session_id=${userSession}&sort_by=created_at.asc`,
      {
        headers: {
          accept: "application/json",
          Authorization:
            "Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiI1N2ExNDAyY2EwYjRmZWEwMmU2MzMyODY3NmYxNmRkNyIsIm5iZiI6MTczMjM3OTc5OC4wMjIsInN1YiI6IjY3NDIwNDk2N2I4MjVlNjg1YjRlNWVmMCIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.Sa5TY__-QVyFct-xdXvl0cIxfAPQGwmIqjaB_T9l29E",
        },
        cache:'no-cache',
      }
    );
    const finalRes = await res.json();
    setMovies(finalRes);
  };
  return (
    <div className="bg-white p-10 rounded-[20px] shadow-lg mt-72 md:mt-0">
      <div className=" grid xl:grid-cols-5 lg:grid-cols-4 md:grid-cols-2 grid-cols-1 ">
        {movies?.results.map((movie) => (
          <Card key={movie.id} movie={movie} pos='fav' />
        ))}
      </div>
      <div className="flex overflow-x-auto sm:justify-center mt-10">
        {movies &&movies.total_pages>1 &&(
          <Pagination
            currentPage={currentPage}
            totalPages={movies?.total_pages}
            onPageChange={onPageChange}
            showIcons
          />
        )}
      </div>
    </div>
  );
}
