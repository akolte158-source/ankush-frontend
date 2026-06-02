import React from 'react'
import { assets } from '../../assets/assets'

const AppDownload = () => {
  return (
    <div
      id="app-download"
      className="flex flex-col items-center justify-center text-center py-16 px-4"
    >
      <p className="text-2xl md:text-4xl font-semibold leading-snug text-gray-800">
        For Better Experience Download <br /> Tomato App
      </p>

      <div className="flex items-center gap-4 md:gap-6 mt-8">
        <img
          src={assets.play_store}
          alt="Play Store"
          className="w-36 md:w-44 cursor-pointer transition-transform duration-300 hover:scale-105"
        />

        <img
          src={assets.app_store}
          alt="App Store"
          className="w-36 md:w-44 cursor-pointer transition-transform duration-300 hover:scale-105"
        />
      </div>
    </div>
  )
}

export default AppDownload