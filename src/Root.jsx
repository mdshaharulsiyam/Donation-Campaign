import React, { createContext, useState } from 'react'
import { Navigate, Outlet, useLoaderData, useNavigate } from 'react-router-dom'
import Header from './Components/Header/Header'
import { setLocalStorageData, getLocalStorageData } from './Localstorage'
export const detailsBtn = createContext({})
export const donateBtn = createContext({})
export const DonatedItems = createContext([])
const Root = () => {
  const [data, setData] = useState({})
  const navigate = useNavigate()
  const [donatedItem, setdonatedItem] = useState([]);
  let StoredData = [];
  const getStoredData = () => {
    let storedItem = localStorage.getItem('DonateId')
    let Data = []
    if (storedItem) {
      Data = JSON.parse(storedItem)
    } else {
      Data = [];
    }
    StoredData = [...Data]
  }
  getStoredData()
  const AddToDonate = (data) => {
    const newDonateItem = [...donatedItem, data]
    const alreadyDonate = donatedItem.find(item => data === item)
    if (!alreadyDonate) {
      setdonatedItem(newDonateItem)
      setLocalStorageData(data.Id)
      my_modal_2.showModal()
    } else {
      my_modal_1.showModal()
    }
    {
    }
  }

  return (
    <div>
      <DonatedItems.Provider value={StoredData}>
        <donateBtn.Provider value={AddToDonate}>
          <detailsBtn.Provider value={[data, setData]}>
            <Header></Header>
            <Outlet></Outlet>
          </detailsBtn.Provider>
        </donateBtn.Provider>
      </DonatedItems.Provider>
      <dialog id="my_modal_2" className="modal modal-bottom sm:modal-middle">
        <div className="modal-box">
          <h3 className="font-bold text-lg">Thank you for your donation!!!</h3>
          <p className="py-4">Grateful for your support!!!</p>
          <div className="modal-action">
            <form method="dialog">
              <button className="btn">Close</button>
            </form>
          </div>
        </div>
      </dialog>
    </div>
  )
}

export default Root
