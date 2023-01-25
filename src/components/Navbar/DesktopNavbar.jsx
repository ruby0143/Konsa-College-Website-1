import React from 'react'
import {AiOutlineMenu,AiOutlineClose} from 'react-icons/ai'
import { NavLink } from 'react-router-dom'
import konsaCollegeLogo from '../../assets/KonsaCollege_Logo/KonsaCollege_desktopLogo.svg' 
import './headerstyle.css'

const DesktopNavbar = ({setMobileSidebar, mobileSidebar ,routes}) => {

  return (
    <>
        <nav className='w-full bg-black md:bg-white flex px-3 md:px-12 items-center justify-between' >
            <div className='h-[54px] -ml-5' >
                <img className='h-full' src={konsaCollegeLogo} alt="konsa-college-logo"/>
            </div>
            <div className='hidden md:flex items-center gap-10'>
                <ul className='flex items-center cursor-pointer gap-10'>
                {
                    routes.map(route => {
                        return <li key={route.route}>
                            <NavLink className='text-gray-900 hover:text-black text-sm transition-all duration-500' to={route.path}>{route.route}</NavLink>
                        </li>
                    })
                }
                </ul>
                <div className='flex gap-2 py-[6px] px-[22px] text-white text-sm font-medium rounded-full bg-[#EE7C00]' >
                    <div className='cursor-pointer'>Login</div>
                    <div>/</div>
                    <div className='cursor-pointer'>Sign In</div>
                </div>
            </div>
            <div className='md:hidden flex items-center gap-4' >
                <div onClick={()=>setMobileSidebar(true)} >
                    {mobileSidebar?<AiOutlineClose className='text-white cursor-pointer text-lg' />:<AiOutlineMenu className='text-white cursor-pointer text-lg'/>}
                </div>
            </div>
        </nav>      
    </>
  )
}

export default DesktopNavbar