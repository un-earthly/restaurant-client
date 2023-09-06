import React from 'react'

export default function Cart({ price = "0.00" }: { price?: string | number }) {
    return (
        <div className='sticky top-44'>
            <div className='border shadow-sm rounded m-7 '>
                <div className='border-b p-3 text-gray-500 flex justify-center flex-col items-center'>
                    <h1 className='text-sm font-bold'>Order Summary</h1>
                    <h3 className='text-sm font-semibold'>
                        Minimum order £{price}
                    </h3>
                </div>
                <div className='min-h-max flex items-center justify-center'>
                    <p className='text-red-500 text-xs p-16'>Please select some items.!</p>
                </div>
            </div>
            <div className='border shadow-sm rounded m-7'>
                <div className='border-b p-3 text-gray-500 flex justify-center flex-col items-center'>
                    <h1 className='text-sm font-bold'>Opening Hours</h1>
                </div>
                <div className='min-h-max flex items-center justify-center'>
                    <p className='text-red-500 text-xs p-16'>Please select some items.!</p>
                </div>
            </div>
        </div>
    )
}
