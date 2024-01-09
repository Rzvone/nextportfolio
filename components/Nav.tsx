import { Bars3Icon } from '@heroicons/react/20/solid'
import React from 'react'

interface Props {
  openNav: () => void;
}

const Nav = ({openNav} : Props) => {
  return (
    <div className='w-full fixed z-[10000] top-0 h-[7vh] bg-[#0d0310] shadow-md'>
        <div className='flex items-center justify-between w-[90%] h-full'>
            <h1 className='flex-[0.6] cursor-pointer text-[25px] text-white font-bold ml-10'>
                Raz<span className='text-green-600'>van</span>
            </h1>
            <div className='nav-link'><a href='/'>Home</a></div>
            <div className='nav-link'>Services</div>
            <div className='nav-link'>About</div>
            <div className='nav-link'>Projects</div>
            <div className='nav-link'>Blog</div>
            <div className='nav-link'>Contact</div>
            <div onClick={openNav}>
              <Bars3Icon className='w-[2rem] md:hidden h-[2rem] cursor-pointer text-green-500'/>
            </div>
        </div>
    </div>
  )
}

export default Nav