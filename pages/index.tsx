import { Inter } from 'next/font/google'
import Header from '@/Components/Header'
import Cart from '@/Components/Cart'
import Navbar, { navLinks } from '@/Components/Navbar'
import ProductCard from '@/Components/ProductCard'

const inter = Inter({ subsets: ['latin'] })

export default function Home() {
  const scrollToTop = () => {
    window.scroll({
      top: 0,
      left: 0,
      behavior: 'smooth'
    });
  };
  return (
    <div className={`bg-white text-black ${inter.className}`}>
      <div className="grid lg:grid-cols-12">
        <div className="col-span-12">
          <Header />
        </div>
          <div className='col-span-12 sticky top-0 bg-white shadow-lg p-6'>
            <Navbar />
          </div>
        <div className="lg:col-span-9">
          {
            navLinks.map((l, index) => <section key={index} className='space-y-10 my-20  w-3/4 mx-auto ' id={l.title.split(" ").join("")}>
              <h1 className='font-bold text-gray-700 text-2xl border-b pb-4'>{l.title}</h1>
              <div className="grid lg:grid-cols-2 gap-5">{
                l.data.map((item, index) => <ProductCard key={index} />)
              }</div>
            </section>)
          }
        </div>
        <div className="lg:col-span-3">
          <Cart />
        </div>
      </div>
      <button className="bg-gray-400 duration-200 hover:bg-pink-500 text-white font-bold h-10 w-10 flex items-center justify-center rounded-full fixed bottom-10 right-10" onClick={() => scrollToTop()}>
        &#9650;
      </button>

    </div>
  )
}
