import React, { useContext } from 'react'
import FoodItem from '../FoodItem/FoodItem'
import { StoreContext } from '../../Context/StoreContext'

const FoodDisplay = ({ category }) => {
  const { food_list } = useContext(StoreContext)

  return (
    <div
      id="food-display"
      className="mt-8"
    >
      <h2 className="text-2xl md:text-3xl font-semibold text-gray-800">
        Top dishes near you
      </h2>

      <div className="mt-8 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
        {food_list.map((item) => {
          if (category === 'All' || category === item.category) {
            return (
              <FoodItem
                key={item._id}
                image={item.image}
                name={item.name}
                desc={item.description}
                price={item.price}
                id={item._id}
              />
            )
          }

          return null
        })}
      </div>
    </div>
  )
}

export default FoodDisplay