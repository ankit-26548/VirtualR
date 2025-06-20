import React from 'react'
import { CheckCircle2 } from 'lucide-react'
// import { pricingOptions } from '../constants'
import { features, pricingOptions } from '../constants'

const Pricing = () => {
  return (
    <div className='mt-10'>
        <h2 className='text-3xl sm:text-5xl text-center lg:text-6xl tracking-wide'>Pricing</h2>
<div className='flex flex-wrap mt-10'>
  {pricingOptions.map((option, index)=>(
    <div key={index} className='w-full sm:w-1/2 lg:w-1/3 p-2 '>
      <div className='p-10 border border-neutral-900 rounded-xl'> 
        <p className='text-4xl mb-8'>{option.title}
          {option.title === "Pro" && <span className='bg-gradient-to-r from-orange-600 to-red-900 text-transparent bg-clip-text text-xl mb-4 ml-9'>(Most Popular)</span>}
        </p>
        <p className='mb-8'>
          <span className='text-5xl mt-6 mr-2'>{option.price}</span>
          <span className='text-neutral-400 tracking-tight'>/Month</span>
        </p>

<ul>
  {option.features.map((feature, index)=>(
    <li key={index} className='mt-8 flex items-center'>
      <CheckCircle2/>
      <span className='ml-4'>{feature}</span>
    </li>
  ))}
</ul>
<a href='#' className=' inline-flex  justify-center items-center text-center w-full h-10 mt-15 border border-orange-900 rounded-lg text-xl hover:bg-gradient-to-r hover:from-orange-500 hover:to-red-900 transition duration-200' >Subscribe</a>

      </div>
    </div>
  ))}
</div>


    </div>
    
  )
}

export default Pricing