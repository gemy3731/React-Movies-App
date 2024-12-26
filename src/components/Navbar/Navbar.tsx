// import { TextInput } from 'flowbite-react'
import navLogo from "../../assets/images/images.png";
// import { FaSearch } from "react-icons/fa";
import { Link, NavLink, useNavigate } from "react-router-dom";
import { IoMdHome } from "react-icons/io";
import { RiMovie2Line } from "react-icons/ri";
import { FiTv } from "react-icons/fi";
import { IoMdAdd } from "react-icons/io";
import { MdOutlineFavorite } from "react-icons/md";
import { Navbar } from "flowbite-react";
import { useDispatch, useSelector } from "react-redux";
import { clearToken } from "../../Redux/tokenSlice";
export default function NavBar() {
  const navigate = useNavigate()
  const {userSession} = useSelector((store:any)=>store.tokenReducer)

  const dispatch = useDispatch()
  const clearSession = ()=>{
    localStorage.removeItem("session_id");
    dispatch(clearToken());
  }
  const createSession = ()=>{
    navigate('/session')
  }
  return (
    <Navbar
      fluid
      rounded
      className="fixed top-0 left-0 right-0 bg-white py-5 px-5 md:px-36 z-[100]"
    >
      <div className="flex flex-col md:flex-row justify-between items-center gap-4 w-full">
        <Navbar.Brand as={Link} href="/" className="order-1">
          <img src={navLogo} alt="navLogo" className="w-[150px]" />
        </Navbar.Brand>
        <Navbar.Toggle className="order-4" />
        <Navbar.Collapse className="order-2">
          <div className="flex flex-col md:flex-row justify-evenly items-center gap-16 text-[20px] font-semibold">
            <NavLink to="/" className="flex items-center gap-2 pb-1">
              <IoMdHome /> Home
            </NavLink>
            <NavLink to="/watchlist" className="flex items-center gap-2 pb-1">
              <IoMdAdd /> Watchlist
            </NavLink>
            <NavLink to="/favorite" className="flex items-center gap-2 pb-1">
              <MdOutlineFavorite /> Favorite
            </NavLink>
            <NavLink to="/movies" className="flex items-center gap-2 pb-1">
              <RiMovie2Line /> Movies
            </NavLink>
            <NavLink to="/tvShows" className="flex items-center gap-2 pb-1">
              <FiTv /> TV Shows
            </NavLink>
          </div>
        </Navbar.Collapse>
        <div className="w-[20%] flex flex-col md:flex-row items-center justify-center gap-4 order-3">
          {!userSession&&<button onClick={createSession} className="bg-[#ff5300] hover:bg-[#ff5500e2] w-fit px-5 py-2 rounded-md text-[16px] font-bold">
            Creat Session
          </button>}
          
          {userSession&&<button onClick={clearSession} className="bg-[#ff5300] hover:bg-[#ff5500e2] w-fit px-5 py-2 rounded-md text-[16px] font-bold">
            Clear Session
          </button>}
          
        </div>
        {/* <TextInput type="search" icon={FaSearch} placeholder='Search...' className='w-[25%] order-3' /> */}
      </div>
    </Navbar>
  );
}
