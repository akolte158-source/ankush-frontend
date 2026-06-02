import React from 'react'

// Swiper Components
import { Swiper, SwiperSlide } from 'swiper/react';

// Swiper Styles
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';

// Swiper Modules
import { Navigation, Pagination, Autoplay } from 'swiper/modules';


const Header = () => {
  const sliders = [
        {
            id: 1,
            image: '/slider1.png',
            title: 'Fresh Grocery Delivered',
            subtitle: 'Best quality products at your doorstep',
        },
        {
            id: 2,
            image: '/slider2.png',
            title: 'Organic & Healthy',
            subtitle: 'Fresh fruits, vegetables & dairy products',
        },
        {
            id: 3,
            image: '/slider3.png',
            title: 'Big Discount Offers',
            subtitle: 'Save more on daily essentials',
        },
    ];

    return (
        <section className="w-full bg-gray-100 py-4">
            <div className="container mx-auto px-4">

                <Swiper
                    navigation={true}
                    pagination={{ clickable: true }}
                    loop={true}
                    autoplay={{
                        delay: 3000,
                        disableOnInteraction: false,
                    }}
                    modules={[Navigation, Pagination, Autoplay]}
                    className="overflow-hidden rounded-3xl shadow-xl"
                >

                    {sliders.map((slide) => (
                        <SwiperSlide key={slide.id}>

                            <div className="relative overflow-hidden rounded-3xl">

                                {/* Slider Image */}
                                <img
                                    src={slide.image}
                                    alt={slide.title}
                                    className="h-[220px] w-full object-cover sm:h-[320px] md:h-[420px] lg:h-[520px]"
                                />
                                

                            </div>

                        </SwiperSlide>
                    ))}
                </Swiper>
            </div>
        </section>
    );
}

export default Header