function Footer() {
  return (
    <footer className="relative bg-gray-900 text-white pt-20 pb-6">
      <div className="absolute top-0 left-0 w-full overflow-hidden">
        <svg viewBox="0 0 1200 120"preserveAspectRatio="none"className="relative block w-full h-12.5 fill-stone-50 scale-y-[-1]">
          <path d="M0,0 L10,8 L23,2 L35,14 L50,4 L68,18 L85,2 L102,12 L120,4 L135,15 L152,5 L170,14 L188,2 L205,10 L220,3 L240,15 L260,2 L278,12 L295,3 L315,14 L335,2 L350,10 L370,4 L390,16 L410,2 L430,12 L450,4 L470,18 L490,2 L510,14 L530,3 L550,12 L570,4 L590,16 L610,2 L630,10 L650,4 L670,18 L690,2 L710,14 L730,3 L750,12 L770,4 L790,16 L810,2 L830,10 L850,4 L870,18 L890,2 L910,14 L930,3 L950,12 L970,4 L990,16 L1010,2 L1030,10 L1050,4 L1070,18 L1090,2 L1110,14 L1130,3 L1150,12 L1170,4 L1190,16 L1200,2 L1200,120 L0,120 Z"></path>
        </svg>
      </div>

      <div className="max-w-6xl mx-auto px-6 ">
        <div className="flex items-center justify-center mb-10">
          <div className="w-200 h-0.5 bg-gray-700"></div>
          <img src="https://demo-themewinter.com/gloreya/wp-content/themes/gloreya/assets/images/logo/footer_logo.png" className="w-16 mx-4" alt="Gloreya Footer Logo" />
          <div className="w-200 h-0.5 bg-gray-700"></div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-4 gap-8 text-sm text-gray-300 mb-10">
          <div>
            <h3 className="text-white font-bold text-lg mb-3 uppercase tracking-wide">Address</h3>
            <p>570 8th Ave, New York,<br />NY 10018 United States</p>
          </div>
          <div>
            <h3 className="text-white font-bold text-lg mb-3 uppercase tracking-wide">Book a Table</h3>
            <p>Dogfood och Sliders foodtruck.<br />Under Om oss kan ni läsa</p>
            <p className="mt-2 text-amber-400 font-semibold">(850) 435-4155</p>
          </div>
          <div>
            <h3 className="text-white font-bold text-lg mb-3 uppercase tracking-wide">Opening Hours</h3>
            <p>Monday – Friday<br />10.00 AM – 11.00 PM</p>
          </div>
          <div>
            <img src="https://demo-themewinter.com/gloreya/vegan/wp-content/uploads/sites/4/2019/10/logo.png" className="w-20 mb-3" alt="Vegan Badge" />
            <p>We like to keep our fans up-to-date.<br />By accepting our terms, you agree to receive.</p>
          </div>
        </div>

        <div className="border-t border-gray-700 pt-6">
          <div className="flex flex-col md:flex-row items-center justify-between">
            <div className="flex items-center gap-6 mb-4 md:mb-0">
              <a href="#" className="text-gray-400 hover:text-amber-400 transition-colors">About Us</a>
              <a href="#" className="text-gray-400 hover:text-amber-400 transition-colors">Menu</a>
              <a href="#" className="text-gray-400 hover:text-amber-400 transition-colors">Blog</a>
              <a href="#" className="text-gray-400 hover:text-amber-400 transition-colors">Gallery</a>
              <a href="#" className="text-gray-400 hover:text-amber-400 transition-colors">FAQ</a>
              <a href="#" className="text-gray-400 hover:text-amber-400 transition-colors">Contact</a>
            </div>
            <div className="flex items-center gap-4">
              <a href="#" className="w-9 h-9 rounded-full bg-gray-700 flex items-center justify-center hover:bg-red-600 transition-colors">
                <svg className="w-4 h-4 fill-current" viewBox="0 0 24 24"><path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z" /></svg>
              </a>
              <a href="#" className="w-9 h-9 rounded-full bg-gray-700 flex items-center justify-center hover:bg-red-600 transition-colors">
                <svg className="w-4 h-4 fill-current" viewBox="0 0 24 24"><path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z" /></svg>
              </a>
              <a href="#" className="w-9 h-9 rounded-full bg-gray-700 flex items-center justify-center hover:bg-red-600 transition-colors">
                <svg className="w-4 h-4 fill-current" viewBox="0 0 24 24"><path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z" /></svg>
              </a>
              <a href="#" className="w-9 h-9 rounded-full bg-gray-700 flex items-center justify-center hover:bg-red-600 transition-colors">
                <svg className="w-4 h-4 fill-current" viewBox="0 0 24 24"><path d="M23.498 6.186a3.016 3.016 0 0 0-2.122-2.136C19.505 3.545 12 3.545 12 3.545s-7.505 0-9.377.505A3.017 3.017 0 0 0 .502 6.186C0 8.07 0 12 0 12s0 3.93-.502 5.814a3.016 3.016 0 0 0 2.122 2.136c1.871.505 9.376.505 9.376.505s7.505 0 9.377-.505a3.015 3.015 0 0 0 2.122-2.136C24 15.93 24 12 24 12s0-3.93-.502-5.814zM9.545 15.568V8.432L15.818 12l-6.273 3.568z" /></svg>
              </a>
            </div>
          </div>
          <p className="text-center text-gray-500 text-xs mt-6">&copy; 2026 Gloreya. All rights reserved.</p>
        </div>
      </div>

    </footer>
  )
}

export default Footer
