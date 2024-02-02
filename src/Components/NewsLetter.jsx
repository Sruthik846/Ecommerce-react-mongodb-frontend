import React from 'react'

const NewsLetter = () => {
  return (
    <div className='flex flex-col justify-center items-center mt-40 mx-auto container mb-40 bg-gradient-to-b from-purple-200 via-purple-100 to-white h-96'>
        <h1 className='text-4xl font-bold mt-10 mb-5'>Get Exclusive offers on your email</h1>
        <p className='text-gray-700'>Subscribe to our newsletter and stay updated</p>
        <div>
            <input type="email" className='border border-gray-300 w-96 px-5 py-3 rounded-3xl bg-transparent' placeholder='Your email id' />
            <button className='rounded-3xl py-3 w-36 text-white bg-gray-800 mt-[30px] -ml-10'>Subscribe</button>
        </div>
    </div>
  )
}

export default NewsLetter