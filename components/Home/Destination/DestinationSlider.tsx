"use client"
import { destinationData } from '@/data/data';
import Image from 'next/image';
import React from 'react'
import Carousel from 'react-multi-carousel';
import 'react-multi-carousel/lib/styles.css';
const responsive = {
  desktop: {
    breakpoint: { max: 3000, min: 1324 },
    items: 5,
    slidesToSlide: 1 // optional, default to 1.
  },
  tablet: {
    breakpoint: { max: 1324, min: 764 },
    items: 2,
    slidesToSlide: 1 // optional, default to 1.
  },
  mobile: {
    breakpoint: { max: 764, min: 0 },
    items: 1,
    slidesToSlide: 1 // optional, default to 1.
  }
};
const DestinationSlider = () => {
return <Carousel 
        responsive={responsive} 
        infinite={true} 
        autoPlay={true} 
        autoPlaySpeed={5000} 
        keyBoardControl={true}>
      {destinationData.map((data)=>{
        return <div key={data.id}className="m-3">
          <div className="relative h-[400px]">
            {/* overlay */}
            {/* inset-0:inset-0 是 Tailwind CSS 提供的一个 定位类（Positioning Utility），它的作用是 同时设置 top, right, bottom, left 的值为 0 ，让子集铺满父集*/}
            {/* 这行代码的作用其实是起到了一个增加loading page的效果，可以试着用Next的loading.tsx或者Suspense来实现 */}
            <div className="absolute inset-0 bg-black opacity-25 rounded-lg"></div>
            {/* Image */}
            <Image 
              src={data.image} 
              alt={data.country} 
              width={500} 
              height={500} 
              className="h-full w-full object-cover rounded-lg"/>
          </div>
           {/* Text Content */}
           <h1 className="text-lg font-semibold mt-4">{data.country}</h1>
              <p className="text-sm text-gray-600">{data.travelers} Travelers</p>
        </div>
      })}
  </Carousel>
}

export default DestinationSlider