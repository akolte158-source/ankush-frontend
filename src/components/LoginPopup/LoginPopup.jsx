import React, { useContext, useState } from 'react'
import { assets } from '../../assets/assets'
import { StoreContext } from '../../Context/StoreContext'
import axios from 'axios'
import { toast } from 'react-toastify'

const LoginPopup = ({ setShowLogin }) => {
  const { setToken, url, loadCartData } = useContext(StoreContext)

  const [currState, setCurrState] = useState('Sign Up')

  const [data, setData] = useState({
    name: '',
    email: '',
    password: '',
  })

  const onChangeHandler = (event) => {
    const name = event.target.name
    const value = event.target.value

    setData((data) => ({ ...data, [name]: value }))
  }

  const onLogin = async (e) => {
    e.preventDefault()

    let new_url = url

    if (currState === 'Login') {
      new_url += '/api/user/login'
    } else {
      new_url += '/api/user/register'
    }

    const response = await axios.post(new_url, data)

    if (response.data.success) {
      setToken(response.data.token)

      localStorage.setItem('token', response.data.token)

      loadCartData({ token: response.data.token })

      setShowLogin(false)
    } else {
      toast.error(response.data.message)
    }
  }

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/60 px-4">
      
      <form
        onSubmit={onLogin}
        className="w-full max-w-md rounded-2xl bg-white p-6 shadow-2xl animate-fadeIn"
      >
        {/* Title */}
        <div className="mb-6 flex items-center justify-between">
          <h2 className="text-2xl font-bold text-gray-800">
            {currState}
          </h2>

          <img
            onClick={() => setShowLogin(false)}
            src={assets.cross_icon}
            alt="Close"
            className="w-5 cursor-pointer"
          />
        </div>

        {/* Inputs */}
        <div className="flex flex-col gap-4">
          {currState === 'Sign Up' && (
            <input
              name="name"
              onChange={onChangeHandler}
              value={data.name}
              type="text"
              placeholder="Your name"
              required
              className="rounded-lg border border-gray-300 px-4 py-3 outline-none transition focus:border-[tomato]"
            />
          )}

          <input
            name="email"
            onChange={onChangeHandler}
            value={data.email}
            type="email"
            placeholder="Your email"
            required
            className="rounded-lg border border-gray-300 px-4 py-3 outline-none transition focus:border-[tomato]"
          />

          <input
            name="password"
            onChange={onChangeHandler}
            value={data.password}
            type="password"
            placeholder="Password"
            required
            className="rounded-lg border border-gray-300 px-4 py-3 outline-none transition focus:border-[tomato]"
          />
        </div>

        {/* Button */}
        <button
          type="submit"
          className="mt-6 w-full rounded-lg bg-[tomato] py-3 font-semibold text-white transition-all duration-300 hover:bg-red-500"
        >
          {currState === 'Login' ? 'Login' : 'Create account'}
        </button>

        {/* Terms */}
        <div className="mt-4 flex items-start gap-2 text-sm text-gray-600">
          <input type="checkbox" required className="mt-1" />

          <p>
            By continuing, I agree to the terms of use &
            privacy policy.
          </p>
        </div>

        {/* Toggle */}
        <div className="mt-5 text-center text-sm text-gray-700">
          {currState === 'Login' ? (
            <p>
              Create a new account?{' '}
              <span
                onClick={() => setCurrState('Sign Up')}
                className="cursor-pointer font-semibold text-[tomato]"
              >
                Click here
              </span>
            </p>
          ) : (
            <p>
              Already have an account?{' '}
              <span
                onClick={() => setCurrState('Login')}
                className="cursor-pointer font-semibold text-[tomato]"
              >
                Login here
              </span>
            </p>
          )}
        </div>
      </form>
    </div>
  )
}

export default LoginPopup