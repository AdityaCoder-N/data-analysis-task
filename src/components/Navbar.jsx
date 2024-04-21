import React from 'react'
import {Link} from 'react-router-dom'

const Navbar = () => {
  return (
    <div className='px-4 md:px-12 py-3 md:py-5 w-full flex items-center justify-between bg-blue-500'>
        <div className='text-white text-xl font-bold'>
            Analytics Assignment
        </div>        
        <div className='flex gap-2 md:gap-8 items-center text-lg text-white'>
            <Link to='/'>Falvanoids</Link>
            <Link to='/gamma'>Gamma</Link>
        </div>
    </div>
  )
}

export default Navbar