import React, { useContext } from 'react'
import star_icon from './Assets/star_icon.png'
import star_dull_icon from './Assets/star_dull_icon.png'
import { ShopContext } from '../Context/ShopContext';

const Productdisplay = (props) => {
    const {product} = props;
    const {addToCart} = useContext(ShopContext);
  return (
    <div className='flex gap-10 mx-auto container mt-20 mb-20'>
        <div className='flex gap-5'>
            <div className='flex flex-col gap-3'>
                <img src={product.image} alt="" className='w-28 h-28' />
                <img src={product.image} alt="" className='w-28 h-28'  />
                <img src={product.image} alt="" className='w-28 h-28'  />
                <img src={product.image} alt="" className='w-28 h-28'  />
            </div>

            <div className=' w-96'>
              <img src={product.image} className='h-full w-full' alt="" />  
            </div>
        </div>

        <div className='flex flex-1 flex-col gap-4'>
            <h1 className='text-3xl font-semibold'>{product.name}</h1>
            <div className='flex gap-2'>
                <img src={star_icon} alt="" className='w-3 h-3 mt-2' />
                <img src={star_icon} alt="" className='w-3 h-3 mt-2'/>
                <img src={star_icon} alt="" className='w-3 h-3 mt-2' />
                <img src={star_dull_icon} alt="" className='w-3 h-3 mt-2'/>
                <p>(122)</p>
            </div>

            <div className='flex gap-5'>
                <div className='line-through text-gray-500 font-medium'>${product.old_price}</div>
                <div className='text-orange-600 font-medium'>${product.new_price}</div>
            </div>

            <div>
                Lorem ipsum dolor, sit amet consectetur adipisicing elit. Est cum expedita minima, deserunt optio perferendis, voluptas labore, ullam reiciendis voluptatem maxime? Voluptatibus, non. A, omnis impedit! Neque ex reprehenderit beatae.
            </div>

            <div>
                <h1>Select size</h1>
                <div className='flex gap-2 mt-3'>
                    <div className='border border-gray-200 px-4 py-2 bg-gray-50'>S</div>
                    <div className='border border-gray-200 px-4 py-2 bg-gray-50'>M</div>
                    <div className='border border-gray-200 px-4 py-2 bg-gray-50'>L</div>
                    <div className='border border-gray-200 px-4 py-2 bg-gray-50'>XL</div>
                    <div className='border border-gray-200 px-4 py-2 bg-gray-50'>XXL</div>
                </div>
            </div>
            <button onClick={()=>{addToCart(product.id)}} className='bg-orange-600 text-white py-2 w-1/4'>Add to Cart</button>
            <p><span className='font-semibold'>Category :</span>Women, T-shirt, Crop-top</p>
            <p><span className='font-semibold'>Tags :</span>Modern,Latest</p>
        </div>
    </div>
  )
}

export default Productdisplay