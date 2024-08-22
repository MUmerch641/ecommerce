import React from 'react'

export default function FeatureCard({ Heading, para }) {
    return (
        <div className='h-[300px] w-[300px] border border-blue-600 rounded-2xl p-4 '>
            <h1 className='text-2xl text-blue-600 font-semibold mb-4 max-sm:text-md'>{Heading}</h1>
            <p className='text-xl text-blue-600  mb-4 max-sm:text-sm'>{para}</p>
            <button className='text-blue-600 border border-blue-600 rounded-2xl p-2 font-semibold m'>Read more</button>
        </div>
    )
}
