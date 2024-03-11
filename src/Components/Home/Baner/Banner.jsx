import React, { useContext } from 'react'
import { searchValue } from '../Home'
const Banner = () => {
  const [searchCategory,setsearchCategory] = useContext(searchValue)
  const handekeyUpSearch = (e)=>{
    setsearchCategory(e.target.value)
  }
  const handeSearch = (e)=>{
    e.preventDefault();
    setsearchCategory(e.target.search.value)
  }
  return (
    <div>
      <div className='relative'>
      <img className='object-cover min-h-[320px] w-full' src="Rectangle.png" alt="baner" />
      <div className=' bg-opacity-80 bg-[#FFFFFF] absolute w-full h-full top-0 left-0 flex justify-center items-center flex-col'>
        <h2 className='sm:text-4xl text-lg text-[#0B0B0B] font-bold'>I Grow By Helping People In Need</h2>
        <span className='flex justify-center items-center my-5'>
           <form onSubmit={handeSearch}>
           <input onKeyUp={handekeyUpSearch} className='p-[12.5px] rounded-tl-lg rounded-bl-lg text-sm' type="text" name="search" placeholder='Search here....'/>
            <button className='bg-[#FF444A] text-white rounded-tr-lg rounded-br-lg rounded-bl-none rounded-tl-none'>search</button>
           </form>
        </span>
      </div>
      </div>
    </div>
  )
}

export default Banner
