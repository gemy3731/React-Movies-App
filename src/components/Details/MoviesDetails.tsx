import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { movieDetailsI } from "../../interfaces/movieDetailsInterface";
import { Badge, Rating } from "flowbite-react";
import Slider from "react-slick";
import Card from "../Card/Card";
import { moviesI } from "../../interfaces/movieInterface";
import { IoMdAdd } from "react-icons/io";
import { MdFavorite } from "react-icons/md";
import toast from "react-hot-toast";
import { useSelector } from "react-redux";

export default function MoviesDetails() {
  const [details, setDetails] = useState<movieDetailsI>();
  const [videos, setVideos] = useState<string>();
  const [similar, setSimialr] = useState<moviesI>();
  const { id } = useParams<string>();
  const { userSession } = useSelector((store: any) => store.tokenReducer);
  useEffect(() => {
    getDetails(id);
    getVideo(id);
    getSimilar(id);
  }, [id]);

  const settings = {
    dots: false,
    infinite: true,
    speed: 500,
    slidesToShow: 5,
    slidesToScroll: 5,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          dots: false,
          infinite: true,
          speed: 500,
          slidesToShow: 4,
          slidesToScroll: 4,
        },
      },
      {
        breakpoint: 800,
        settings: {
          dots: false,
          infinite: true,
          speed: 500,
          slidesToShow: 3,
          slidesToScroll: 3,
        },
      },
      {
        breakpoint: 650,
        settings: {
          dots: false,
          infinite: true,
          speed: 500,
          slidesToShow: 2,
          slidesToScroll: 2,
        },
      },
      {
        breakpoint: 420,
        settings: {
          dots: false,
          infinite: true,
          speed: 500,
          slidesToShow: 1,
          slidesToScroll: 1,
        },
      },
    ],
  };
  const getDetails = async (id: string | undefined) => {
    const res = await fetch(
      `https://api.themoviedb.org/3/movie/${id}?language=en-US`,
      {
        headers: {
          accept: "application/json",
          Authorization:
            "Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiI1N2ExNDAyY2EwYjRmZWEwMmU2MzMyODY3NmYxNmRkNyIsIm5iZiI6MTczMjM3OTc5OC4wMjIsInN1YiI6IjY3NDIwNDk2N2I4MjVlNjg1YjRlNWVmMCIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.Sa5TY__-QVyFct-xdXvl0cIxfAPQGwmIqjaB_T9l29E",
        },
        cache: "force-cache",
      }
    );
    const finalRes = await res.json();
    setDetails(finalRes);
  };
  const getVideo = async (id: string | undefined) => {
    const res = await fetch(
      `https://api.themoviedb.org/3/movie/${id}/videos?language=en-US`,
      {
        headers: {
          accept: "application/json",
          Authorization:
            "Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiI1N2ExNDAyY2EwYjRmZWEwMmU2MzMyODY3NmYxNmRkNyIsIm5iZiI6MTczMjM3OTc5OC4wMjIsInN1YiI6IjY3NDIwNDk2N2I4MjVlNjg1YjRlNWVmMCIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.Sa5TY__-QVyFct-xdXvl0cIxfAPQGwmIqjaB_T9l29E",
        },
        cache: "force-cache",
      }
    );
    const finalRes = await res.json();
    const trailerVideo = finalRes.results.find(
      (video: { key: string; type: string }) => video.type === "Trailer"
    );
    setVideos(trailerVideo.key);
  };
  const getSimilar = async (id: string | undefined) => {
    const res = await fetch(
      `https://api.themoviedb.org/3/movie/${id}/similar?language=en-US&page=1`,
      {
        headers: {
          accept: "application/json",
          Authorization:
            "Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiI1N2ExNDAyY2EwYjRmZWEwMmU2MzMyODY3NmYxNmRkNyIsIm5iZiI6MTczMjY1ODEyNS4yNzAxNDMsInN1YiI6IjY3NDIwNDk2N2I4MjVlNjg1YjRlNWVmMCIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.U2NeKqF8qmhVMcci3rG5NKwmQ0jykTrLLpnwR9ieRlw",
        },
      }
    );
    const finalRes = await res.json();
    setSimialr(finalRes);
  };

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
          media_id: id,
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
          media_id: id,
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
    <div className="max-w-[1440px] mx-auto flex flex-col gap-16">
      <div className="grid grid-cols-3 gap-10 mt-72 justify-between md:mt-0  bg-white px-10 py-7 rounded-[20px] shadow-lg">
        <div className="col-span-3 md:col-span-1">
          <img
            src={`https://image.tmdb.org/t/p/w500${details?.poster_path}`}
            alt={details?.original_title}
            className="mx-auto md:mx-0 md:mr-auto block max-h-[550px] rounded-[20px]"
          />
        </div>
        <div className="col-span-3 md:col-span-2 flex flex-col gap-5">
          <div className="flex flex-col xsm:flex-row justify-between items-center">
            <h2 className="font-bold text-[32px] mb-5 text-[#ff5300]">
              {details?.original_title}
            </h2>
            <Rating size="lg">
              <Rating.Star className="text-[#ff5300]" />
              <p className="ml-2 text-[20px] font-bold text-gray-900">
                {details?.vote_average.toFixed(1)}
              </p>
            </Rating>
          </div>
          <p className="font-normal leading-7 ">
            <span className="font-bold text-[22px]">Description : </span>
            {details?.overview}
          </p>

          <p className="font-normal leading-7 ">
            <span className="font-bold text-[22px]">Country : </span>
            {details?.origin_country}
          </p>
          <p className="font-normal leading-7 ">
            <span className="font-bold text-[22px]">Language : </span>
            {details?.original_language}
          </p>
          <p className="font-normal leading-7 ">
            <span className="font-bold text-[22px]">status : </span>
            {details?.status}
          </p>
          {details?.status === "Released" && (
            <p className="font-normal leading-7 ">
              <span className="font-bold text-[22px]">Release Date : </span>
              {details?.release_date}
            </p>
          )}
          <div className="flex flex-col sm:flex-row gap-5 justify-between sm:items-center">
            <div className="flex gap-5">
              {details?.genres.map((genre) => (
                <Badge
                  key={genre.id}
                  className="bg-[#000] text-white font-medium text-[16px] w-fit px-2 py-1"
                >
                  {genre.name}
                </Badge>
              ))}
            </div>
            {details?.homepage && (
              <a href={details?.homepage} target="_blank">
                <button className="bg-[#ff5300] hover:bg-[#ff5500e2] w-fit px-7 py-2 rounded-md text-[16px] font-bold">
                  Home Page
                </button>
              </a>
            )}
          </div>
          {userSession&&<div className="flex flex-col md:flex-row justify-end items-center gap-10 py-8 text-[32px] text-black">
            <IoMdAdd
              onClick={addWatchList}
              title="Add to watchlist"
              className="cursor-pointer"
            />
            <MdFavorite
              onClick={addFav}
              title="Add favourite"
              className="cursor-pointer"
            />
          </div>}
          
        </div>
      </div>
      {videos && (
        <div className="bg-white px-10 py-7 rounded-[20px] shadow-lg ">
          <h3 className="font-bold text-[32px] mb-5 text-[#ff5300]">Trailer</h3>
          <iframe
            src={`https://www.youtube.com/embed/${videos}`}
            allowFullScreen
            className="w-full h-[620px] rounded-[20px]"
          ></iframe>
        </div>
      )}
      {similar && (
        <div className="bg-white p-10 pe-14 rounded-[20px] shadow-lg">
          <h3 className="font-bold text-[32px] mb-5 text-[#ff5300]">Similar</h3>
          <div className="slider-container ">
            <Slider {...settings}>
              {similar?.results.map((movie) => (
                <Card key={movie.id} movie={movie} />
              ))}
            </Slider>
          </div>
        </div>
      )}
    </div>
  );
}
