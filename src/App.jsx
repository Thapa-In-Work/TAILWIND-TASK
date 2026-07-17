import { Link } from 'react-router-dom'
import Header from './components/Header'
import Footer from './components/Footer'

function App() {
  return (
    <div className="min-h-screen flex flex-col bg-stone-50 text-gray-800">
      <Header />
      <section className="mt-5 flex flex-col lg:flex-row justify-center gap-10 lg:gap-20 px-4 lg:px-0">
        <div className="w-full lg:max-w-170">
          <div className="mt-7 border-b-2 shadow-xl">
            <img src="https://demo-themewinter.com/gloreya/wp-content/uploads/2019/10/news_image3-min-750x465.jpg" alt="" className="w-full" />
            <div className="ml-5 mr-5 mt-5 px-5 py-5">
              <h1 className="text-xl md:text-3xl font-bold mb-4">Labor Depar rules pro as tweaks overtime</h1>
              <p className="mb-4">You're cooking a meal, especially a holiday meal, to be served to friends or family, the key to success is planning. Don't run around second guessing yourself and what you're going to make. Plan your menu, do the shopping, and…</p>
              <Link to="/blog1" className="text-red-600 flex overflow-hidden items-center ">Continue <span><svg className="w-4 fill-red-600" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 640 640"><path d="M566.6 342.6C579.1 330.1 579.1 309.8 566.6 297.3L406.6 137.3C394.1 124.8 373.8 124.8 361.3 137.3C348.8 149.8 348.8 170.1 361.3 182.6L466.7 288L96 288C78.3 288 64 302.3 64 320C64 337.7 78.3 352 96 352L466.7 352L361.3 457.4C348.8 469.9 348.8 490.2 361.3 502.7C373.8 515.2 394.1 515.2 406.6 502.7L566.6 342.7z"/></svg></span></Link>
            </div>
          </div>
          <div className="mt-7 border-b-2 shadow-xl">
            <img src="https://demo-themewinter.com/gloreya/wp-content/uploads/2019/10/news_image2-min-750x465.jpg" alt="" className="w-full" />
            <div className="ml-5 mr-5 mt-5 px-5 py-5">
              <h1 className="text-xl md:text-3xl font-bold mb-4">New restaurant town that Looking think that</h1>
              <p className="mb-4">You're cooking a meal, especially a holiday meal, to be served to friends or family, the key to success is planning. Don't run around second guessing yourself and what you're going to make. Plan your menu, do the shopping, and…</p>
              <Link to="/blog2" className="text-red-600 flex overflow-hidden items-center ">Continue <span><svg className="w-4 fill-red-600" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 640 640"><path d="M566.6 342.6C579.1 330.1 579.1 309.8 566.6 297.3L406.6 137.3C394.1 124.8 373.8 124.8 361.3 137.3C348.8 149.8 348.8 170.1 361.3 182.6L466.7 288L96 288C78.3 288 64 302.3 64 320C64 337.7 78.3 352 96 352L466.7 352L361.3 457.4C348.8 469.9 348.8 490.2 361.3 502.7C373.8 515.2 394.1 515.2 406.6 502.7L566.6 342.7z"/></svg></span></Link>
            </div>
          </div>
          <div className="mt-7 border-b-2 shadow-xl">
            <img src="https://demo-themewinter.com/gloreya/wp-content/uploads/2019/10/news_image1-min-750x465.jpg" alt="" className="w-full" />
            <div className="ml-5 mr-5 mt-5 px-5 py-5">
              <h1 className="text-xl md:text-3xl font-bold mb-4">Starbucks invests $100M in new retail startups</h1>
              <p className="mb-4">You're cooking a meal, especially a holiday meal, to be served to friends or family, the key to success is planning. Don't run around second guessing yourself and what you're going to make. Plan your menu, do the shopping, and…</p>
              <Link to="/blog3" className="text-red-600 flex overflow-hidden items-center ">Continue <span><svg className="w-4 fill-red-600" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 640 640"><path d="M566.6 342.6C579.1 330.1 579.1 309.8 566.6 297.3L406.6 137.3C394.1 124.8 373.8 124.8 361.3 137.3C348.8 149.8 348.8 170.1 361.3 182.6L466.7 288L96 288C78.3 288 64 302.3 64 320C64 337.7 78.3 352 96 352L466.7 352L361.3 457.4C348.8 469.9 348.8 490.2 361.3 502.7C373.8 515.2 394.1 515.2 406.6 502.7L566.6 342.7z"/></svg></span></Link>
            </div>
          </div>
        </div>
        <div className="w-full lg:max-w-100">
          <div class="p-4 bg-gray-50 flex flex-col gap-6">

            <div className="flex border border-gray-300 overflow-hidden bg-white">
              <input type="text" placeholder="Search" className="w-full px-3 py-2 text-sm text-gray-600 placeholder-gray-400 focus:outline-none" />
              <button className="bg-red-600 hover:bg-red-700 text-white px-4 flex items-center justify-center">
                <svg className="w-4 h-4" fill="none" stroke="currentColor" stroke-width="2" viewBox="0 0 24 24">
                  <path stroke-linecap="round" stroke-linejoin="round" d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"></path>
                </svg>
              </button>
            </div>

            <div className="bg-white border border-gray-200 p-5">
              <h3 className="text-lg font-bold text-gray-800">Recent Posts</h3>
              <div className="w-10 h-0.5 bg-red-600 mt-2 mb-4"></div>
              <ul className="text-sm text-gray-600 space-y-3">
                <li ><Link to="/blog1" className="hover:text-red-600">Labor Depar rules pro as tweaks overtime</Link></li>
                <li className="border-t border-dashed border-gray-200 pt-3"><Link to="/blog2" className="hover:text-red-600">New restaurant town that Looking think that</Link></li>
                <li className="border-t border-dashed border-gray-200 pt-3"><Link to="/blog3" className="hover:text-red-600">Starbucks invests $100M in new retail startups</Link></li>
              </ul>
            </div>
 
            <div className="bg-white border border-gray-200 p-5">
              <h3 className="text-lg font-bold text-gray-800">Recent Comments</h3>
              <div className="w-10 h-0.5 bg-red-600 mt-2 mb-4"></div>
            </div>

            <div className="bg-white border border-gray-200 p-5">
              <h3 className="text-lg font-bold text-gray-800">Archives</h3>
              <div className="w-10 h-0.5 bg-red-600 mt-2 mb-4"></div>
              <ul className="text-sm text-gray-600">
                <li><a href="#" className="hover:text-red-600">October 2019</a></li>
              </ul>
            </div>

            <div className="bg-white border border-gray-200 p-5">
              <h3 className="text-lg font-bold text-gray-800">Categories</h3>
              <div className="w-10 h-0.5 bg-red-600 mt-2 mb-4"></div>
              <ul className="text-sm text-gray-600">
                <li><a href="#" className="hover:text-red-600">Burger</a></li>
              </ul>
            </div>

            <div className="bg-white border border-gray-200 p-5">
              <h3 className="text-lg font-bold text-gray-800">Meta</h3>
              <div className="w-10 h-0.5 bg-red-600 mt-2 mb-4"></div>
              <ul className="text-sm text-gray-600 space-y-3">
                <li><a href="#" className="hover:text-red-600">Log in</a></li>
                <li className="border-t border-dashed border-gray-200 pt-3"><a href="#" className="hover:text-red-600">Entries feed</a></li>
                <li className="border-t border-dashed border-gray-200 pt-3"><a href="#" className="hover:text-red-600">Comments feed</a></li>
                <li className="border-t border-dashed border-gray-200 pt-3"><a href="#" className="hover:text-red-600">WordPress.org</a></li>
              </ul>
            </div>

          </div>
        </div>
      </section>




      <Footer />
    </div>
  )
}

export default App