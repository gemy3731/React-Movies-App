import { useEffect, useState } from 'react'
import Slider from 'react-slick';
import Card from '../Card/Card';
import { movieI } from '../../interfaces/movieInterface';

export default function Popular() {
    const [data, setData] = useState<movieI[]>([]);
    useEffect(() => {
      getData();
    }, []);
    
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
    const getData = async () => {
      const res = await fetch(
        'https://api.themoviedb.org/3/movie/popular?language=en-US&page=1',
        {
          headers: {
            accept: "application/json",
            Authorization:
              "Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiI1N2ExNDAyY2EwYjRmZWEwMmU2MzMyODY3NmYxNmRkNyIsIm5iZiI6MTczMjY1ODEyNS4yNzAxNDMsInN1YiI6IjY3NDIwNDk2N2I4MjVlNjg1YjRlNWVmMCIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.U2NeKqF8qmhVMcci3rG5NKwmQ0jykTrLLpnwR9ieRlw",
          },
          cache:'force-cache',
        }
      );
      const { results } = await res.json();
      setData(results);
    };
    return (
      <div className="my-20 bg-white p-10 pe-14 rounded-[20px] shadow-lg">
          <h3 className="font-bold text-[32px] mb-5 text-[#ff5300]">Popular</h3>
        <div className="slider-container ">
          <Slider {...settings}>
            {data?.map((movie) => (
              <Card key={movie.id} movie={movie} />
            ))}
          </Slider>
        </div>
      </div>
    );
  }