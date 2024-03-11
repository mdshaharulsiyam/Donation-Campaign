import React, { useContext } from 'react'
import { detailsBtn } from '../../../Root';
import { Navigate, useNavigate } from 'react-router-dom';
const DonationCartItem = ({DonationCardItem}) => {
    const {id,Picture,Title,Category,category_bg,card_bg,text_Color } = DonationCardItem;
    const cardBg ={
        background: card_bg,
        color : text_Color
    }
    const categoryBg ={
        background: category_bg
    }
    const navigateto =useNavigate()
    const [data, setData] = useContext(detailsBtn)
    const ShowDetails = async()=>{
     await setData(DonationCardItem)
      navigateto('/details')
    }
  return (
    <div onClick={ShowDetails} style={cardBg} className={`lg:w-[24%] sm:w-[49%] w-full rounded-lg box-border overflow-hidden mt-5 cursor-pointer`}>
        <img className='object-cover w-full h-60' src={Picture} alt="" />
        <p style={categoryBg} className='inline-block text-sm font-medium p-1 px-2 m-4 rounded-md'>{Category}</p>
        <h2 className='text-xl font-semibold ml-4 pb-3'>{Title}</h2>
</div>
  )
}

export default DonationCartItem
