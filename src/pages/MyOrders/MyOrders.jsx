import React, { useContext, useEffect, useState } from 'react'
import axios from 'axios'
import { StoreContext } from '../../Context/StoreContext'
import { assets } from '../../assets/assets'

const MyOrders = () => {
  const [data, setData] = useState([])

  const { url, token, currency } = useContext(StoreContext)

  const fetchOrders = async () => {
    const response = await axios.post(
      url + '/api/order/userorders',
      {},
      { headers: { token } }
    )

    setData(response.data.data)
  }

  useEffect(() => {
    if (token) {
      fetchOrders()
    }
  }, [token])

  return (
    <div className="mt-10">
      
      <h2 className="mb-8 text-3xl font-bold text-gray-800">
        My Orders
      </h2>

      <div className="flex flex-col gap-6">
        {data.map((order, index) => {
          return (
            <div
              key={index}
              className="grid gap-5 rounded-2xl border border-gray-200 bg-white p-5 shadow-sm transition-all duration-300 hover:shadow-lg md:grid-cols-[0.5fr_2fr_1fr_1fr_1fr_1fr] md:items-center"
            >
              
              {/* Parcel Icon */}
              <div className="flex justify-center md:justify-start">
                <img
                  src={assets.parcel_icon}
                  alt="Parcel"
                  className="w-14"
                />
              </div>

              {/* Order Items */}
              <p className="text-sm leading-6 text-gray-700">
                {order.items.map((item, index) => {
                  if (index === order.items.length - 1) {
                    return (
                      item.name + ' x ' + item.quantity
                    )
                  } else {
                    return (
                      item.name +
                      ' x ' +
                      item.quantity +
                      ', '
                    )
                  }
                })}
              </p>

              {/* Amount */}
              <p className="font-semibold text-[tomato]">
                {currency}
                {order.amount}.00
              </p>

              {/* Total Items */}
              <p className="text-gray-700">
                Items: {order.items.length}
              </p>

              {/* Status */}
              <p className="font-medium text-gray-700">
                <span className="mr-2 text-green-500">
                  &#x25cf;
                </span>

                <b>{order.status}</b>
              </p>

              {/* Button */}
              <button
                onClick={fetchOrders}
                className="rounded-xl bg-[tomato] px-5 py-2 font-medium text-white transition-all duration-300 hover:bg-red-500"
              >
                Track Order
              </button>
            </div>
          )
        })}
      </div>
    </div>
  )
}

export default MyOrders