import { useEffect, useState } from "react";
import Card from "../Card/Card";
import { Pagination } from "flowbite-react";
import { useSearchParams } from "react-router-dom";
import {  movieI, moviesI } from "../../interfaces/movieInterface";

export default function GenreMovies({genreId}:{genreId:number}) {
    const [movies, setMovies] = useState<moviesI>();
    const [filteredMovies, setFilteredMovies] = useState<movieI[]>([]);
    const [searchParams, setSearchParams] = useSearchParams();
    const currentPage: number = Number(searchParams.get("page")) || 1;
    useEffect(() => {
      getMovies();
    }, [currentPage]);
    const onPageChange = (page: number): void => {
      setSearchParams({ page: page.toString(),tab:'action' });
    };
    const filterByGenre = (movies:movieI[], genreId:number) => {
         setFilteredMovies(movies.filter(movie => movie.genre_ids.includes(genreId)))
      };
    const getMovies = async () => {
      const res = await fetch(
        `https://api.themoviedb.org/3/discover/movie?page=${currentPage}`,
        {
          headers: {
            accept: "application/json",
            Authorization:
              "Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiI1N2ExNDAyY2EwYjRmZWEwMmU2MzMyODY3NmYxNmRkNyIsIm5iZiI6MTczMjM3OTc5OC4wMjIsInN1YiI6IjY3NDIwNDk2N2I4MjVlNjg1YjRlNWVmMCIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.Sa5TY__-QVyFct-xdXvl0cIxfAPQGwmIqjaB_T9l29E",
          },
        }
      );
      const finalRes = await res.json();
      filterByGenre(finalRes.results,genreId)
      setMovies(finalRes);
    };
    return (
      <>
        <div className=" grid xl:grid-cols-5 lg:grid-cols-4 md:grid-cols-2 grid-cols-1 ">
          {filteredMovies.map((movie) => (
            <Card key={movie.id} movie={movie} />
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
