import React, { useState, useContext } from 'react'
import FoodItem from '../components/FoodItem/FoodItem'
import { StoreContext } from '../Context/StoreContext'

const Products = () => {

  const { food_list } = useContext(StoreContext)

  const [selectedCategory, setSelectedCategory] = useState('All')
  const [searchTerm, setSearchTerm] = useState('')
  const [sortBy, setSortBy] = useState('name')

  const categories = [
    'All',
    'Grocery & Staples',
    'Spices & Masala',
    'Oil & Ghee',
    'Biscuits & Snacks',
    'Chocolates & Confectionery',
    'Tea, Coffee & Beverages',
    'Dairy Products',
    'Instant & Ready-to-Eat',
    'Personal Care',
    'Beauty & Cosmetics',
    'Oral Care',
    'Household Cleaning',
    'Home & Kitchen Essentials',
    'Baby Care',
    'Health & OTC',
    'Pet Care',
    'Cold Drinks & Ice Cream',
    'Bakery Products',
    'Sauces & Pickles',
    'Stationery & Daily Use',
    'Festival & Seasonal Items',
    'Paan & General Items',
  ]

  // Filter Products
  let filteredProducts = food_list.filter((product) => {

    const matchesCategory =
      selectedCategory === 'All' ||
      product.category === selectedCategory

    const matchesSearch = product.name
      .toLowerCase()
      .includes(searchTerm.toLowerCase())

    return matchesCategory && matchesSearch
  })

  // Sorting
  if (sortBy === 'name') {
    filteredProducts.sort((a, b) =>
      a.name.localeCompare(b.name)
    )
  }

  else if (sortBy === 'price-low') {
    filteredProducts.sort((a, b) =>
      a.price - b.price
    )
  }

  else if (sortBy === 'price-high') {
    filteredProducts.sort((a, b) =>
      b.price - a.price
    )
  }

  return (
    <div
      id="food-display"
      className="mt-10 px-4"
    >

      {/* Heading */}
      <h2 className="text-2xl md:text-3xl font-semibold text-gray-800">
        Top Products Near You
      </h2>

      {/* Search + Sort */}
      <div className="flex flex-col md:flex-row gap-4 justify-between items-center mt-6">

        {/* Search */}
        <input
          type="text"
          placeholder="Search products..."
          value={searchTerm}
          onChange={(e) => setSearchTerm(e.target.value)}
          className="border px-4 py-2 rounded-lg w-full md:w-[300px] outline-none"
        />

        {/* Sort */}
        <select
          value={sortBy}
          onChange={(e) => setSortBy(e.target.value)}
          className="border px-4 py-2 rounded-lg outline-none"
        >
          <option value="name">Sort By Name</option>
          <option value="price-low">Price Low to High</option>
          <option value="price-high">Price High to Low</option>
        </select>

      </div>

      {/* Categories */}
      <div className="flex gap-3 overflow-x-auto scrollbar-hide mt-6 pb-2">

        {categories.map((cat, index) => (

          <button
            key={index}
            onClick={() => setSelectedCategory(cat)}
            className={`px-4 py-2 rounded-full whitespace-nowrap transition-all duration-300 ${
              selectedCategory === cat
                ? 'bg-orange-500 text-white'
                : 'bg-gray-100 text-gray-700 hover:bg-orange-100'
            }`}
          >
            {cat}
          </button>

        ))}

      </div>

      {/* Products */}
      <div className="mt-8 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">

        {filteredProducts.length > 0 ? (

          filteredProducts.map((item) => (

            <FoodItem
              key={item._id}
              image={item.image}
              name={item.name}
              desc={item.description}
              price={item.price}
              id={item._id}
            />

          ))

        ) : (

          <p className="text-gray-500 text-lg">
            No products found.
          </p>

        )}

      </div>

    </div>
  )
}

export default Products