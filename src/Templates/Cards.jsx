import React from 'react'

const Cards = ({trends}) => {
// console.log(trends.name)
  return (
    <div className='main w-full h-[40vh] p-5 '>
    <div className="headings mb-4">
      <h1 className='text-2xl  font-semibold text-white '>   Trendings..

      <i className=" ml-1 text-white  ri-blaze-fill">
        
      </i>
      </h1>
    </div>
    <div className='.card-container h-[80%] w-full flex overflow-x-auto '>
      <div className="cards h-[98%] min-w-[20%] mr-3  bg-zinc-800 rounded-md">
      </div>
    </div>
    </div>
  )
}

export default Cards
