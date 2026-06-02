import React, { useContext } from 'react'
import { assets } from '../../assets/assets'
import { StoreContext } from '../../Context/StoreContext'

const FoodItem = ({ image, name, price, desc, id }) => {
  const {
    cartItems,
    addToCart,
    removeFromCart,
    url,
    currency,
  } = useContext(StoreContext)

  return (
    <div className="w-full overflow-hidden rounded-2xl bg-white shadow-md transition-all duration-300 hover:scale-[1.02] hover:shadow-xl">

      {/* Image Container */}
      <div className="relative overflow-hidden">

        <img
          className="h-56 w-full  rounded-t-2xl object-cover transition-all duration-300 hover:scale-105"
          src={url + '/images/' + image}
          alt={name}
        />

        {!cartItems[id] ? (
          <button
            onClick={() => addToCart(id)}
            className="absolute bottom-4 right-4 flex h-11 w-11 items-center justify-center rounded-full bg-white shadow-lg transition-all duration-300 hover:scale-110"
          >
            <img
              src={assets.add_icon_white}
              alt="Add"
              className="h-full object-contain transition-transform duration-300 group-hover:scale-110"
            />
          </button>
        ) : (
          <div className="absolute bottom-4 right-4 flex items-center gap-3 rounded-full bg-white px-3 py-2 shadow-lg">

            <img
              src={assets.remove_icon_red}
              onClick={() => removeFromCart(id)}
              alt="Remove"
              className="w-8 cursor-pointer transition-transform duration-200 hover:scale-110"
            />

            <p className="min-w-[20px] text-center font-semibold text-gray-700">
              {cartItems[id]}
            </p>

            <img
              src={assets.add_icon_green}
              onClick={() => addToCart(id)}
              alt="Add"
              className="h-full object-contain transition-transform duration-300 group-hover:scale-110"
            />
           
          </div>
        )}
      </div>

      {/* Food Info */}
      <div className="p-5">

        <div className="mb-3 flex items-center justify-between">

          <p className="text-xl font-medium text-gray-800">
            {name}
          </p>

          <img
            src={assets.rating_starts}
            alt="Rating"
            className="w-[70px]"
          />
        </div>

        <p className="text-sm text-[#676767] line-clamp-2">
          {desc}
        </p>

        <p className="mt-3 text-2xl font-semibold text-[#FF4C24]">
          {currency}
          {price}
        </p>
      </div>
    </div>
  )
}

export default FoodItem