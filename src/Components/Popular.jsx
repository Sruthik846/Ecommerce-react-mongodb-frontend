import React, { useEffect, useState } from 'react'
// import data_product from './Assets/data'
import Item from './Item'

const Popular = () => {
  const [popularProducts, setPopularProducts] = useState([]);

  useEffect(() => {
    fetch('http://localhost:4000/popularinwomen')
    .then((response)=>response.json())
    .then((data)=>setPopularProducts(data))
  }, [])
  return (
    <div className='flex flex-col gap-5 justify-center items-center mt-40 mx-auto container'>
        <h1 className='font-bold text-center text-3xl'>POPULAR IN WOMEN</h1>
        <hr className='w-40 py-0.5 rounded-full bg-[#252525]'/>
        <div className='flex flex-row mt-10 gap-16'>
            {popularProducts.map((item,index) =>{
                return <Item key={index} id={item.id} name={item.name} image={item.image} new_price={item.new_price} old_price={item.old_price} />
            })}
        </div>
    </div>
  )
}

export default Popular