import React from 'react'

function Card({ cardImg, cardHead, cardText }) {
  return (
    <>
      <div className="relative flex flex-col rounded-xl bg-[#7FA1C3] bg-clip-border text-gray-700 shadow-md hover:scale-105 transition duration-300 ease-in-out w-full sm:w-80 md:w-96">
        {/* Card Image Section */}
        <div className="relative mx-4 -mt-6 h-40 sm:h-48 md:h-56 overflow-hidden rounded-xl bg-blue-gray-500 bg-clip-border text-white shadow-lg shadow-blue-gray-500/40 bg-gradient-to-r from-blue-500 to-blue-600">
          {cardImg}
        </div>

        {/* Card Text Section */}
        <div className="p-6">
          <h5 className="mb-2 block font-sans text-lg sm:text-xl md:text-2xl font-semibold leading-snug tracking-normal text-blue-gray-900 antialiased">
            {cardHead}
          </h5>
          <p className="block font-sans text-sm sm:text-base font-light leading-relaxed text-inherit antialiased">
            {cardText}
          </p>
        </div>

        {/* Card Button Section */}
        <div className="p-6 pt-0">
          <button className="select-none rounded-lg bg-blue-500 py-2 sm:py-3 px-4 sm:px-6 text-center align-middle font-sans text-xs sm:text-sm md:text-base font-bold uppercase text-white shadow-md shadow-blue-500/20 transition-all hover:shadow-lg hover:shadow-blue-500/40 focus:opacity-[0.85] focus:shadow-none active:opacity-[0.85] active:shadow-none disabled:pointer-events-none disabled:opacity-50 disabled:shadow-none">
            Read More
          </button>
        </div>
      </div>
    </>
  )
}

export default Card
