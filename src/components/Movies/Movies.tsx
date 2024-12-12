import {  useState } from "react";
import AllMovies from "./AllMovies";
import PopularMovies from "./PopularMovies";
import { useSearchParams } from "react-router-dom";
import TopRatedMovies from "./TopRatedMovies";


export default function Movies() {
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
            <h4 className={activeTab==='all'?'cursor-pointer text-[#ff5300]':'cursor-pointer'} onClick={()=>activateTab('all')}>All Movies</h4>
            <h4 className={activeTab==='popular'?'cursor-pointer text-[#ff5300]':'cursor-pointer'} onClick={()=>activateTab('popular')}>Popular Movies</h4>
            <h4 className={activeTab==='top'?'cursor-pointer text-[#ff5300]':'cursor-pointer'} onClick={()=>activateTab('top')}>Top Rated Movies</h4>
            <h4 className={activeTab==='upcoming'?'cursor-pointer text-[#ff5300]':'cursor-pointer'} onClick={()=>activateTab('upcoming')}>Upcoming Movies</h4>
            <h4 className={activeTab==='action'?'cursor-pointer text-[#ff5300]':'cursor-pointer'} onClick={()=>activateTab('action')}>Action</h4>
            <h4 className={activeTab==='animation'?'cursor-pointer text-[#ff5300]':'cursor-pointer'} onClick={()=>activateTab('animation')}>Animation</h4>
            <h4 className={activeTab==='comedy'?'cursor-pointer text-[#ff5300]':'cursor-pointer'} onClick={()=>activateTab('comedy')}>Comedy</h4>
            <h4 className={activeTab==='crime'?'cursor-pointer text-[#ff5300]':'cursor-pointer'} onClick={()=>activateTab('crime')}>Crime</h4>
            <h4 className={activeTab==='drama'?'cursor-pointer text-[#ff5300]':'cursor-pointer'} onClick={()=>activateTab('drama')}>Drama</h4>
            <h4 className={activeTab==='fantasy'?'cursor-pointer text-[#ff5300]':'cursor-pointer'} onClick={()=>activateTab('fantasy')}>Fantasy</h4>
            <h4 className={activeTab==='romance'?'cursor-pointer text-[#ff5300]':'cursor-pointer'} onClick={()=>activateTab('romance')}>Romance</h4>
            <h4 className={activeTab==='war'?'cursor-pointer text-[#ff5300]':'cursor-pointer'} onClick={()=>activateTab('war')}>War</h4>
        </div>
      </div>
      <div className="bg-white p-10 rounded-[20px] shadow-lg lg:col-span-10 col-span-12">
        {activeTab==='all'&&<AllMovies/>}
        {activeTab==='popular'&&<PopularMovies/>}
        {activeTab==='top'&&<TopRatedMovies/>}
        
      </div>
      </div>
    </>
  );
}
