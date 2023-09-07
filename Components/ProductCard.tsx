import React, { useState } from 'react';
import { product } from '@/interfaces/product.interface';
interface Props {
  product: product,
  setShowModal: (v: boolean) => void
}
export default function ProductCard({ product, setShowModal }: Props) {

  return (
    <div onClick={() => setShowModal(true)} className='border p-3 flex items-center justify-between shadow hover:shadow-lg group duration-300 rounded-md text-sm'>
      <div>
        <h1 className='font-bold text-gray-700 group-hover:text-pink-500 duration-300 capitalize'></h1>
        <h1 className='text-xs text-gray-500 duration-300 capitalize'>{product.description}</h1>
        <p className="mt-5 text-gray-700">
          ${product.price}
        </p>
      </div>

      <div className='h-20 w-20 rounded-md overflow-hidden'>
        <img className='w-full h-full object-cover' src={product.img} alt="" />
      </div>


    </div>
  );
}
