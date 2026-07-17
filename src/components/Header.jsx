import { Link } from 'react-router-dom'

function Header() {
  return (
    <nav className="relative bg-amber-400 shadow-sm pb-60">
      <div className="flex flex-col md:flex-row items-center justify-center px-4 md:px-12 lg:px-35">
        <div className="flex-1 hidden md:flex items-center justify-start space-x-6 text-sm font-bold uppercase tracking-wide text-white gap-3 p-3 ml-8">

          <div className="relative group">
            <a href="#" className="flex items-center gap-1 transition hover:text-red-600">HOME <span className="text-xs">▼</span></a>
            <div className="absolute left-0 top-full mt-2 w-48 bg-white rounded-lg shadow-lg opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-300 ">
              <a href="#" className="block px-4 py-2 text-sm text-gray-700 hover:bg-red-50 hover:text-red-600 font-normal normal-case">Home 1</a>
              <a href="#" className="block px-4 py-2 text-sm text-gray-700 hover:bg-red-50 hover:text-red-600 font-normal normal-case">Home 2</a>
              <a href="#" className="block px-4 py-2 text-sm text-gray-700 hover:bg-red-50 hover:text-red-600 font-normal normal-case">Home 3</a>
              <a href="#" className="block px-4 py-2 text-sm text-gray-700 hover:bg-red-50 hover:text-red-600 font-normal normal-case">Home 4</a>
            </div>
          </div>

          <a href="#" className="transition hover:text-red-600">MENU</a>

          <div className="relative group">
            <a href="#" className="flex items-center gap-1 transition hover:text-red-600">PAGES <span className="text-xs">▼</span></a>
            <div className="absolute left-0 top-full mt-2 w-48 bg-white rounded-lg shadow-lg opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-300 ">
              <a href="#" className="block px-4 py-2 text-sm text-gray-700 hover:bg-red-50 hover:text-red-600 font-normal normal-case">About Us</a>
              <a href="#" className="block px-4 py-2 text-sm text-gray-700 hover:bg-red-50 hover:text-red-600 font-normal normal-case">Our Team</a>
              <a href="#" className="block px-4 py-2 text-sm text-gray-700 hover:bg-red-50 hover:text-red-600 font-normal normal-case">Reservation</a>
              <a href="#" className="block px-4 py-2 text-sm text-gray-700 hover:bg-red-50 hover:text-red-600 font-normal normal-case">FAQ</a>
            </div>
          </div>

          <div className="relative group">
            <a href="#" className="flex items-center gap-1 transition hover:text-red-600">SHOP <span className="text-xs">▼</span></a>
            <div className="absolute left-0 top-full mt-2 w-48 bg-white rounded-lg shadow-lg opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-300 ">
              <a href="#" className="block px-4 py-2 text-sm text-gray-700 hover:bg-red-50 hover:text-red-600 font-normal normal-case">Shop 1</a>
              <a href="#" className="block px-4 py-2 text-sm text-gray-700 hover:bg-red-50 hover:text-red-600 font-normal normal-case">Shop 2</a>
              <a href="#" className="block px-4 py-2 text-sm text-gray-700 hover:bg-red-50 hover:text-red-600 font-normal normal-case">Shop 3</a>
              <a href="#" className="block px-4 py-2 text-sm text-gray-700 hover:bg-red-50 hover:text-red-600 font-normal normal-case">Cart</a>
            </div>
          </div>

          <a href="#" className="transition hover:text-red-600">CONTACT</a>
        </div>

        <div className="rounded-b-xl bg-red-600 shadow-md flex items-center">
          <Link to="/">
            <img src="https://demo-themewinter.com/gloreya/wp-content/themes/gloreya/assets/images/logo/logo.png" alt="Gloreya Logo" className="w-35 object-contain" />
          </Link>
        </div>

        <div className="flex-1 hidden md:flex items-center justify-end gap-8 mr-8">
          <button className="rounded-full bg-red-600 p-5 py-3 text-sm font-semibold uppercase tracking-wide text-white transition hover:bg-red-700">
            ONLINE ORDER
          </button>

          <div className="relative cursor-pointer text-white">
            <svg xmlns="http://www.w3.org/2000/svg" className="w-7" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 3h2l.4 2M7 13h10l4-8H5.4M7 13L5.4 5M7 13l-2.293 2.293c-.63.63-.184 1.707.707 1.707H17m0 0a2 2 0 100 4 2 2 0 000-4zm-8 0a2 2 0 110 4 2 2 0 010-4z" />
            </svg>
          </div>

          <button className="rounded-md bg-red-600 p-3 text-white transition hover:bg-red-700">
            <svg xmlns="http://www.w3.org/2000/svg" className="w-7" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16M4 18h16" />
            </svg>
          </button>
        </div>
      </div>

      <div className="flex md:hidden justify-center gap-3 px-4 py-2 text-white text-[10px] font-bold uppercase tracking-wide flex-wrap">
        <a href="#" className="hover:text-red-600">HOME</a>
        <a href="#" className="hover:text-red-600">MENU</a>
        <a href="#" className="hover:text-red-600">PAGES</a>
        <a href="#" className="hover:text-red-600">SHOP</a>
        <a href="#" className="hover:text-red-600">CONTACT</a>
      </div>

      <h1 className="text-white text-4xl md:text-6xl font-extrabold text-center tracking-wider drop-shadow-lg mt-15 md:mt-25">Gloreya</h1>

      <div className="absolute bottom-0 left-0 w-full overflow-hidden">
        <svg viewBox="0 0 1200 120" preserveAspectRatio="none" className="relative block w-full h-12.5 fill-stone-50">
          <path d="M0,0 L10,8 L23,2 L35,14 L50,4 L68,18 L85,2 L102,12 L120,4 L135,15 L152,5 L170,14 L188,2 L205,10 L220,3 L240,15 L260,2 L278,12 L295,3 L315,14 L335,2 L350,10 L370,4 L390,16 L410,2 L430,12 L450,4 L470,18 L490,2 L510,14 L530,3 L550,12 L570,4 L590,16 L610,2 L630,10 L650,4 L670,18 L690,2 L710,14 L730,3 L750,12 L770,4 L790,16 L810,2 L830,10 L850,4 L870,18 L890,2 L910,14 L930,3 L950,12 L970,4 L990,16 L1010,2 L1030,10 L1050,4 L1070,18 L1090,2 L1110,14 L1130,3 L1150,12 L1170,4 L1190,16 L1200,2 L1200,120 L0,120 Z"></path>
        </svg>
      </div>
    </nav>
  )
}

export default Header
