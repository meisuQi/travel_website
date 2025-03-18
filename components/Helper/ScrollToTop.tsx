'use client'
import React, { useEffect, useState } from 'react'
import { FaArrowUp } from 'react-icons/fa';

const ScrollToTop = () => {
  const[isVisible,setIsVisible]=useState(false);
  useEffect(()=>{
    const toggleVisibility=()=>{
      if(window.scrollY >300){
        setIsVisible(true)
      }else{
        setIsVisible(false)
      }
    }
    window.addEventListener('scroll',toggleVisibility)
    return ()=>window.removeEventListener('scroll',toggleVisibility)
  },[]);
  const scrollToTop=()=>{
    window.scrollTo({
      top:0,
      behavior:"smooth"
    })  
  }
  return (
    // animate-pulse 是 Tailwind CSS 中的一个动画类，它让元素产生“脉冲”效果，通常用于让元素呈现轻微的渐变变化，看起来像在轻微闪烁。
    //right-4 是 Tailwind CSS 中的定位工具类，通常用于定位一个元素的相对位置。具体来说，right-4 表示将元素的右侧位置偏移为 1rem（基于默认的 Tailwind 配置，4 对应 1rem）。
    <div className="fixed bottom-4 animate-pulse right-4">
      {isVisible && (<button onClick={scrollToTop} className="bg-rose-700 text-white rounded-full w-12 h-12 flex items-center  justify-center focus:outline-none">
        <FaArrowUp/>
      </button>)}
    </div>
  )
}

export default ScrollToTop