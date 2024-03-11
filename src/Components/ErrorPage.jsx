import React from 'react'
import { useNavigate, useRouteError } from 'react-router-dom'

const ErrorPage = () => {
  const Error = useRouteError()
  console.log(Error)
  const { error, status, statusText } = Error;
  const navigate = useNavigate()
const goHome = ()=>{
  navigate('/')
}
  if (performance.navigation.type === PerformanceNavigation.TYPE_RELOAD) {
    console.log("Page was manually reloaded.");
    window.location.href =('/')
  } else {
    console.log("Page was not manually reloaded.");
  }

  return (
    <div className='text-center my-28'>
      <h2 className='text-4xl font-bold text-red-500'>{status}</h2>
      <p className='text-red-500 font-bold '>{statusText}</p>
      <p className='font-bold'>{error.message}</p>
      <button onClick={goHome} className='bg-red-600 px-4 my-11 text-white'>reload to go home</button>
    </div>
  )
}

export default ErrorPage
