import React from 'react'
import { CheckCircle2 } from 'lucide-react'
import codeImg  from '../assets/code.jpg'
import { checklistItems } from '../constants'

const WorkFlow = () => {
  return (
    <div className='mt-10'>
        <h2 className='text-3xl text-center sm:text-5xl lg:text-6xl tracking-wide'>Accelerate your 
            <span className='bg-gradient-to-r from-orange-500 to-orange-900 text-transparent bg-clip-text'>{" "}coding WorkFlow</span></h2>

    <div className='flex flex-wrap justify-center'>
        <div className='p-2 w-full lg:w-1/2'>
        <img src={codeImg} alt='code' />
        </div>
        <div className='pt-12 w-full lg:w-1/2 mt-12 pb-4'>
        {checklistItems.map((item, index)=>(
            <div key={index} className='flex mb-12'>
                <div className='text-green-400 mx-6 bg-neutral-900 h-10 w-10 p-2 justify-center items-center rounded-full'>
            <CheckCircle2/>
            </div>
            <div className=''>
                <h4>{item.title}</h4>
                <p className='text-md   text-neutral-600'>{item.description}</p>
            </div>
            </div>
        ))}
        </div>
    </div>

    </div>

  )
}

export default WorkFlow