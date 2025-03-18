import React from 'react'
import { FaCalendarWeek, FaMap } from 'react-icons/fa'
import { FaUserGroup } from 'react-icons/fa6'

const SearchBox = () => {
  return (
    <div className='bg-white rounded-lg p-8 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 items-center justify-center gap-8 mt-4 sm:mt-12 w-[95%] sm:w-[80%]'>
      {/* 1st search input */}
      <div className='flex items-center space-x-6'>
        {/* 用于显示一个地图（Map）图标。它通常用于 Next.js 或 React 项目中，表示地图、位置或导航等功能。 */}
        <FaMap className="w-6 h-6 text-blue-600" />
        <div>
          <p className='text-lg font-medium '>Location</p>
          <input type="text"  placeholder="where are you going?" className="outline-none border-none placeholder:text-gray-800 text-base font-normal"/>
        </div>
      </div>
      {/* 2nd search input */}
      <div className='flex items-center space-x-6'>
        <FaCalendarWeek className="w-6 h-6 text-blue-600"/>
        <div>
          <p className='text-lg font-medium '>Start Date</p>
          <input type="date"   className="outline-none border-none text-base"/>
        </div>
      </div>
      {/* 3rd search input */}
      <div className='flex items-center space-x-6'>
        <FaCalendarWeek className="w-6 h-6 text-blue-600"/>
        <div>
          <p className='text-lg font-medium '>End Date</p>
          <input type="date" className="outline-none border-none text-base"/>
        </div>
      </div>
      {/* 4th search input */}
      <div className='flex items-center space-x-6'>
      <FaUserGroup className="w-6 h-6 text-blue-600"/>
      <div>
        <p className='text-lg font-medium mb-[1.5rem]'>Guest</p>
        <p className='text-base font-normal'>1 Guest 1 Room</p>
      </div>
      </div>
    </div>
  )
}

export default SearchBox