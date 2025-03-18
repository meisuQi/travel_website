'use client';
import React from 'react'
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
// swiper/css/effect-cards 是 Swiper.js 提供的一个特殊效果 "卡片堆叠"（Card Stack Effect），它允许 幻灯片像一叠卡片一样堆叠，并依次翻动，适用于展示 卡片式 UI、产品列表等。
import 'swiper/css/effect-cards';
import { EffectCards } from 'swiper/modules';
import { reviewData } from '@/data/data';
import { FaStar } from 'react-icons/fa';
import Image from 'next/image';
const ReviewSlider = () => {
  return (
    <div>
      {/* 启用了 卡片堆叠效果（Cards Effect）
      effect={'cards'} 让 Swiper 变成 "卡片堆叠轮播"，适合卡片式交互
      grabCursor={true} 让鼠标变成 "抓手"，提升用户体验
      modules={[EffectCards]} 必须引入，否则 effect="cards" 无法生效
      */}
      <Swiper effect={'cards'} grabCursor={true} modules={[EffectCards]} className="md:w-[450px] md:h-[350px] w-[90%] h-[300px]">
        {reviewData.map((data)=>{
          return <SwiperSlide key={data.id} className='bg-white rounded-3xl block'>
              <div className="w-[80%] mx-auto mt-10">
                {/* review text */}
                <p className="text-sm sm:text-xs md:text-base font-semibold">{data.review}</p>
                {/* icons */}
                <div className="flex items-center mt-3">
                  <FaStar className="md:w-6 md:h-6 w-3 h-3 text-yellow-600"/>
                  <FaStar className="md:w-6 md:h-6 w-3 h-3 text-yellow-600"/>
                  <FaStar className="md:w-6 md:h-6 w-3 h-3 text-yellow-600"/>
                  <FaStar className="md:w-6 md:h-6 w-3 h-3 text-yellow-600"/>
                  <FaStar className="md:w-6 md:h-6 w-3 h-3 text-yellow-600"/>
                </div>
                {/* users profile */}
                <div className="mt-8">
                  <div className="flex items-center space-x-4">
                    <Image src={data.image} width={60} height={60} alt="client" className="rounded-full"/>
                    <div>
                      <p className="text-sm sm:text-lg font-semibold">{data.name}</p>
                      <p className='text-gray-600 text-xs sm:text-base'>Web Developer</p>
                    </div>
                  </div>
                </div>
              </div>
          </SwiperSlide>
        })}
      </Swiper>
    </div>
  )
}

export default ReviewSlider