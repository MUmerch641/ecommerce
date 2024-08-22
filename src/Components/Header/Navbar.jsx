import React from 'react'

export default function Navbar() {
  return (
    <div className='w-full text-white bg-blue-500 flex p-4 pl-10 text-lg pr-10 justify-between '>
      <h1 className='text-2xl'>Eduverse</h1>
      <div className='flex gap-10 items-center max-sm:hidden'>
        <p>Teach</p>
        <p>Scholarships</p>
        <p>Resources</p>
        <button className='border border-white pr-2 pl-2 pt-1 pb-1 rounded-lg'>Go to app</button>
      </div>
    </div>
  )
}