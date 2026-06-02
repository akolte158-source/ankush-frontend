import React from 'react'
import { IoSearchOutline } from 'react-icons/io5'

const Search = () => {
  return (
    <div className="relative h-[50px] w-full max-w-[280px] overflow-hidden rounded-2xl border border-gray-200 bg-[#F5F5F5] shadow-sm transition-all duration-300 focus-within:border-blue-400 focus-within:bg-white focus-within:shadow-md">
      
      <input
        type="text"
        placeholder="Search for products..."
        className="h-full w-full bg-transparent px-5 pr-16 text-gray-700 outline-none placeholder:text-gray-400"
      />

      <button className="absolute right-2 top-1/2 flex h-10 w-10 -translate-y-1/2 items-center justify-center rounded-full transition-all duration-300 hover:bg-gray-200">
        
        <IoSearchOutline
          size={24}
          className="text-gray-600"
        />
      </button>
    </div>
  )
}

export default Search