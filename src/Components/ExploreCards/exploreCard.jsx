import React from 'react'

function exploreCard({ src, dets }) {
    return (
        <div className='h-[200px] w-[300px] p-2 '>
            <img src={src} alt="image" />
            <p className='text-white text-center'>{dets}</p>
        </div>
    )
}

export default exploreCard