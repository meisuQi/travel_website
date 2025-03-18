import Link from 'next/link'
import React from 'react'
import {FaFacebook, FaInstagram, FaTwitter } from 'react-icons/fa'

const Footer = () => {
  return (
    <div className="pt-16 pb-16">
      <div className='w-[80%] mx-auto items-start grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-10'>
        {/* 1st part */}
        <div className='space-y-5'>
          <h1 className="text-lg font-bold">Company</h1>
          <p className="text-gray-800 font-medium cursor-pointer text-sm hover:text-blue-950">About Us</p>
          <p className="text-gray-800 font-medium cursor-pointer text-sm hover:text-blue-950">Careers</p>
          <p className="text-gray-800 font-medium cursor-pointer text-sm hover:text-blue-950">Blog</p>
          <p className="text-gray-800 font-medium cursor-pointer text-sm hover:text-blue-950">Gift Cards</p>
          <p className="text-gray-800 font-medium cursor-pointer text-sm hover:text-blue-950">Magazine</p>
        </div>
        {/* 2nd part */}
        <div className='space-y-5'>
          <h1 className="text-lg font-bold">Support</h1>
          <p className="text-gray-800 font-medium cursor-pointer text-sm hover:text-blue-950">Contact</p>
          <p className="text-gray-800 font-medium cursor-pointer text-sm hover:text-blue-950">Legal Notice</p>
          <p className="text-gray-800 font-medium cursor-pointer text-sm hover:text-blue-950">Private Policy</p>
          <p className="text-gray-800 font-medium cursor-pointer text-sm hover:text-blue-950">Terms and Conditions</p>
          <p className="text-gray-800 font-medium cursor-pointer text-sm hover:text-blue-950">Sitemap</p>
        </div>
        {/* 3rd part */}
        <div className='space-y-5'>
          <h1 className="text-lg font-bold">Other Services</h1>
          <p className="text-gray-800 font-medium cursor-pointer text-sm hover:text-blue-950">Car hire</p>
          <p className="text-gray-800 font-medium cursor-pointer text-sm hover:text-blue-950">Activity Finder</p>
          <p className="text-gray-800 font-medium cursor-pointer text-sm hover:text-blue-950">Tour List</p>
          <p className="text-gray-800 font-medium cursor-pointer text-sm hover:text-blue-950">Flight Finder</p>
          <p className="text-gray-800 font-medium cursor-pointer text-sm hover:text-blue-950">Travel Agents</p>
        </div>
        {/* 4th part */}
        <div className="space-y-5">
          <h1 className="text-lg font-bold">Contact Us</h1>
          <div>
          <p className="text-xs text-gray-950">Our Mobile Number</p>
          <p className="text-lg text-blue-900 font-bold">+012 4565 5643</p>
          </div>
          <div>
          <p className="text-xs text-gray-950">Our Email Address</p>
          <p className="text-lg text-blue-900 font-bold">example@gmail.com</p>
          </div>
        </div>
      </div>
      {/* Bottom section */}
      <div className="mt-8 w-[80%] mx-auto border-t pt-8 flex flex-col md:flex-row justify-between text-gray-600 items-center text-sm">
          <p className="text-center md:text-left">Copyright © 2025 Webdev. All rights reserved</p>
          <div className="flex items-center space-x-4 mt-4 md:mt-0">
            <span>Social : </span>
            <Link href="#" className="text-gray-500 hover:text-gray-800"><FaTwitter/></Link>
            <Link href="#" className="text-gray-500 hover:text-gray-800"><FaFacebook/></Link>
            <Link href="#" className="text-gray-500 hover:text-gray-800"><FaInstagram/></Link>
          </div>
      </div>    
    </div>
  )
}

export default Footer