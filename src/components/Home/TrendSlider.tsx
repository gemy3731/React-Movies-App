
import { Carousel } from 'flowbite-react';
import { useEffect, useState } from 'react';


export default function TrendSlider() {
  const [data,setData] = useState<any[]>([])
  useEffect(()=>{
    getData()
  },[])
  const getData = async ()=>{
    const res = await fetch('https://movies-api14.p.rapidapi.com/home',{
      headers:{
        'x-rapidapi-key':'367c6a66c3msh2fa5e8390db2c71p183662jsn89bf9e9130ad',
        'x-rapidapi-host':'movies-api14.p.rapidapi.com'
      }
    })
    const finalData = await res.json()
    setData(finalData[0].movies)
    console.log(finalData[0].movies);
  }
  return (
    <div className="h-[90vh]">
      <Carousel>
        {data && data.map((movie)=>(<div key={movie.id} className=" ">
          <img src={movie.poster_path} className='w-[100%]  object-cover' alt={movie.original_title} />
        </div>))}
      </Carousel>
    </div>
  )
}