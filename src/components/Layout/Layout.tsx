import { Outlet } from 'react-router-dom'
import Navbar from '../Navbar/Navbar'

export default function Layout() {
  return (
    <>
    <Navbar />
    <div className='container  my-0 mx-auto '>
      <Outlet />
    </div>
    </>
  )
}
