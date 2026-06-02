import React, { useContext, useEffect, useState } from 'react'
import { StoreContext } from '../../Context/StoreContext'
import { assets } from '../../assets/assets'
import { useNavigate } from 'react-router-dom'
import { toast } from 'react-toastify'
import axios from 'axios'

const PlaceOrder = () => {
  const [payment, setPayment] = useState('cod')

  const [data, setData] = useState({
    firstName: '',
    lastName: '',
    email: '',
    street: '',
    city: '',
    state: '',
    zipcode: '',
    country: '',
    phone: '',
  })

  const {
    getTotalCartAmount,
    token,
    food_list,
    cartItems,
    url,
    setCartItems,
    currency,
    deliveryCharge,
  } = useContext(StoreContext)

  const navigate = useNavigate()

  const onChangeHandler = (event) => {
    const name = event.target.name
    const value = event.target.value

    setData((data) => ({ ...data, [name]: value }))
  }

  const placeOrder = async (e) => {
    e.preventDefault()

    let orderItems = []

    food_list.map((item) => {
      if (cartItems[item._id] > 0) {
        let itemInfo = item

        itemInfo['quantity'] = cartItems[item._id]

        orderItems.push(itemInfo)
      }
    })

    let orderData = {
      address: data,
      items: orderItems,
      amount: getTotalCartAmount() + deliveryCharge,
    }

    if (payment === 'stripe') {
      let response = await axios.post(
        url + '/api/order/place',
        orderData,
        { headers: { token } }
      )

      if (response.data.success) {
        const { session_url } = response.data

        window.location.replace(session_url)
      } else {
        toast.error('Something Went Wrong')
      }
    } else {
      let response = await axios.post(
        url + '/api/order/placecod',
        orderData,
        { headers: { token } }
      )

      if (response.data.success) {
        navigate('/myorders')

        toast.success(response.data.message)

        setCartItems({})
      } else {
        toast.error('Something Went Wrong')
      }
    }
  }

  useEffect(() => {
    if (!token) {
      toast.error('To place an order sign in first')
      navigate('/cart')
    } else if (getTotalCartAmount() === 0) {
      navigate('/cart')
    }
  }, [token])

  return (
    <form
      onSubmit={placeOrder}
      className="mt-10 grid gap-10 lg:grid-cols-2"
    >
      
      {/* Left Section */}
      <div className="rounded-2xl border border-gray-200 bg-white p-6 shadow-md">
        
        <p className="mb-6 text-3xl font-bold text-gray-800">
          Delivery Information
        </p>

        {/* Name */}
        <div className="grid gap-4 md:grid-cols-2">
          <input
            type="text"
            name="firstName"
            onChange={onChangeHandler}
            value={data.firstName}
            placeholder="First name"
            required
            className="rounded-xl border border-gray-300 px-4 py-3 outline-none focus:border-[tomato]"
          />

          <input
            type="text"
            name="lastName"
            onChange={onChangeHandler}
            value={data.lastName}
            placeholder="Last name"
            required
            className="rounded-xl border border-gray-300 px-4 py-3 outline-none focus:border-[tomato]"
          />
        </div>

        {/* Email */}
        <input
          type="email"
          name="email"
          onChange={onChangeHandler}
          value={data.email}
          placeholder="Email address"
          required
          className="mt-4 w-full rounded-xl border border-gray-300 px-4 py-3 outline-none focus:border-[tomato]"
        />

        {/* Street */}
        <input
          type="text"
          name="street"
          onChange={onChangeHandler}
          value={data.street}
          placeholder="Street"
          required
          className="mt-4 w-full rounded-xl border border-gray-300 px-4 py-3 outline-none focus:border-[tomato]"
        />

        {/* City & State */}
        <div className="mt-4 grid gap-4 md:grid-cols-2">
          <input
            type="text"
            name="city"
            onChange={onChangeHandler}
            value={data.city}
            placeholder="City"
            required
            className="rounded-xl border border-gray-300 px-4 py-3 outline-none focus:border-[tomato]"
          />

          <input
            type="text"
            name="state"
            onChange={onChangeHandler}
            value={data.state}
            placeholder="State"
            required
            className="rounded-xl border border-gray-300 px-4 py-3 outline-none focus:border-[tomato]"
          />
        </div>

        {/* Zip & Country */}
        <div className="mt-4 grid gap-4 md:grid-cols-2">
          <input
            type="text"
            name="zipcode"
            onChange={onChangeHandler}
            value={data.zipcode}
            placeholder="Zip code"
            required
            className="rounded-xl border border-gray-300 px-4 py-3 outline-none focus:border-[tomato]"
          />

          <input
            type="text"
            name="country"
            onChange={onChangeHandler}
            value={data.country}
            placeholder="Country"
            required
            className="rounded-xl border border-gray-300 px-4 py-3 outline-none focus:border-[tomato]"
          />
        </div>

        {/* Phone */}
        <input
          type="text"
          name="phone"
          onChange={onChangeHandler}
          value={data.phone}
          placeholder="Phone"
          required
          className="mt-4 w-full rounded-xl border border-gray-300 px-4 py-3 outline-none focus:border-[tomato]"
        />
      </div>

      {/* Right Section */}
      <div className="flex flex-col gap-6">
        
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
        </div>

        {/* Payment */}
        <div className="rounded-2xl border border-gray-200 bg-white p-6 shadow-md">
          
          <h2 className="mb-5 text-2xl font-bold text-gray-800">
            Payment Method
          </h2>

          <div className="flex flex-col gap-4">
            
            {/* COD */}
            <div
              onClick={() => setPayment('cod')}
              className="flex cursor-pointer items-center gap-3 rounded-xl border border-gray-200 p-4 transition hover:border-[tomato]"
            >
              <img
                src={
                  payment === 'cod'
                    ? assets.checked
                    : assets.un_checked
                }
                alt=""
                className="w-5"
              />

              <p className="font-medium text-gray-700">
                COD (Cash on delivery)
              </p>
            </div>

            {/* Stripe */}
            <div
              onClick={() => setPayment('stripe')}
              className="flex cursor-pointer items-center gap-3 rounded-xl border border-gray-200 p-4 transition hover:border-[tomato]"
            >
              <img
                src={
                  payment === 'stripe'
                    ? assets.checked
                    : assets.un_checked
                }
                alt=""
                className="w-5"
              />

              <p className="font-medium text-gray-700">
                Stripe (Credit / Debit)
              </p>
            </div>
          </div>
        </div>

        {/* Button */}
        <button
          className="rounded-2xl bg-[tomato] py-4 text-lg font-semibold text-white transition-all duration-300 hover:bg-red-500"
          type="submit"
        >
          {payment === 'cod'
            ? 'Place Order'
            : 'Proceed To Payment'}
        </button>
      </div>
    </form>
  )
}

export default PlaceOrder