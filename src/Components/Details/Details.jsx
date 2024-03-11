import React, { useContext } from 'react'
import { detailsBtn, donateBtn } from '../../Root';
const Details = () => {
  const [data,setData] = useContext(detailsBtn)
  const donate = useContext(donateBtn)
  const { id, Picture, Title, Category,Description,Price,text_Color} = data;
  const bgcolor ={
    background:text_Color
  }
  return (
    <div className='my-6 mt-24 container mx-auto'>
      <div className='w-full rounded-lg overflow-hidden relative'>
        <img className='w-full object-cover' src={Picture} alt="" />
        <div className='absolute bottom-0 left-0 w-full bg-black bg-opacity-50 p-10'>
          <button onClick={()=>donate(data)} style={bgcolor} className='text-white text-xl font-semibold'>Donate {Price}</button>
        </div>
      </div>
    <h2 className='text-4xl font-bold pt-8 pb-4 text-[#0B0B0B]'>{Title}</h2>
    <p className='text-base leading-7 text-[#545454]'>{Description}</p>
    </div>
  )
}

export default Details
