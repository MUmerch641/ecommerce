import React from 'react'
import FeatureCard from '../../Components/FeatureCard'

export default function Feature() {
    return (
        <div className='p-5 h-[90vh] flex flex-col justify-center'>
            <div className='ml-[130px] mb-4 max-sm:ml-0 '>
            <h1 className='text-4xl text-blue-600 font-bold'>Features</h1>
            <p className=' text-blue-600 text-xl font-semibold'>Discover the benefits of our platform</p>
            </div>
            <div className='flex flex-wrap justify-evenly overflow-x-auto gap-y-4'>
                <FeatureCard Heading={'Relaxing and learning'} para={' Cumque consectetur facere praesentium recusandae necessitatibus quo minus autem dolore assumenda id'} />
                <FeatureCard Heading={'Relaxing and learning'} para={' Cumque consectetur facere praesentium recusandae necessitatibus quo minus autem dolore assumenda id'} />
                <FeatureCard Heading={'Relaxing and learning'} para={' Cumque consectetur facere praesentium recusandae necessitatibus quo minus autem dolore assumenda id'} />
            </div>
        </div>
    )
}
