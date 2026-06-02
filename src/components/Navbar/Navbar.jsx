import React, { useContext, useState } from 'react'
import { assets } from '../../assets/assets'
import { Link, useNavigate } from 'react-router-dom'
import { StoreContext } from '../../Context/StoreContext'
import Search from '../../pages/Search'

const Navbar = ({ setShowLogin }) => {
  const [menuOpen, setMenuOpen] = useState(false)

  const { getTotalCartAmount, token, setToken } =
    useContext(StoreContext)

  const navigate = useNavigate()

  const logout = () => {
    localStorage.removeItem('token')
    setToken('')
    navigate('/')
  }

  return (
    <header className="sticky top-0 z-50 bg-blue-600 text-white shadow-lg">
      
      <div className="mx-auto flex max-w-[1400px] items-center justify-between px-3 py-3 sm:px-5 lg:px-8">
        
        {/* Logo + Store Name */}
        <Link
          to="/"
          className="flex items-center gap-2 sm:gap-3"
        >
          <img
            src={assets.logo}
            alt="ankush-kirana-store-logo"
            className="h-10 w-10 rounded-full border-2 border-white object-cover shadow-md sm:h-12 sm:w-12 lg:h-14 lg:w-14"
          />

          <h1 className="text-sm font-extrabold tracking-wide sm:text-xl lg:text-2xl">
            Ankush Kirana Store
          </h1>
        </Link>

        {/* Desktop Search */}
        <div className="hidden w-[35%] lg:block">
          <Search />
        </div>

        {/* Mobile Menu Button */}
        <button
          onClick={() => setMenuOpen(!menuOpen)}
          className="text-3xl lg:hidden"
        >
          ☰
        </button>

        {/* Navigation */}
        <nav
          className={`absolute left-0 top-[75px] w-full bg-blue-600 px-5 py-6 shadow-lg transition-all duration-300 lg:static lg:flex lg:w-auto lg:items-center lg:bg-transparent lg:p-0 lg:shadow-none ${
            menuOpen ? 'block' : 'hidden'
          }`}
        >
          
          <ul className="flex flex-col gap-5 text-base font-medium lg:flex-row lg:items-center lg:gap-6 xl:gap-8">
            
            <li>
              <Link
                to="/"
                className="transition duration-300 hover:text-yellow-300"
              >
                Home
              </Link>
            </li>

            <li>
              <Link
                to="/products"
                className="transition duration-300 hover:text-yellow-300"
              >
                Products
              </Link>
            </li>

            <li>
              <Link
                to="/about"
                className="transition duration-300 hover:text-yellow-300"
              >
                About
              </Link>
            </li>

            <li>
              <Link
                to="/contact"
                className="transition duration-300 hover:text-yellow-300"
              >
                Contact
              </Link>
            </li>

            {/* Cart */}
            <li>
              <Link
                to="/cart"
                className="relative flex items-center justify-center gap-2 rounded-xl bg-yellow-400 px-4 py-2 text-sm font-semibold text-black shadow transition duration-300 hover:scale-105 hover:bg-yellow-300 sm:px-5 sm:text-base"
              >
                <span className="text-lg">🛍️</span>
                Cart

                {getTotalCartAmount() > 0 && (
                  <span className="absolute -right-2 -top-2 h-3 w-3 rounded-full bg-red-500"></span>
                )}
              </Link>
            </li>

            {/* Login/Register */}
            {!token ? (
              <button
                onClick={() => setShowLogin(true)}
                className="rounded-full border border-white px-4 py-2 text-sm font-medium text-white transition-all duration-300 hover:bg-white hover:text-blue-600 sm:px-5"
              >
                Login | Register
              </button>
            ) : (
              <div className="group relative">
                
                <button className="flex items-center gap-2 rounded-full bg-white/10 px-4 py-2 transition hover:bg-white/20">
                  <img
                    src={assets.profile_icon}
                    alt="profile"
                    className="w-8"
                  />

                  <span className="text-sm font-medium">
                    My Account
                  </span>
                </button>

                {/* Dropdown */}
                <ul className="absolute right-0 z-20 mt-3 hidden w-48 flex-col gap-3 rounded-2xl bg-white p-4 shadow-2xl group-hover:flex">
                  
                  <li
                    onClick={() => navigate('/myorders')}
                    className="flex cursor-pointer items-center gap-3 rounded-lg px-2 py-2 text-gray-700 transition hover:bg-gray-100 hover:text-[tomato]"
                  >
                    <img
                      src={assets.bag_icon}
                      alt=""
                      className="w-5"
                    />

                    <p>My Orders</p>
                  </li>

                  <hr />

                  <li
                    onClick={logout}
                    className="flex cursor-pointer items-center gap-3 rounded-lg px-2 py-2 text-gray-700 transition hover:bg-gray-100 hover:text-[tomato]"
                  >
                    <img
                      src={assets.logout_icon}
                      alt=""
                      className="w-5"
                    />

                    <p>Logout</p>
                  </li>
                </ul>
              </div>
            )}
          </ul>

          {/* Mobile Search */}
          <div className="mt-5 block lg:hidden">
            <Search />
          </div>
        </nav>
      </div>
    </header>
  )
}

export default Navbar