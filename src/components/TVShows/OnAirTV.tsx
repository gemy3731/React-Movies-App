import { useEffect, useState } from "react";
import { Pagination } from "flowbite-react";
import { useSearchParams } from "react-router-dom";
import { moviesI } from "../../interfaces/movieInterface";
import TVCard from "../Card/TVCard";

export default function OnAirTV() {
  const [movies, setMovies] = useState<moviesI>();
  const [searchParams, setSearchParams] = useSearchParams();
  const currentPage: number = Number(searchParams.get("page")) || 1;
  useEffect(() => {
    getMovies();
  }, [currentPage]);
  const onPageChange = (page: number): void => {
    setSearchParams({ page: page.toString(),tab:'all' });
  };
  const getMovies = async () => {
    const res = await fetch(
      `https://api.themoviedb.org/3/tv/on_the_air?page=${currentPage}`,
      {
        headers: {
          accept: "application/json",
          Authorization:
            "Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiI1N2ExNDAyY2EwYjRmZWEwMmU2MzMyODY3NmYxNmRkNyIsIm5iZiI6MTczMjM3OTc5OC4wMjIsInN1YiI6IjY3NDIwNDk2N2I4MjVlNjg1YjRlNWVmMCIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.Sa5TY__-QVyFct-xdXvl0cIxfAPQGwmIqjaB_T9l29E",
        },
      }
    );
    const finalRes = await res.json();
    setMovies(finalRes);
  };
  return (
    <>
      <div className=" grid xl:grid-cols-5 lg:grid-cols-4 md:grid-cols-2 grid-cols-1 ">
        {movies?.results.map((movie) => (
          <TVCard key={movie.id} movie={movie} />
        ))}
      </div>
      <div className="flex overflow-x-auto sm:justify-center mt-10">
        {movies && (
          <Pagination
            currentPage={currentPage}
            totalPages={movies?.total_pages}
            onPageChange={onPageChange}
            showIcons
          />
        )}
      </div>
    </>
  );
}
