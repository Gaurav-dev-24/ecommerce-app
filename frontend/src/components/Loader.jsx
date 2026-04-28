import React from 'react'
import { assets } from '../assets/assets'

const Loader = () => {
  return (
    <div className='fixed inset-0 z-[9999] flex items-center justify-center bg-white px-4'>
      <div className='flex flex-col items-center gap-4 sm:gap-6'>
        <div className='relative w-16 h-16 sm:w-24 sm:h-24'>
          <div className='absolute inset-0 rounded-full border-[2px] sm:border-[3px] border-gray-200'></div>
          <div className='absolute inset-0 rounded-full border-[2px] sm:border-[3px] border-transparent border-t-black animate-spin'></div>
          <div className='absolute inset-1.5 sm:inset-2 rounded-full border-[1.5px] sm:border-[2px] border-transparent border-b-gray-700 animate-spin' style={{ animationDuration: '1.5s', animationDirection: 'reverse' }}></div>
          <div className='absolute inset-0 flex items-center justify-center'>
            <img src={assets.logo} alt='' className='w-6 sm:w-10 opacity-90' />
          </div>
        </div>
        <div className='flex flex-col items-center gap-1.5 sm:gap-2'>
          <p className='text-xs sm:text-sm tracking-[0.3em] sm:tracking-[0.4em] text-gray-800 font-medium'>FOREVER</p>
          <div className='flex gap-1'>
            <span className='w-1 h-1 sm:w-1.5 sm:h-1.5 bg-gray-800 rounded-full animate-bounce' style={{ animationDelay: '0ms' }}></span>
            <span className='w-1 h-1 sm:w-1.5 sm:h-1.5 bg-gray-800 rounded-full animate-bounce' style={{ animationDelay: '150ms' }}></span>
            <span className='w-1 h-1 sm:w-1.5 sm:h-1.5 bg-gray-800 rounded-full animate-bounce' style={{ animationDelay: '300ms' }}></span>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Loader
