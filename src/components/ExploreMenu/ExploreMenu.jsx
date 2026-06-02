import React, { useContext } from 'react'
import { StoreContext } from '../../Context/StoreContext'

// Swiper
import { Swiper, SwiperSlide } from 'swiper/react'
import { Navigation, Autoplay } from 'swiper/modules'

// Swiper CSS
import 'swiper/css'
import 'swiper/css/navigation'

const ExploreMenu = ({ category, setCategory }) => {
  const { menu_list } = useContext(StoreContext)

  return (
    <div
      id="explore-menu"
      className="flex flex-col gap-6 py-6"
    >
      {/* Heading */}
      <div className="flex flex-col gap-3">
        
        <h1 className="text-2xl font-bold text-gray-800 md:text-4xl">
          Explore Our Menu
        </h1>

        <p className="max-w-3xl text-sm leading-6 text-gray-500 md:text-base">
          Choose from a diverse menu featuring a delectable array
          of dishes crafted with the finest ingredients and culinary
          expertise.
        </p>
      </div>

      {/* Swiper */}
      <div className="relative">
        
        <Swiper
          slidesPerView={2}
          spaceBetween={20}
          navigation={true}
          autoplay={{
            delay: 2500,
            disableOnInteraction: false,
          }}
          modules={[Autoplay]}
          breakpoints={{
            480: {
              slidesPerView: 3,
            },
            640: {
              slidesPerView: 4,
            },
            768: {
              slidesPerView: 5,
            },
            1024: {
              slidesPerView: 7,
            },
            1280: {
              slidesPerView: 8,
            },
          }}
          className="mySwiper px-2"
        >
          {menu_list.map((item, index) => {
            const isActive =
              category === item.menu_name

            return (
              <SwiperSlide key={index}>
                
                <div
                  onClick={() =>
                    setCategory((prev) =>
                      prev === item.menu_name
                        ? 'All'
                        : item.menu_name
                    )
                  }
                  className="group flex cursor-pointer flex-col items-center"
                >
                  
                  {/* Image */}
                  <div
                    className={`overflow-hidden rounded-full border-4 transition-all duration-300 ${
                      isActive
                        ? 'border-[tomato] scale-105 shadow-lg'
                        : 'border-transparent'
                    }`}
                  >
                    <img
                      src={item.menu_image}
                      alt={item.menu_name}
                      className="h-[90px] w-[90px] object-cover transition-transform duration-300 group-hover:scale-110 md:h-[110px] md:w-[110px]"
                    />
                  </div>

                  {/* Name */}
                  <p
                    className={`mt-3 text-center text-sm font-medium transition-all duration-300 md:text-base ${
                      isActive
                        ? 'text-[tomato]'
                        : 'text-gray-600 group-hover:text-gray-900'
                    }`}
                  >
                    {item.menu_name}
                  </p>
                </div>
              </SwiperSlide>
            )
          })}
        </Swiper>
      </div>

      {/* Divider */}
      <hr className="mt-4 h-[2px] border-none bg-gray-200" />
    </div>
  )
}

export default ExploreMenu