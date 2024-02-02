import React from 'react'
import hand_icon from './Assets/hand_icon.png'
import arro_icon from './Assets/arrow.png'
import hero_image from './Assets/hero_image.png'

const Hero = () => {
  return (
    <div className='h-full flex from-purple-200 via-purple-100 to-white'>
        <div className='flex-1 flex flex-col justify-center pl-[180px] gap-5 leading-10 '>
            <h2 className='text-[#090909] text-lg font-bold'>NEW ARRIVALS ONLY</h2>
            <div className='flex flex-col gap-8'>
                <div className='flex items-center gap-2'>
                    <div className='text-[#171717] text-[80px] font-bold mt-1'>new</div>
                    <img src={hand_icon} className='w-16' alt="" />
                </div>
                <div className='text-[#171717] text-[80px] font-bold'>collections</div>
                <div className='text-[#171717] text-[80px] font-bold'>for everyone</div>
            </div>
            <div className='flex justify-center items-center gap-4 rounded-3xl h-10 w-48 text-white bg-red-600 mt-[30px]'>
                <div>Latest collection</div>
                <img src={arro_icon} alt="" />
            </div>
        </div>
        <div className='flex flex-1 justify-center items-center'>
            <img src={hero_image} className='h-4/5' alt="" />
        </div>
    </div>
  )
}

export default Hero