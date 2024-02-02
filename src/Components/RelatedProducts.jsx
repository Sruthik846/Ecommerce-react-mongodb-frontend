import React from 'react'
import data_product from './Assets/data'
import Item from './Item'

const RelatedProducts = () => {
  return (
    <div className='mx-auto container mb-20'>
        <div className='flex flex-col justify-center items-center'>
        <h1 className='font-bold text-center text-3xl'>Related Products</h1>
        <hr className='w-40 py-0.5 rounded-full bg-[#252525] mt-3'/>
        <div className='grid grid-cols-4 mt-10 gap-4'>
            {data_product.map((item,i)=>{
                return(
                    <Item key={i} id={item.id} name={item.name} image={item.image} new_price={item.new_price} old_price={item.old_price}/>
                )
            })}
        </div>
        </div>
    </div>
  )
}

export default RelatedProducts