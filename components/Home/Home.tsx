'use client'
import React, { useEffect } from 'react'
import Hero from './Hero/Hero'
import Destination from './Destination/Destination'
import Hotel from './Hotel/Hotel'
import WhyChoose from './WhyChoose/WhyChoose'
import Review from './Reviews/Review'
import News from './News/News'
import NewsLetter from './NewsLetter/NewsLetter'
import AOS from 'aos';
import 'aos/dist/aos.css';
const Home = () => {
  useEffect(()=>{
    /* const initAOS = async () => { ... }
      定义了一个异步函数 initAOS，用于在组件挂载时导入 AOS 并进行初始化配置。
      await import('aos')
      使用 import() 函数动态加载 aos 库。
      动态导入的好处：
      按需加载：只有在使用时才加载库，减少初始加载时间，优化性能。
      避免在服务器端渲染（SSR）时加载不兼容的库，防止报错。 */
    const initAOS=async()=>{
      await import ('aos');
      AOS.init({
        duration:1000,//// 动画持续时间为 1000 毫秒（1 秒）
        easing:'ease',//使用 ease 缓动函数，使动画平滑过渡。
        once:true,//动画只触发一次，不会重复触发。
        anchorPlacement:'top-bottom'//动画在元素的顶部进入视口时触发。
      })
    }
    initAOS() 
  },[])
  return (
    <div className='overflow-hidden '>
      <Hero/>
      <Destination/>
      <Hotel/>
      <WhyChoose/>
      <Review/>
      <News/>
      <NewsLetter/>
    </div>
  )
}

export default Home