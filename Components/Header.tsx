import React from 'react'
import Navbar from './Navbar'

export default function Header() {
  const bgImg = "https://whatarestaurant.com/uploads/restorants/a49fdbcb-3fe1-46a4-a37b-af7c0bf74579_cover.jpg"
  return (
    <div className=''>
      {/* Banner */}
      <div style={{
        backgroundImage: `url(${bgImg})`
      }} className='bg-cover bg-center h-96'>

      </div>
      <Navbar />
    </div>
  )
}
