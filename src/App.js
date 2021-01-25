import React from 'react'
import FetchUsers from './FetchUsers'

const App = () => {
  return (
    <>
      <h1 className="text-center bg-gray-900 text-white text-4xl pt-5 lg:text-6xl">
        Random User Application
      </h1>
      <FetchUsers />
    </>
  )
}

export default App
