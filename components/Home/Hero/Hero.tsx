import SearchBox from '@/components/Helper/SearchBox'
import Link from 'next/link'
import React from 'react'

const Hero = () => {
  return (
    <div className='relative w-full h-[120vh] sm:h-[100vh]'>
      {/* overlay */}
      <div className='absolute top-0 left-0 w-full h-full bg-gray-800 opacity-70'></div>
      {/* preload="metadata"该属性指定浏览器在加载页面时应当预加载视频的哪些数据。"metadata" 表示仅加载视频的元数据（例如，视频的时长、尺寸等信息），而不立即下载整个视频文件。这样可以减少页面加载的时间，并允许用户查看视频的基本信息。
      object-cover ：浏览器会保持元素的纵横比，同时让元素的尺寸填满整个容器，可能会裁剪部分元素以适应容器的宽高比例。如果元素的原始比例与容器的比例不一致，元素的某些部分可能会被“剪切”。
      */}
      <video src="/images/hero1.mp4" autoPlay muted loop preload="metadata" className="w-full h-full object-cover"/>
      {/* Text-content */}
      {/* top-[50%] left-[50%] translate-x-[-50%] translate-y-[-50%]
      因为top-[50%] left-[50%]只是将元素的左上角移到了父容器的中央，但是这样元素的中心并没有与父容器的中心对齐。为了确保元素的中心对齐父容器的中心，我们还需要将元素偏移它的宽度和高度的一半。
      */}
      <div className='absolute z-[100] w-full h-full top-[50%] left-[50%] translate-x-[-50%] translate-y-[-50%]'>
        <div className='flex items-center justify-center flex-col w-full h-full'>
          <div data-aos="fade-up">
            {/* tracking-[0.7rem] 是 Tailwind CSS 的一个自定义字母间距（letter-spacing）类。tracking 代表字母间距，[0.7rem] 说明使用自定义值 0.7rem。 */}
            <h1 className="text-[25px] mb-4 md:mb-0 text-center md:text-[35px] lg:text-[45px] tracking-[0.7rem] text-white font-bold uppercase">Lets Enjoy The Nature</h1>
            <p className='md:text-base text-center text-lg text-white font-normal [word-spacing:5px]'>Get the best prices on 2,000,000+ properties, worldwide</p>
          </div>
          {/* Search Box */}
          <SearchBox />
          {/* rounded: border-radius: 0.25rem;
              -mt-4:设置元素的 上外边距（margin-top） 为 -1rem，使元素向上偏移。
              group:为父元素应用 group 类，可以在该元素内部控制子元素的样式（子元素里：group-hover:）。这常用于在鼠标悬停（hover）时影响子元素样式。
              hover:bg-gradient-to-r:在元素 悬停（hover）时，将背景样式变为从左到右的渐变背景
              hover:from-red-500:当元素悬停时，渐变背景的起始颜色为 red-500（中等红色)。
              hover:to-red-400:当元素悬停时，渐变背景的结束颜色为 red-400（稍浅的红色)。
              hover:ring-2:当鼠标悬停时，添加 2px 宽的 ring 边框（相当于 border 但不会影响元素大小）。ring 不是传统的 border，而是 外部阴影（outline-like），不会影响盒模型的尺寸。
              hover:ring-offset-2 :当鼠标悬停时，在 ring 和元素之间 添加 2px 的间距。这个间距让 ring 与元素之间留有一定的空隙。如果不加 ring-offset，ring 会直接贴合元素。
              hover:ring-red-400:当鼠标悬停时，ring 的颜色变成 red-400（浅红色）。
          */}
          <Link href="#" className="  rounded px-14 md:px-28 -mt-4 py-2.5  overflow-hidden  group bg-rose-600 relative hover:bg-gradient-to-r hover:from-red-500 hover:to-red-400 text-white hover:ring-2 hover:ring-offset-2 hover:ring-red-400 transition-all ease-out duration-300">
            {/* translate-x-12：初始状态下，已经向右偏移了 12px 
            rotate-12：光斑 旋转 12 度，模拟一种斜向的光影，让它看起来更自然，而不是一条笔直的线条。
            group-hover:-translate-x-40：当鼠标悬停时光斑，进一步向左移动 40px，制造光影扫过的动画。
            */}
            <span className="absolute right-0 w-8 h-32 -mt-12 transition-all duration-1000 transform translate-x-10 bg-white opacity-10 rotate-12 group-hover:-translate-x-40 ease"></span>
            <span className='relative font-bold '>Search</span>
          </Link>
        </div>
      </div>
    </div>
  )
}

export default Hero