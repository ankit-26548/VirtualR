import React from 'react'
import video1 from '../assets/video1.mp4'
import video2 from '../assets/video2.mp4'

const HeroSection = () => {
  return (
    <div className='flex flex-col items-center mt-6 lg:mt-10'>
        <h1 className='text-4xl sm:text-6xl lg:text-7xl text-center tracking-wide'>
            VirtualR build Websites for 
            <span className='bg-gradient-to-r from-orange-500 to-orange-900 text-transparent bg-clip-text'> developers</span>
        </h1>
        <p className='mt-10 text-lg text-center text-neutral-500 max-w-4xl'> Designed with cutting-edge technologies like React and Tailwind CSS, VirtualR provides a professional and user-friendly interface that helps developers present their work with impact and clarity.</p>
        <div className='flex justify-center my-4'>
            <a href="#" className='py-3 px-4 mx-3 rounded-md bg-gradient-to-r from-orange-500 to-orange-900'>Start Free Trial</a>
            <a href="#" className='py-3 px-4 mx-3 rounded-md border'>Documentation</a>
        </div>
        <div className='flex justify-center mt-1'>
            <video  autoPlay loop muted className='rounded-lg w-1/2 border border-orange-700 shadow-orange-400 mx-2 my-4'>
            <source src={video1} type='video/mp4' />Your browser does not support the video tag.</video>

             <video  autoPlay loop muted className='rounded-lg w-1/2 border border-orange-700 shadow-orange-400 mx-2 my-4'>
            <source src={video2} type='video/mp4' />Your browser does not support the video tag.</video>
             
        </div>
    </div>

  )
}

export default HeroSection