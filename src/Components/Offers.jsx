import React from 'react'
import exclusive_img from './Assets/exclusive_image.png'

const Offers = () => {
  return (
    <div className='mt-40 mx-auto container flex bg-gradient-to-b from-purple-200 via-purple-100 to-white'>
        <div className='flex-1 flex flex-col justify-center ml-40'>
            <h1 className='text-6xl font-bold mb-4'>Exclusive</h1>
            <h1 className='text-6xl font-bold mb-2'>Offers For You</h1>
            <p className='font-semibold'>ONLY ON BEST SELLERS PRODUCTS</p>
            <button className=' justify-center items-center rounded-3xl h-10 w-48 text-white bg-red-600 mt-[30px]'>Check Now</button>
        </div>
        <div className='flex flex-1 justify-center'>
            <img src={exclusive_img} className='w-1/2' alt="" />
        </div>
    </div>
  )
}

export default Offers