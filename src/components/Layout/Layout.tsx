import { Outlet } from 'react-router-dom'

export default function Layout() {
  return (
    <>
    <div className='container  my-0 mx-auto '>
      <Outlet />
    </div>
    </>
  )
}
