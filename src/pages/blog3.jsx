import { Link } from 'react-router-dom'
import Header from '../components/Header'
import Footer from '../components/Footer'

function Blog3() {
  return (
    <div className="min-h-screen flex flex-col bg-stone-50 text-gray-800">
      <Header />

      <section className="mt-5 flex flex-col lg:flex-row justify-center gap-10 lg:gap-20 px-4 lg:px-0">
        <div className="w-full lg:max-w-200">
          <div className="mt-7">
            <img src="https://demo-themewinter.com/gloreya/wp-content/uploads/2019/10/news_image1-min-750x465.jpg" alt="" className="w-200" />
            <div className="ml-5 mr-5 mt-5 px-5 py-5">
              <h1 className="text-xl md:text-3xl font-bold mb-4">Starbucks invests $100M in new retail startups</h1>
              <p className="mb-4">Starbucks has announced a massive $100 million investment into a new wave of retail technology startups. The coffee giant is betting big on the future of food and beverage innovation, partnering with companies that are reshaping how we think about dining and delivery.</p>
              <h3 className='font-bold text-xl mb-3'>The future of food technology</h3>
              <p>From AI-powered kitchen management to sustainable packaging solutions, the startups receiving funding are tackling some of the biggest challenges in the food industry. This move signals Starbucks' commitment to staying at the forefront of innovation, not just in coffee but in the broader food ecosystem.</p>
              <div className="grid grid-cols-2 gap-4 my-6">
                <img src="https://demo-themewinter.com/gloreya/wp-content/uploads/2019/10/gallery_image1-min.jpg" alt="" className="w-full rounded-lg shadow-md" />
                <img src="https://demo-themewinter.com/gloreya/wp-content/uploads/2019/10/gallery_image2-min-600x600.jpg" alt="" className="w-full rounded-lg shadow-md" />
              </div>
              <div className="bg-gray-100 border-l-4 border-red-600 p-5 my-6 rounded-r-lg">
                <p className="italic text-gray-600 mb-3">Innovation is the ability to see change as an opportunity, not a threat. Great companies are built on great products, and great products come from a deep understanding of the customer.</p>
                <div className="w-10 h-0.5 bg-red-600 mb-2"></div>
                <span className="font-bold text-gray-800">Howard Schultz</span>
              </div>
              <p>The investment round includes both early-stage and growth-stage companies across multiple categories including delivery logistics, plant-based food technology, and customer experience platforms. Industry experts believe this is just the beginning of a larger trend where major food corporations will increasingly become venture investors, seeking to both profit from and shape the future of their industry.</p>
              <div className=" p-6 my-6 ">
                <h3 className="text-xl font-bold text-gray-800 mb-2">Leave a Reply</h3>
                <div className="w-10 h-0.5 bg-red-600 mb-4"></div>
                <p className="text-sm text-gray-500 mb-4">Your email address will not be published. Required fields are marked *</p>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-4">
                  <input type="text" placeholder='Enter Name' className="border border-gray-300 rounded-md px-4 py-2 text-sm " />
                  <input type="email" placeholder='Enter Email' className="border border-gray-300 rounded-md px-4 py-2 text-sm " />
                </div>
                <input type="text" placeholder='Enter website' className="border border-gray-300 rounded-md w-full px-4 py-2 text-sm  mb-4" />
                <textarea placeholder='Message' rows="5" className="w-full border border-gray-300 rounded-md px-4 py-2 text-sm  mb-4 resize-none"></textarea>
                <button className="bg-red-600 hover:bg-red-700 text-white font-semibold uppercase tracking-wide text-sm px-8 py-3 rounded-md transition">POST COMMENT</button>
              </div>

              <div className="flex justify-between items-center mt-8 border-t border-gray-200 pt-6">
                <Link to="/blog2" className="text-red-600 hover:text-red-700 font-semibold flex items-center gap-2">
                  <svg className="w-4 fill-red-600 rotate-180" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 640 640"><path d="M566.6 342.6C579.1 330.1 579.1 309.8 566.6 297.3L406.6 137.3C394.1 124.8 373.8 124.8 361.3 137.3C348.8 149.8 348.8 170.1 361.3 182.6L466.7 288L96 288C78.3 288 64 302.3 64 320C64 337.7 78.3 352 96 352L466.7 352L361.3 457.4C348.8 469.9 348.8 490.2 361.3 502.7C373.8 515.2 394.1 515.2 406.6 502.7L566.6 342.7z"/></svg>
                  Previous Post
                </Link>
                <Link to="/blog1" className="text-red-600 hover:text-red-700 font-semibold flex items-center gap-2">
                  Next Post
                  <svg className="w-4 fill-red-600" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 640 640"><path d="M566.6 342.6C579.1 330.1 579.1 309.8 566.6 297.3L406.6 137.3C394.1 124.8 373.8 124.8 361.3 137.3C348.8 149.8 348.8 170.1 361.3 182.6L466.7 288L96 288C78.3 288 64 302.3 64 320C64 337.7 78.3 352 96 352L466.7 352L361.3 457.4C348.8 469.9 348.8 490.2 361.3 502.7C373.8 515.2 394.1 515.2 406.6 502.7L566.6 342.7z"/></svg>
                </Link>
              </div>
            </div>
          </div>
        </div>

        <div className="w-full lg:max-w-100">
          <div className="p-4 bg-gray-50 flex flex-col gap-6">
            <div className="flex border border-gray-300 overflow-hidden bg-white">
              <input type="text" placeholder="Search" className="w-full px-3 py-2 text-sm text-gray-600 placeholder-gray-400" />
              <button className="bg-red-600 hover:bg-red-700 text-white px-4 flex items-center justify-center">
                <svg className="w-4 h-4" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"></path>
                </svg>
              </button>
            </div>

            <div className="bg-white border border-gray-200 p-5">
              <h3 className="text-lg font-bold text-gray-800">Recent Posts</h3>
              <div className="w-10 h-0.5 bg-red-600 mt-2 mb-4"></div>
              <ul className="text-sm text-gray-600 space-y-3">
                <li><Link to="/blog1" className="hover:text-red-600">Labor Depar rules pro as tweaks overtime</Link></li>
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

export default Blog3
