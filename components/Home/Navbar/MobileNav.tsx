import { navLinks } from '@/constants/constant'
import Link from 'next/link'
import React from 'react'
import { CgClose } from 'react-icons/cg'

type Props={
  showNav:boolean;
  closeNav:()=>void;
}

const MobileNav = ({showNav,closeNav}:Props) => {
  // "translate-x-0"作用：让元素的 X 轴位移为 0，即保持原位。
  const navOpen = showNav ? "translate-x-0" : "-translate-x-full";
  return (
    <div>
      {/* overlay */}
      {/* inset-0 用于设置一个元素的 top、right、bottom 和 left 属性为 0。如果元素的定位（position）是 absolute 或 fixed，使用 inset-0 就相当于把它对齐到父容器的四个边。 
      transform 用于立即改变元素的外观，比如位置、大小、旋转等。它可以直接应用到元素上。
      transition 用于控制元素的属性变化如何平滑过渡，通常与 transform 结合使用，来创建动画效果。
      */}
      <div className={`fixed ${navOpen} inset-0 transform transition-all duration-500 z-[1002] bg-black opacity-70 w-full h-screen`}></div>  
        {/* NavLinks */}
          <div className={`text-white ${navOpen} fixed justify-center flex flex-col h-full transform  transition-all duration-500 delay-300 w-[80%] sm:w-[60%] bg-rose-900 space-y-6 z-[1050]`}>
            {navLinks.map((link)=>{
              return <Link href={link.url} key={link.id}>
                {/* w-fit 会让 div 的宽度自动适应其文本内容的宽度，而不额外拉伸 */} 
                <p className='text-white w-fit text-[20px] ml-12 border-b-[1.5px] pb-1 border-white sm:text-[30px]'>
                  {link.label}y
                  </p>
                </Link>
            })}
              {/* close button */}
          <CgClose onClick={closeNav} className='absolute top-[0.7rem] right-[1.4rem] sm:w-8 sm:h-8 w-6 h-6'/>
          </div>
    </div>
  )
}

export default MobileNav