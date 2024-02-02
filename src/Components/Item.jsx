import React from 'react'
import { Link } from 'react-router-dom'

const Item = (props) => {
  return (
    <div className='transition-transform transform hover:scale-110'>
        <Link to={`/product/${props.id}`}><img onClick={window.scrollTo(0,0)} src={props.image} className='h-96' alt="" /></Link>
        <p className='w-2/3'>{props.name}</p>
        <div className='flex gap-5 font-semibold'>
            <div>
                ${props.new_price}
            </div>
            <div className='line-through text-gray-400'>
                ${props.old_price}
            </div>
        </div>
    </div>
  )
}

export default Item