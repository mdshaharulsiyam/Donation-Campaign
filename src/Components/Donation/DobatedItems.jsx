import React, { useContext, useState } from 'react'
import { Navigate, useNavigate } from 'react-router-dom';
import { detailsBtn } from '../../Root';
const DobatedItems = ({items}) => {

    const {id,Picture,Title,Category,category_bg,card_bg,text_Color } = items;
    const cardBg ={
        background: card_bg,
        color : text_Color
    }
    const buttonBg ={
      background:text_Color,
      color: "#FFF"
    }
    const categoryBg ={
        background: category_bg
    }
    const navigateto =useNavigate()
    const [data, setData] = useContext(detailsBtn)
    const ShowDetails = async()=>{
     await setData(items)
      navigateto('/details')
    }
  return (
    <div style={cardBg} className={`sm:w-[49%] w-full rounded-lg box-border overflow-hidden flex-col lg:flex-row mt-5 flex justify-start items-center`}>
        <img className='object-cover h-60  w-full lg:w-48 lg:h-48' src={Picture} alt="" />
        <div className='ml-4 m-3'>
        <p style={categoryBg} className='inline-block text-sm font-medium p-1 px-2 rounded-md'>{Category}</p>
        <h2 className='text-xl font-semibold pb-3'>{Title}</h2>
        <button style={buttonBg} onClick={ShowDetails} >View Details</button>
        </div>
</div>
  )
}

export default DobatedItems
