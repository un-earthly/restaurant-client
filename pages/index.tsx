import Image from 'next/image'
import { Inter } from 'next/font/google'
import Header from '@/Components/Header'
import Cart from '@/Components/Cart'

const inter = Inter({ subsets: ['latin'] })

export default function Home() {
  const scrollToTop = () => {
    window.scrollTo(0, 0);
  };
  return (
    <div className={`bg-white text-black ${inter.className}`}>
      <Header />
      <div className="grid lg:grid-cols-12">
        <div className="lg:col-span-9">
          products
        </div>
        <div className="lg:col-span-3">
          <Cart />
        </div>
      </div>
      <button className="bg-gray-400 duration-200 hover:bg-pink-500 text-white font-bold h-10 w-10 flex items-center justify-center rounded-full absolute bottom-10 right-10" onClick={() => scrollToTop()}>
        &#9650;
      </button>

    </div>
  )
}
