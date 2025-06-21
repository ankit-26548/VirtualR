import React from 'react'
import { testimonials } from '../constants'

const Testimonials = () => {
  return (
     <div className='mt-10'>
        <h2 className='text-2xl sm:text-5xl text-center lg:text-5xl text-neutral-400 tracking-wide'>What People are saying</h2>
        <div className='flex flex-wrap justify-center'>
        {testimonials.map((data,index)=>(
            <div key={index} className='w-full sm:w-1/2 lg:w-1/3 px-4 py-4'>
                <div className='bg-neutral rounded-md p-6 text-md border border-neutral-800 font-thin'><p>{data.text}</p>
                 <div className='flex mt-8 items-start'>
                    <img src={data.image} className='w-12 h-12 mr-6 rounded-full border border-neutral-800' alt={data.user} />
                     <div>
                    <h6 className=''>{data.user}</h6>
                    <p className='text-neutral-600 text-sm font-bold'>{data.company}</p>
                </div>
                </div>
               
                
                
                
                </div>
               
            </div>
        ))}
        </div>
        </div>
  )
}

export default Testimonials