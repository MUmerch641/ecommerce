import React from 'react'

export default function Home() {
  return (
    <div className='flex justify-evenly h-[70vh] w-full'>
      <div className="left w-[30%] flex flex-col justify-center ">
        <h1 className='text-4xl text-blue-600 mb-2 font-bold'>Knowledge for everyone everywhere</h1>
        <h3 className='text-blue-600 mb-4 text-xl'>Accessible education for all</h3>
        <div className='flex mb-4'>
          <button className='bg-blue-600 text-white rounded-lg p-2 w-[45%] max-sm:w-full'>Get started</button>
          <button className='bg-white text-blue-600 rounded-lg p-2 w-[45%] ml-2 border border-blue-600 max-sm:w-full'>Learn more</button>
        </div>
        <div className='flex gap-10 justify-start items-center'>
          <div>
            <p className='text-blue-600 text-3xl'>100k+</p>
            <p className='text-blue-600'>Students</p>
          </div>

          <div>
            <p className='text-blue-600 text-3xl'>1k+</p>
            <p className='text-blue-600'>indicators</p>
          </div>

          <div>
            <p className='text-blue-600 text-3xl'>100+</p>
            <p className='text-blue-600'>Students</p>
          </div>
        </div>
      </div>


      <div className="relative w-[25%]">
        <img
          src="./src/assests/Images/Home/Vector.png"
          alt=""
          className="absolute top-10 left-0 w-[50vw] h-full object-contain max-sm:hidden"
        />
        <img
          src='./src/assests/Images/Home/Rectangle-removebg-preview.png'
          alt=""
          className="relative z-10 top-20 left-20 w-[15vw]  "
        />
      </div>


    </div>
  )
}
