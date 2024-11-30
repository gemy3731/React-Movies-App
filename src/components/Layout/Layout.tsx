import { Outlet } from 'react-router-dom'
import Navbar from '../Navbar/Navbar'

export default function Layout() {
  return (
    <>
    <Navbar />
    <div className='container  mx-auto my-[120px]'>
      <Outlet />
    </div>
    </>
  )
}
