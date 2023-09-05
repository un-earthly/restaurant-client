import React from 'react'
export const navLinks = [
  {
    title: "Smørrebrød bundles",
    data: [
      1, 2, 3, 4, 5
    ]
  },
  {
    title: "Smørrebrød - Fish and Shellfish",
    data: [
      1, 2, 3, 4, 5
    ]
  },
  {
    title: "Smørrebrød - Meat",
    data: [
      1, 2
    ]
  },
  {
    title: "Smørrebrød - Vegetarian",
    data: [
      1, 2, 3
    ]
  },
  {
    title: "Large Plates",
    data: [
      1, 2, 3, 4, 5, 6, 7
    ]
  },
  {
    title: "Small Plates",
    data: [
      1, 2, 3
    ]
  },

  {
    title: "Sides",
    data: [
      1, 2, 3, 4, 5
    ]
  },

  {
    title: "Something Sweet",
    data: [
      1, 2, 3
    ]
  },

  {
    title: "Soft Drinks",
    data: [
      1, 2, 3, 56, 6, 5
    ]
  },

  {
    title: "Alcoholic",
    data: [
      1, 2, 3
    ]
  }
]
export default function Navbar() {

  return (
    <div className='gap-2 mt-7 text-sm flex items-center justify-center w-11/12 mx-auto flex-wrap'>
      {
        navLinks.map(l => <a className='px-7 py-3 bg-gray-100 shadow-sm hover:shadow-md rounded-full hover:text-pink-500 font-semibold text-gray-800 duration-300' href={`#${l.title.split(" ").join("")}`}>{l.title}</a>)
      }
    </div>
  )
}
