import React, { useContext, useEffect, useState } from 'react'
import { DonatedItems } from '../../Root'
import DobatedItems from './DobatedItems';
const Donation = () => {
  const [numberOfCartWillShow,setNumberOfCartWillShow] = useState(4)
  const StoredData = useContext(DonatedItems);
  const [DonationCardItem,setDonationCardItem] = useState([])
 let finalData = [];
  useEffect(()=>{
    const fetchDonationCardItemData = async ()=>{
      const res = await fetch('./Donation-Campaign.json');
      let data = await res.json()
      setDonationCardItem(data)
    }
    fetchDonationCardItemData()
  },[])
  StoredData.forEach(item => {
    let DonatedItem =  DonationCardItem.find(Items=> Items.Id === item);
    if(DonatedItem){
      finalData.push(DonatedItem)
    }
  });
  const [hidden, setHidden] = useState('inline-block');
  const ShowDetails =()=>{
    setHidden('hidden')
    setNumberOfCartWillShow(DonationCardItem.length)
  }
  return (
    <>
    <div className='flex flex-wrap justify-start items-center container mx-auto sm:gap-[2%] my-12'>
      {
       finalData.slice(0,numberOfCartWillShow).map(item=> <DobatedItems key={item.Id} items={item}></DobatedItems>)
      }
    </div>
   <div className=' text-center mb-14'>
    {
      (finalData.length > 4) && <button onClick={ShowDetails} className={`bg-[#009444] px-7 font-semibold ${hidden}  text-base mx-auto text-white`}>See All</button>
    }
    {
      (finalData.length <=0) && <h2 className='text-center font-bold text-red-600 text-2xl py-8'>You haven't made any donations yet</h2>
      
    }
   </div>
    </>
  )
}

export default Donation
