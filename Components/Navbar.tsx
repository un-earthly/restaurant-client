import React from 'react'
export const navLinks = [
  "Smørrebrød bundles",
  "Smørrebrød - Fish and Shellfish",
  "Smørrebrød - Meat",
  "Smørrebrød - Vegetarian",
  "Large Plates",
  "Small Plates",
  "Sides",
  "Something Sweet",
  "Soft Drinks",
  "Alcoholic"
]
export default function Navbar() {
  return (
    <div className='gap-2 mt-7 text-sm flex items-center justify-center w-11/12 mx-auto flex-wrap'>
      {
        navLinks.map(l => <a className='px-7 py-3 bg-gray-100 shadow-sm hover:shadow-md rounded-full hover:text-pink-500 font-semibold text-gray-800 duration-300' href={`#${l.split(" ").join("")}`}>{l}</a>)
      }
    </div>
  )
}
