import React, { useEffect, useState } from 'react'
import new_collections from './Assets/new_collections.js'
import Item from './Item'

const NewCollections = () => {
  const [new_collections, setNew_Collections] = useState([]);

  useEffect(() => {
    fetch('http://localhost:4000/newcollections')
    .then((response)=>response.json())
    .then((data)=>setNew_Collections(data))
  }, [])
  return (
    <div className='flex flex-col gap-5 justify-center items-center mt-40 mx-auto container'>
        <h1 className='font-bold text-center text-3xl'>NEW COLLECTIONS</h1>
        <hr className='w-40 py-0.5 rounded-full bg-[#252525]' />
        <div className='grid grid-cols-4 mt-10 gap-4'>
            {new_collections.map((item,index) =>{
                return <Item key={index} id={item.id} name={item.name} image={item.image} new_price={item.new_price} old_price={item.old_price} />
            })}
        </div>
    </div>
  )
}

export default NewCollections