import React, { useContext, useEffect, useState } from 'react'
import DonationCartItem from './DonationCartItem'
import { searchValue } from '../Home'
const DonationCard = () => {
  const [DonationCardItem, setDonationCardItem] = useState([])
  const [DonationCardItemDisplay, setDonationCardItemDisplay] = useState([])
  const [searchCategory, setsearchCategory] = useContext(searchValue)
  useEffect(() => {
    const fetchDonationCardItemData = async () => {
      const res = await fetch('./Donation-Campaign.json');
      let data = await res.json()
      setDonationCardItem(data)
      setDonationCardItemDisplay(data)
    }
    fetchDonationCardItemData()
  }, [])
  useEffect(() => {
    if (searchCategory) {
      const searchCategoryUpperCase = searchCategory.toUpperCase();
      const searchItem = DonationCardItem.filter(item => (item.Category.toUpperCase()).includes(searchCategoryUpperCase));
      setDonationCardItemDisplay(searchItem)
    } else {
      setDonationCardItemDisplay(DonationCardItem)
    }
  }, [searchCategory,DonationCardItem])
  
  return (
    <>
    {
      (DonationCardItemDisplay.length<=0) && <h2 className='text-center font-bold text-red-600 text-2xl py-8'>No Matches Found for "[ {searchCategory} ]" <br /> Try a Different Search Term</h2>
    }
    <div className='flex flex-wrap justify-center items-start container mx-auto lg:gap-[1.33%] sm:gap-[2%] my-12'>
      {
        DonationCardItemDisplay.map(DonationCardItem => <DonationCartItem key={DonationCardItem.Id} DonationCardItem={DonationCardItem}></DonationCartItem>)
      }
    </div>
    </>
  )
}

export default DonationCard
