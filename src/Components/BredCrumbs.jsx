import React from 'react'
import arrow_icon from './Assets/breadcrum_arrow.png'

const BredCrumbs = (props) => {
    const {product} = props;
  return (
    <div className='flex'>
        Home <img src={arrow_icon} alt="" className='w-2 h-3 mt-2 ml-1 mr-1' /> Shop <img src={arrow_icon} alt="" className='w-2 h-3 mt-2 ml-1 mr-1' /> {product.category} <img src={arrow_icon} alt="" className='w-2 h-3 mt-2 ml-1 mr-1' /> {product.name}
    </div>
  )
}

export default BredCrumbs