import { TextInput } from 'flowbite-react'
import navLogo from '../../assets/images/images.png'
import { FaSearch } from "react-icons/fa";
export default function Navbar() {
  return (
    <div className='fixed top-0 left-0 right-0 bg-white py-5 px-5 md:px-36'>
        <div className='flex flex-col xsm:flex-row justify-between items-center'>
            <img src={navLogo} alt="navLogo" className='w-[150px]' />
            <TextInput type="search" icon={FaSearch} placeholder='Search...' className='w-[40%]' />
        </div>
      
    </div>
  )
}
