import React from 'react'
import footer_logo from './Assets/logo_big.png'
import instagram_icon from './Assets/instagram_icon.png'
import pintester_icon from './Assets/pintester_icon.png'
import whatsapp_icon from './Assets/whatsapp_icon.png'

const Footer = () => {
  return (
    <div className='flex flex-col justify-center items-center gap-7 mx-auto container'>
        <div className='flex justify-center items-center gap-2'>
            <img src={footer_logo} alt="" />
            <p className='font-bold text-3xl'>SHOPPER</p>
        </div>
        <ul className='flex gap-5'>
            <li>Company</li>
            <li>Products</li>
            <li>Offices</li>
            <li>About</li>
            <li>Contact</li>
        </ul>
        <div className='flex gap-2'>
            <div className='bg-slate-100 p-2 rounded-lg'>
                <img src={instagram_icon} alt="" />
            </div>
            <div className='bg-slate-100 p-2 rounded-lg'>
                <img src={pintester_icon} alt="" />
            </div>
            <div className='bg-slate-100 p-2 rounded-lg'>
                <img src={whatsapp_icon} alt="" />
            </div>
        </div>
        <div className='w-full flex flex-col justify-center items-center'>
             <hr className='w-full rounded-full bg-gray-500' />
            <p className='mt-4'>Copyright @ 2023 - All Rights Reserved </p>       
        </div>
    </div>
  )
}

export default Footer