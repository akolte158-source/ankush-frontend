import React, { useContext } from 'react'
import { StoreContext } from '../../Context/StoreContext'
import { useNavigate } from 'react-router-dom'

const Cart = () => {
  const {
    cartItems,
    food_list,
    removeFromCart,
    getTotalCartAmount,
    url,
    currency,
    deliveryCharge,
  } = useContext(StoreContext)

  const navigate = useNavigate()

  return (
    <div className="mt-10">
      
      {/* Cart Items */}
      <div className="w-full overflow-x-auto">
        
        {/* Header */}
        <div className="grid min-w-[700px] grid-cols-6 items-center gap-4 rounded-lg bg-gray-100 px-4 py-3 text-sm font-semibold text-gray-700">
          <p>Items</p>
          <p>Title</p>
          <p>Price</p>
          <p>Quantity</p>
          <p>Total</p>
          <p>Remove</p>
        </div>

        {/* Items */}
        <div className="mt-4 flex flex-col gap-4">
          {food_list.map((item, index) => {
            if (cartItems[item._id] > 0) {
              return (
                <div
                  key={index}
                  className="grid min-w-[700px] grid-cols-6 items-center gap-4 rounded-xl border border-gray-200 bg-white p-4 shadow-sm"
                >
                  <img
                    src={url + '/images/' + item.image}
                    alt={item.name}
                    className="h-16 w-16 rounded-lg object-cover"
                  />

                  <p className="font-medium text-gray-800">
                    {item.name}
                  </p>

                  <p className="text-gray-600">
                    {currency}
                    {item.price}
                  </p>

                  <div className="flex h-9 w-9 items-center justify-center rounded-full bg-gray-100 font-semibold text-gray-700">
                    {cartItems[item._id]}
                  </div>

                  <p className="font-semibold text-[tomato]">
                    {currency}
                    {item.price * cartItems[item._id]}
                  </p>

                  <button
                    onClick={() => removeFromCart(item._id)}
                    className="w-fit rounded-full bg-red-100 px-3 py-1 text-sm font-semibold text-red-500 transition hover:bg-red-200"
                  >
                    ✕
                  </button>
                </div>
              )
            }

            return null
          })}
        </div>
      </div>

      {/* Bottom Section */}
      <div className="mt-12 grid gap-10 lg:grid-cols-2">
        
        {/* Cart Total */}
        <div className="rounded-2xl border border-gray-200 bg-white p-6 shadow-md">
          
          <h2 className="mb-6 text-2xl font-bold text-gray-800">
            Cart Totals
          </h2>

          <div className="space-y-4">
            
            <div className="flex items-center justify-between text-gray-600">
              <p>Subtotal</p>
              <p>
                {currency}
                {getTotalCartAmount()}
              </p>
            </div>

            <hr />

            <div className="flex items-center justify-between text-gray-600">
              <p>Delivery Fee</p>

              <p>
                {currency}
                {getTotalCartAmount() === 0
                  ? 0
                  : deliveryCharge}
              </p>
            </div>

            <hr />

            <div className="flex items-center justify-between text-lg font-bold text-gray-800">
              <p>Total</p>

              <p>
                {currency}
                {getTotalCartAmount() === 0
                  ? 0
                  : getTotalCartAmount() + deliveryCharge}
              </p>
            </div>
          </div>

          <button
            onClick={() => navigate('/order')}
            className="mt-6 w-full rounded-xl bg-[tomato] py-3 font-semibold text-white transition-all duration-300 hover:bg-red-500"
          >
            PROCEED TO CHECKOUT
          </button>
        </div>

        {/* Promo Code */}
        <div className="rounded-2xl border border-gray-200 bg-white p-6 shadow-md">
          
          <p className="mb-4 text-gray-700">
            If you have a promo code, enter it here
          </p>

          <div className="flex overflow-hidden rounded-xl border border-gray-300">
            
            <input
              type="text"
              placeholder="Promo code"
              className="flex-1 px-4 py-3 outline-none"
            />

            <button className="bg-black px-6 py-3 font-medium text-white transition hover:bg-gray-800">
              Submit
            </button>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Cart