import React from 'react'
import Sidebar from '../Templates/Sidebar'
import TopNav from '../Templates/TopNav'

const Home = () => {
    document.title = "StreamFlix | Home"
  return (
    <>
    <Sidebar/>  
    <div className='w-[80%] h-full'>
      <TopNav/>
    </div>
    </>
  )
}

export default Home
