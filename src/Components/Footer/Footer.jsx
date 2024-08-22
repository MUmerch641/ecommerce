import React from 'react'

export default function Footer() {
  return (
    <div className='w-full h-[30vh] bg-blue-600 p-4 flex justify-between items-center'>
      <div className='text-white'>
        <h1 className='text-2xl font-semibold'>Eduverse</h1>
        <p>info@gmail.com</p>
        <p>copyright 2024 powered by Eduverse</p>
      </div>

      <div className='flex  flex-col  justify-center items-center'>
        <button className='bg-blue-600 text-white rounded-lg p-2 border border-white mb-3 '>Get start</button>
        <button className='bg-white text-blue-600 rounded-lg p-2  ml-2 border border-blue-600  '>Get App</button>

      </div>
    </div>
  )
}
