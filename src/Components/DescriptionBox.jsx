import React from 'react'

const DescriptionBox = () => {
  return (
    <div className='mx-auto container mb-20'>
        <div className='flex '>
            <div className='border border-gray-200 p-3 w-32 text-center'>Description</div>
            <div className='border border-gray-200 p-3 w-32 text-center'>Reviews (122)</div>
        </div>
        <div className='border border-gray-200 p-8 text-justify'>
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Reiciendis veniam porro ea, ipsa qui, necessitatibus dolor architecto perferendis officia mollitia dignissimos ut cumque consequuntur vero eaque voluptas, accusamus voluptates sed!
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Expedita numquam reiciendis optio quisquam labore asperiores totam quos facilis natus voluptate nisi, quaerat nulla obcaecati? Facilis, eum. At architecto tempore provident.
            </p>
        </div>
    </div>
  )
}

export default DescriptionBox