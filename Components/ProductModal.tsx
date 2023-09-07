import { product } from '@/interfaces/product.interface';
import React from 'react'


export default function ProductModal({ product, setShowModal }: { product: product, setShowModal: (v: boolean) => void }) {
  // Define a local state variable for the counter
  const [count, setCount] = React.useState(0);

  // Function to increment the counter
  const increment = () => {
    setCount(count + 1);
  };

  // Function to decrement the counter
  const decrement = () => {
    if (count > 0) {
      setCount(count - 1);
    }
  };
  return (
    <div className={`capitalize rounded-lg z-50 fixed duration-300 inset-0 flex items-center justify-center bg-black/40`}>
      <div className='bg-white w-1/3 h-[85%] rounded-3xl' >
        <div className='p-5 text-center flex items-center justify-center relative'>
          <p>add to cart</p>
          <span onClick={() => setShowModal(false)} className='absolute right-10 cursor-pointer hover:bg-gray-200 duration-300 bg-gray-100 p-3 rounded-full'><svg fill="#737373" version="1.1" id="Capa_1"
            xmlns="http://www.w3.org/2000/svg" width="14px"
            height="14px"
            viewBox="0 0 41.756 41.756" stroke="#737373"
          >
            <g id="SVGRepo_bgCarrier" stroke-width="0"></g>
            <g id="SVGRepo_tracerCarrier" stroke-linecap="round" stroke-linejoin="round"></g><g id="SVGRepo_iconCarrier"> <g>
              <path d="M27.948,20.878L40.291,8.536c1.953-1.953,1.953-5.119,0-7.071c-1.951-1.952-5.119-1.952-7.07,0L20.878,13.809L8.535,1.465 c-1.951-1.952-5.119-1.952-7.07,0c-1.953,1.953-1.953,5.119,0,7.071l12.342,12.342L1.465,33.22c-1.953,1.953-1.953,5.119,0,7.071 C2.44,41.268,3.721,41.755,5,41.755c1.278,0,2.56-0.487,3.535-1.464l12.343-12.342l12.343,12.343 c0.976,0.977,2.256,1.464,3.535,1.464s2.56-0.487,3.535-1.464c1.953-1.953,1.953-5.119,0-7.071L27.948,20.878z"></path> </g> </g></svg></span>
        </div>
        <img src={product.img} alt="" />
        <div className="">
          <div className='p-4'>
            <h1 className='text-2xl font-bold'>{product.title}</h1>
          <h5 className='text-xs my-5 font-medium text-gray-500'>{product.description}</h5>
          </div>
          <div className='flex items-center flex-col p-3 w-full rounded-t-3xl'>

            <div className='flex items-center w-full justify-around'>

              <div className='flex items-center w-full justify-center flex-col font-semibold '>
                <h6 className='text-sm text-gray-600'>price</h6>
                <h2 className="text-2xl text-gray-700">
                  ${product.price}
                </h2>
              </div>
              <div className='flex flex-col w-full items-center justify-center'>
                <h3 >Quantity</h3>
                <div className='flex items-center font-semibold justify-between w-3/5'>
                  <button className='text-pink-500 text-3xl' onClick={decrement}>-</button>
                  <p className='text-2xl'>{count}</p>
                  <button className='text-pink-500 text-3xl' onClick={increment}>+</button>
                </div>
              </div>
            </div>
            <button className='text-white capitalize py-3 my-4 bg-pink-400 w-full  rounded-full'> add To cart</button>
          </div>

        </div>
      </div>

    </div>
  )
}
