'use client'
import { navLinks } from '@/constants/constant'
import Link from 'next/link'
import React, { useEffect, useState } from 'react'
import { HiBars3BottomLeft, HiBars3BottomRight } from 'react-icons/hi2'
import { TbAirBalloon } from 'react-icons/tb'
type Props={
  openNav:()=>void;
}

const Nav = ({openNav}:Props) => {
  const [navBg,setNavBg]=useState(false);
  useEffect(()=>{
    const handler=()=>{
      // window.scrollY表示页面顶部距离视口顶部（window）的像素值。
      if(window.scrollY>=90) setNavBg(true)
      if(window.scrollY<90) setNavBg(false)
    };
    window.addEventListener('scroll',handler)
    return ()=>window.removeEventListener('scroll',handler)
  },[])
  return (
    /* transition-all enables smooth transitions for all applicable properties when the state changes.
    For example, if h-[12vh] changes to h-[20vh], the transition will be animated instead of an instant change.
    duration-200 sets the animation duration to 200 milliseconds (0.2 seconds).
    h-[12vh] sets the height of the element to 12% of the viewport height（视口高度：相对于浏览器窗口的高度）.
    z-[1000] sets the z-index to 1000, ensuring the element is on a higher layer and not overlapped by other elements.
    */ 
    <div className={`${navBg ? "bg-blue-950 shadow-md" : "fixed"} transition-all duration-200 h-[12vh] z-[1000] fixed w-full`}>
      {/* h-full makes the element take up 100% of the height of its parent container.
        w-[90%] sets the element's width to 90% of its parent container.
        xl:w-[80%] makes the width 80% on extra-large screens (≥1280px).
      */}
      <div className='flex items-center h-full justify-between w-[90%] xl:w-[80%] mx-auto'>
        {/* Logo */}
        {/* space-x-2 is a Tailwind CSS spacing utility that adds horizontal space between child elements. 
        space-x-2 → 在 **同一父容器** 内的 **子元素** 之间添加 `0.5rem (8px)` 的水平间距。
        默认单位：Tailwind CSS 里的 2 代表 0.5rem（等于 8px）。
        作用对象：只对同级（flex 或 grid）子元素生效，不影响父容器的 padding/margin。
        */}
        <div className='flex items-center space-x-2'>
          {/* rounded-full ： a Tailwind CSS border-radius utility that makwwwes an element fully rounded (a perfect circle or an ellipse, depending on its dimensions). */}
          <div className='flex flex-col items-center justify-center  w-10 h-10 bg-rose-500 rounded-full '>
            <TbAirBalloon className='w-6 h-6 text-white'/>
          </div>
          {/* On small screens, the text size is text-xl (large).
            On medium (md) screens and larger (min-width: 768px), the text size increases to text-2xl (extra large). */}
          <h1 className='text-xl md:text-2xl text-white uppercase font-bold'>Tripi</h1>
        </div>
        {/* NavLinks */}
            <div className='hidden lg:flex items-center space-x-10'>
              {navLinks.map((link)=>{
                return (
                <Link href={link.url} key={link.id}>
                  {/* text-base 通常是默认的字体大小，也就是 1rem，即 16px。
                      font-medium 设置文本的 font-weight 为 500，通常是比正常字体加粗一点的粗细。
                      after:block 表示 ::after 伪元素会占据一整行，和块级元素一样在页面中占满可用空间。
                      after:content-[' '] 属性是必须的，用来生成伪元素的内容。这里是用空格创建一个可见但没有实际内容的元素。
                      after:w-full  这使得 ::after 伪元素宽度占据父元素的全部宽度，因此它通常用作一个全宽的下划线或装饰。
                      after:bottom-0 将 ::after 伪元素的底部对齐到父元素的底部边缘。
                      after:scale-x-0 设置 ::after 伪元素的 scale-x 初始值为 0，意味着它水平缩放为 0，即不可见。
                  */}
                  <p className="relative text-white text-base font-medium inline-block 
                      after:block after:content-[' '] after:absolute after:h-[3px] 
                      after:bg-yellow-300 after:w-full after:bottom-0 after:left-0
                      after:scale-x-0 after:hover:scale-x-100 after:transition after:duration-300 after:origin-left" >
                      {link.label}
                  </p>
                </Link>)
              })}
            </div>
            {/* buttons */}
            <div className='flex items-center space-x-4'>
              <button className='md:px-12 md:py-2.5 px-8 py-2 text-black text-base bg-white hover:bg-gray-200 transition-all duration-200 rounded-lg'>Book Now
              </button>
              {/* Burger menu */}
              <HiBars3BottomRight onClick={openNav} className='w-8 h-8 cursor-pointer text-white lg:hidden'/>
            </div>
      </div>
    </div> 
  )
}

export default Nav