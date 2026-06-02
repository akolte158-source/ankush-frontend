import axios from 'axios'
import React, { useContext, useEffect } from 'react'
import {
  useNavigate,
  useSearchParams,
} from 'react-router-dom'
import { StoreContext } from '../../Context/StoreContext'

const Verify = () => {
  const { url } = useContext(StoreContext)

  const [searchParams] = useSearchParams()

  const success = searchParams.get('success')
  const orderId = searchParams.get('orderId')

  const navigate = useNavigate()

  const verifyPayment = async () => {
    try {
      const response = await axios.post(
        url + '/api/order/verify',
        { success, orderId }
      )

      if (response.data.success) {
        navigate('/myorders')
      } else {
        navigate('/')
      }
    } catch (error) {
      navigate('/')
    }
  }

  useEffect(() => {
    verifyPayment()
  }, [])

  return (
    <div className="flex min-h-[70vh] items-center justify-center">
      
      <div className="flex flex-col items-center gap-5">
        
        {/* Spinner */}
        <div className="h-16 w-16 animate-spin rounded-full border-4 border-gray-300 border-t-[tomato]"></div>

        {/* Text */}
        <p className="text-lg font-medium text-gray-600">
          Verifying your payment...
        </p>
      </div>
    </div>
  )
}

export default Verify