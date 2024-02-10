import React, { useState } from 'react'
import { Link } from 'react-router-dom'


const Navbar = () => {
    

  return (
    <div className=' bg-black w-full mb-0 sticky z-20 top-0'>
    <div className="flex " >
        
      
    <h1 className='flex my-5 ml-3'>
      <span className='text-gray-500 text-2xl font-bold'>I</span>
      <span className='text-blue-900 text-2xl font-bold'>N</span>
      <span className='text-[#ff0000] text-2xl font-bold'>T</span>
      <span className='text-[#00ff00] text-2xl font-bold '>9</span>
      <span className='text-white text-xs mt-2 ml-1 mr-44'>solution</span>

    </h1>
    <ul className=' flex text-white mx-auto cursor-pointer '>
      <li className='mr-12 my-auto text-sm hover:text-[#00ff00]'><Link to='/'>Home</Link></li>
      <li className='mr-12 my-auto text-sm hover:text-[#00ff00]'>About us</li>
      <li className='mr-12 my-auto text-sm hover:text-[#00ff00]'>Products</li>
      <li className='mr-12 my-auto text-sm hover:text-[#00ff00]'>ViBoard</li>
      <li className='mr-12 my-auto text-sm hover:text-[#00ff00]'>Careers</li>
      <li className='mr-12 my-auto text-sm hover:text-[#00ff00]'>Contact us</li>
    </ul>

    <div className='my-5 '>
      <Link to='/login' className='text-black bg-[#00ff00] py-[8px] hover:border border-[#00ff00] hover:bg-transparent
      hover:text-lime-500 mr-4 text-sm font-bold rounded px-4'>Login</Link>
      <a href='#' className='text-white border border-white  py-[7px]  mr-8
       text-sm font-bold rounded px-4 hover:text-[#00ff00]  '>Sign up</a>
    </div>
    
           

    </div>
    <hr></hr>
    
    </div>
  )
}

export default Navbar