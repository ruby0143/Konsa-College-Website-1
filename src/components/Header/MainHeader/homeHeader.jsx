import React from 'react'
import { FaSearch } from 'react-icons/fa'
import style from './home.module.css'

const HomeHeader = () => {
  return (
    <div className='w-full'>
        <div className={` ${style.backgroundContainer} min-h-[270px] md:min-h-[450px] flex flex-col items-center justify-center w-full`}>
            <div className='text-2xl md:text-5xl md:inset-3 text-center font-semibold mb-[16px] text-white'>
                FIND BEST COLLEGES <span className='md:text-[#EE7C08]' >FOR YOURSELF</span>
            </div>    
            <div className='hidden md:inline-flex mb-[45px] text-white text-xl'>
                You can choose your college with us, Join our Counselling process to get our services.
            </div>
            <button className='bg-[#EE7C00] text-white md:text-2xl py-[6px] md:py-[10px] px-[20px] rounded-full md:rounded-md font-medium flex justify-center items-center' >
                Need Counselling
            </button>
        </div>
        <div className='flex items-center justify-center relative' >
            <div className='flex items-center shadow-md py-[8px] px-[16px] rounded-md absolute bg-white' >
                <FaSearch className='text-[#A7A7A7] ml-2 cursor-pointer text-lg' />
                <input 
                    type='search' 
                    placeholder='Search your Colleges, Exams, Counsellings, etc' className={`px-3 text-[13px] md:text-[1rem] lg:text-[1.1rem] outline-none border-none rounded-md leading-7 md:leading-9 lg:leading-10 w-[280px] md:w-[550px] lg:w-[750px]`} 
                />
            </div>
        </div>
    </div>
  )
}

export default HomeHeader