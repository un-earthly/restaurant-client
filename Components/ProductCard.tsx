import React from 'react'

export default function ProductCard() {
  return (
    <div className='border p-3 flex items-center justify-between shadow hover:shadow-lg group duration-300 rounded-md text-sm'>
      <div>
        <h1 className='font-bold text-gray-700 group-hover:text-pink-500 duration-300 capitalize'>product name</h1>
        <h1 className='text-xs text-gray-500 duration-300 capitalize'>product description</h1>
        <p className="mt-5 text-gray-700">
          $0.5
        </p>
      </div>

      <div className='h-20 w-20 rounded-md overflow-hidden'>
        <img className='w-full h-full object-cover' src="https://whatarestaurant.com/uploads/restorants/1c22ff42-5872-4f36-b2a9-2ab04ae1ae70_large.jpg" alt="" />
      </div>
    </div>
  )
}
