import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import "slick-carousel/slick/slick.css";
import './App.css'
import Layout from './components/Layout/Layout'
import Home from './components/Home/Home'
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Movies from './components/Movies/Movies';
import TVShows from './components/TVShows/TVShows';
import Favorite from './components/Favorite/Favorite';
import Watchlist from './components/Watchlist/Watchlist';
import MoviesDetails from './components/Details/MoviesDetails';
const router = createBrowserRouter([
  {path:'',element:<Layout/>,children:[
    {index:true,element:<Home/>},
    {path:'home',element:<Home/>},
    {path:'movies',element:<Movies/>},
    {path:'tvShows',element:<TVShows/>},
    {path:'favorite',element:<Favorite/>},
    {path:'watchlist',element:<Watchlist/>},
    {path:'moviesDetails/:id',element:<MoviesDetails/>},
  ]}
])
function App() {


  return (
    <>
      <RouterProvider router={router} />
    </>
  )
}

export default App
