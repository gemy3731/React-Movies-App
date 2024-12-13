import {  useState } from "react";
import AllTVShows from "./AllTVShows";
import PopularTV from "./PopularTV";
import { useSearchParams } from "react-router-dom";
import TopRatedTV from "./TopRatedTV";
import AiringTodayTV from "./AiringTodayTV";
import OnAirTV from "./OnAirTV";
import GenreTV from "./GenreTV";


export default function TVShows() {
  const [, setSearchParams] = useSearchParams();
  const [activeTab, setActiveTab] = useState('all');
  const activateTab = (tab:string)=>{
    setActiveTab(tab);
    setSearchParams({page:"1",tab})
  }


 
  return (
    <>
    <div className="grid grid-cols-12 gap-4">
      <div className="lg:col-span-2 col-span-12 bg-white p-10 rounded-[20px] shadow-lg h-fit lg:sticky top-[120px] mt-[100px] md:mt-0">
        <div className="flex lg:flex-col flex-row gap-4 overflow-hidden flex-wrap font-semibold ">
            <h4 className={activeTab==='all'?'cursor-pointer text-[#ff5300]':'cursor-pointer'} onClick={()=>activateTab('all')}>All TV Shows</h4>
            <h4 className={activeTab==='popular'?'cursor-pointer text-[#ff5300]':'cursor-pointer'} onClick={()=>activateTab('popular')}>Popular</h4>
            <h4 className={activeTab==='top'?'cursor-pointer text-[#ff5300]':'cursor-pointer'} onClick={()=>activateTab('top')}>Top Rated</h4>
            <h4 className={activeTab==='airingToday'?'cursor-pointer text-[#ff5300]':'cursor-pointer'} onClick={()=>activateTab('airingToday')}>Airing Today</h4>
            <h4 className={activeTab==='onAir'?'cursor-pointer text-[#ff5300]':'cursor-pointer'} onClick={()=>activateTab('onAir')}>On The Air</h4>
            <h4 className={activeTab==='action'?'cursor-pointer text-[#ff5300]':'cursor-pointer'} onClick={()=>activateTab('action')}>Action</h4>
            <h4 className={activeTab==='animation'?'cursor-pointer text-[#ff5300]':'cursor-pointer'} onClick={()=>activateTab('animation')}>Animation</h4>
            <h4 className={activeTab==='comedy'?'cursor-pointer text-[#ff5300]':'cursor-pointer'} onClick={()=>activateTab('comedy')}>Comedy</h4>
            <h4 className={activeTab==='crime'?'cursor-pointer text-[#ff5300]':'cursor-pointer'} onClick={()=>activateTab('crime')}>Crime</h4>
            <h4 className={activeTab==='drama'?'cursor-pointer text-[#ff5300]':'cursor-pointer'} onClick={()=>activateTab('drama')}>Drama</h4>
            <h4 className={activeTab==='fantasy'?'cursor-pointer text-[#ff5300]':'cursor-pointer'} onClick={()=>activateTab('fantasy')}>Fantasy</h4>
            <h4 className={activeTab==='family'?'cursor-pointer text-[#ff5300]':'cursor-pointer'} onClick={()=>activateTab('family')}>Family</h4>
            <h4 className={activeTab==='romance'?'cursor-pointer text-[#ff5300]':'cursor-pointer'} onClick={()=>activateTab('romance')}>Romance</h4>
        </div>
      </div>
        <div className="bg-white p-10 rounded-[20px] shadow-lg lg:col-span-10 col-span-12">
          {activeTab==='all'&&<AllTVShows/>}
          {activeTab==='popular'&&<PopularTV/>}
          {activeTab==='top'&&<TopRatedTV/>}
          {activeTab==='airingToday'&&<AiringTodayTV/>}
          {activeTab==='onAir'&&<OnAirTV/>}
          {activeTab==='action'&&<GenreTV genreId={28} />}
          {activeTab==='animation'&&<GenreTV genreId={16} />}
          {activeTab==='comedy'&&<GenreTV genreId={35} />}
          {activeTab==='crime'&&<GenreTV genreId={80} />}
          {activeTab==='drama'&&<GenreTV genreId={18} />}
          {activeTab==='fantasy'&&<GenreTV genreId={14} />}
          {activeTab==='romance'&&<GenreTV genreId={10749} />}
          {activeTab==='family'&&<GenreTV genreId={10751} />}
        
        </div>
      </div>
    </>
  );
}

