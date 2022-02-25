import Image from 'next/image'
import { 
  GlobeAltIcon,
  MenuIcon,
  SearchIcon,
  UserCircleIcon,
  UsersIcon
 } from '@heroicons/react/solid'

const Header = () => {
  return (
    <header className="sticky top-0 z-50 grid grid-cols-3 bg-white shadow-md p-5 md:px-10">
      
      {/* Left Image */}
      <div className="relative flex items-center h-10 cursor-pointer my-auto">
        <Image
          src='https://links.papareact.com/qd3'
          layout='fill'
          objectFit='contain'
          objectPosition='left'
        />
      </div>

      {/* Middle - Search */}
      <form className='flex items-center md:border-2 rounded-full p-2 pl-5 md:shadow-sm'>
        <input className='flex-grow text-sm text-gray-600 placeholder-gray-400' type='text' placeholder='Start your search' />
        <button className='hidden md:inline-flex ml-2 bg-red-400 text-white rounded-full'>
          <SearchIcon  className='h-8 p-2'/>
        </button>
      </form>

      {/* Right */}
      <div className='flex items-center space-x-4 justify-end text-gray-500'>
        <a href='#' className='hidden md:inline'>Become a host</a>
        <a href='#'>
          <GlobeAltIcon className='h-6' />
        </a>
        <div className='flex items-center space-x-2 p-2 border-2 rounded-full'>
          <MenuIcon className='h-6'/>
          <UserCircleIcon className='h-6'/>
        </div>
      </div>
    </header>

  )
}

export default Header