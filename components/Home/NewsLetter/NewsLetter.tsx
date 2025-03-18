import React from 'react'
import { BsEnvelope, BsEnvelopePaper } from 'react-icons/bs'

const NewsLetter = () => {
  return (
    <div className="bg-black pt-16 pb-16 flex items-center justify-center w-full flex-col">
       <BsEnvelopePaper className="w-16 h-16 mt-20 text-white "/> 
       {/* tracking-widest 是 Tailwind CSS 提供的一个 字间距（letter-spacing）类，用于控制 文本字符之间的间距。 */}
       <h1 className="text-lg sm:text-xl md:text-2xl text-white font-semibold mt-10 tracking-widest">Your Travel Journey Starts Here</h1>
       <p className="mt-3 text-white text-xs sm:text-sm">Sign up and we'll send the best deals to you </p>

       {/* subscription input and button */}
       <div className="w-full">
        <input type="text" className="px-6 py-3.5 text-sm bg-white mt-8 w-[95%] sm:w-[80%] md:w-[60%] lg:w-[40%] block mx-auto rounded-lg outline-none " placeholder="Email"/>
        <button className="px-6 py-3.5 text-sm bg-blue-900 text-white  hover:bg-blue-950 mt-3 w-[95%] sm:w-[80%] md:w-[60%] lg:w-[40%] block mx-auto rounded-lg outline-none  transition-all duration-200 font-medium" >Subscribe</button>
       </div>
    </div>
  )
}

export default NewsLetter