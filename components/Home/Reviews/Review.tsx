import React from 'react'
import { FaStar } from 'react-icons/fa'
import ReviewSlider from './ReviewSlider'

const Review = () => {
  return (
    <div className="pt-20 pb-20 flex items-center justify-center flex-col bg-[#13357b]">
      <div className="w-[80%] mx-auto grid items-center grid-cols-1 lg:grid-cols-2 gap-10">
        {/* text-content */}
          <div>
            <h1 className="text-2xl font-semibold text-white ">What our customers are saying us?</h1>
            <p className="mt-6 text-gray-200 text-sm">Lorem ipsum dolor sit, amet consectetur adipisicing elit. Deserunt, ad.</p>
            {/* Rating */}
            <div className="mt-6 flex item-center space-x-6">
              <div>
                <p className="text-2xl font-bold text-white ">4.88</p>
                <p className="text-white mb-2 text-sm">Overall Rating</p>
                <div className="flex items-center">
                  <FaStar className='text-white text-sm'/>
                  <FaStar className='text-white text-sm'/>
                  <FaStar className='text-white text-sm'/>
                  <FaStar className='text-white text-sm'/>
                  <FaStar className='text-white text-sm'/>  
                </div>
              </div>
            </div>
          </div>
          {/* slider */}
          <div className="overflow-hidden">
            <ReviewSlider/>
          </div>
      </div>
    </div>
  )
}

export default Review