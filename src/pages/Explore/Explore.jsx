import React from 'react'
import Explorecard from '../../Components/ExploreCards'

export default function Explore() {
  return (
    <>
    <div className='bg-blue-600 flex justify-center h-[80vh] pt-4'>
        <div className='flex gap-10 flex-wrap w-[80%] p-3 overflow-y-auto'>
        <Explorecard dets={"lorem wesrdtf sredtygu sredtygu retfyg wesrdtf sredtygu sredtygu retfyg"} src={"./src/assests/Images/Explore/2.png"}/>
        <Explorecard dets={"lorem wesrdtf sredtygu sredtygu retfyg wesrdtf sredtygu sredtygu retfyg"} src={"./src/assests/Images/Explore/3.png"}/>
        <Explorecard dets={"lorem wesrdtf sredtygu sredtygu retfyg wesrdtf sredtygu sredtygu retfyg"} src={"./src/assests/Images/Explore/4.png"}/>
        <Explorecard dets={"lorem wesrdtf sredtygu sredtygu retfyg wesrdtf sredtygu sredtygu retfyg"} src={"./src/assests/Images/Explore/5.png"}/>
        <Explorecard dets={"lorem wesrdtf sredtygu sredtygu retfyg wesrdtf sredtygu sredtygu retfyg"} src={"./src/assests/Images/Explore/2.png"}/>
        <Explorecard dets={"lorem wesrdtf sredtygu sredtygu retfyg wesrdtf sredtygu sredtygu retfyg"} src={"./src/assests/Images/Explore/3.png"}/>
    </div>
    </div>
    
    <div className='bg-blue-600 text-white  text-2xl flex flex-col items-center p-4'>
        <p className='mb-2'>Explore more</p>
        <img className='w-[25px]' src="./src/assests/icon/Vector.png" alt="" />
    </div>
    </>
  )
}
