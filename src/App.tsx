import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import "slick-carousel/slick/slick.css";
import './App.css'
import Layout from './components/Layout/Layout'
import Home from './components/Home/Home'
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
const router = createBrowserRouter([
  {path:'',element:<Layout/>,children:[
    {index:true,element:<Home/>},
    {path:'home',element:<Home/>}
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
