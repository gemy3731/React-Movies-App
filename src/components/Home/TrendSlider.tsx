import { Carousel } from 'flowbite-react';
import { useEffect, useState } from 'react';
import { movieI } from '../../interfaces/movieInterface';


export default function TrendSlider() {
  const [data,setData] = useState<movieI[]>([])
  useEffect(()=>{
    getData()
  },[])
  const getData = async ()=>{
    const res = await fetch('https://api.themoviedb.org/3/trending/movie/day?language=en-US',{
      headers:{
        accept:'application/json',
        Authorization: 'Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiI1N2ExNDAyY2EwYjRmZWEwMmU2MzMyODY3NmYxNmRkNyIsIm5iZiI6MTczMjY1ODEyNS4yNzAxNDMsInN1YiI6IjY3NDIwNDk2N2I4MjVlNjg1YjRlNWVmMCIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.U2NeKqF8qmhVMcci3rG5NKwmQ0jykTrLLpnwR9ieRlw'
      },
      cache:'force-cache',
    })
    const {results} = await res.json()
    setData(results)
  }
  return (
    <div className="h-[70vh] shadow-lg overflow-hidden">
      <Carousel>
        {data && data.map((movie)=>(<div key={movie.id} className="w-full">
          <img src={`https://image.tmdb.org/t/p/w500${movie.backdrop_path}`} className='w-[100%] object-cover' alt={movie.title} />
        </div>))}
      </Carousel>
    </div>
  )
}