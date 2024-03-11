import React, { createContext, useState } from 'react'
import Banner from './Baner/Banner'
import DonationCard from './DonationCartSection/DonationCard'
import Search from './Search'
export const searchValue = createContext([])
const Home = () => {

  const [searchCategory,setsearchCategory] =useState('')
  return (
    <div>
      <searchValue.Provider value={[searchCategory,setsearchCategory]}>
        <Banner></Banner>
        <DonationCard></DonationCard>
      </searchValue.Provider>
    </div>
  )
}

export default Home
