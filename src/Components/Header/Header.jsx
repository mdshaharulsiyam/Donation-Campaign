import React, { useState } from 'react'
import { NavLink, useLocation } from 'react-router-dom'
import { AiOutlineMenuUnfold } from 'react-icons/ai';
import './Header.css'
const Header = () => {
    let top = '-top-[99999999]'
    let iconrotate = "rotate-0"
    const [showMenu,setShowMenu]=useState(false)
    const [rotate,setrotate]=useState(false)
    const ShowMenu =()=>{
        setShowMenu(!showMenu)
        setrotate(!rotate)
    }
    showMenu?top = 'top-20':top = '-top-[99999999px]'
    rotate?iconrotate = "rotate-90":iconrotate = "rotate-0"
    const path = useLocation()
    let active ="absolute left-[50%] -translate-x-[50%] top-8"
    path.pathname !== "/"? active ="": active ="absolute left-[50%] -translate-x-[50%]";
  return (
 <div className={`flex flex-wrap ${active} justify-between items-center w-full container mt-8 mx-auto z-50`}>
    <div className='flex justify-center items-center gap-6 '>
    <img src="Frame.png" alt="" />
    <span>
        <h2 className='text-4xl text-[#FF444A] font-bold'>Donation</h2>
        <p className='text-lg text-[#535353] tracking-[9.5px]'>Campaign</p>
    </span>
    </div>
    <nav>
    <AiOutlineMenuUnfold onClick={ShowMenu} className={`sm:hidden static ${iconrotate} transition-all text-3xl mx-2`}></AiOutlineMenuUnfold>
        <ul className={`sm:flex flex-wrap justify-center items-center gap-8 block sm:static transition-all bg-[#EBF6E2] right-3 ${top} sm:bg-transparent p-5 sm:p-0  absolute text-lg font-bold`}>
            <NavLink className={'text-black block'} to={'/'}>Home</NavLink>
            <NavLink className={'text-black block'} to={'/Donation'}>Donation</NavLink>
            <NavLink className={'text-black block'} to={'/Statistics'}>Statistics</NavLink>
        </ul>
    </nav>
 </div>
  )
}

export default Header
