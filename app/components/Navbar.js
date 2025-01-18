"use client"
import React from 'react';
import Link from 'next/link';
import { assets } from "@/public/assets.js";
import Image from 'next/image';
import { useState } from 'react';

const Navbar = () => {

  const [visible, setVisible] = useState(false)

  return (
    <div className="flex items-center justify-between ml-5 py-3 font-medium">
      {/* Brand Name */}
      <div className="cursor-default" >Amar's E-commerce</div>

      {/* Navigation Links */}
      <ul className="hidden sm:flex gap-5 text-sm mr-5 text-gray-700">
        <li className="flex flex-col items-center group">
          <Link href="/" className="flex flex-col items-center gap-1">
            Home
            <hr className="w-1/4 border-none h-[2px] bg-gray-700 transition-all duration-300 ease-in-out group-hover:w-3/4"></hr>
          </Link>
        </li>
        <li className="flex flex-col items-center group">
          <Link href="/collection" className="flex flex-col items-center gap-1">
            Collection
            <hr className="w-1/4 border-none h-[2px] bg-gray-700 transition-all duration-300 ease-in-out group-hover:w-3/4"></hr>
          </Link>
        </li>
        <li className="flex flex-col items-center group">
          <Link href="/about" className="flex flex-col items-center gap-1">
            About
            <hr className="w-1/4 border-none h-[2px] bg-gray-700 transition-all duration-300 ease-in-out group-hover:w-3/4 group-active:w-3/4"></hr>
          </Link>
        </li>
        <li className="flex flex-col items-center group">
          <Link href="/contact" className="flex flex-col items-center gap-1">
            Contact
            <hr className="w-1/4 border-none h-[2px] bg-gray-700 transition-all duration-300 ease-in-out group-hover:w-3/4"></hr>
          </Link>
        </li>
      </ul>

      {/* Profile Icon and Dropdown */}
      <div className="flex items-center gap-5 mr-5">
        {/* Search Icon */}
        <Image 
          src={assets.search_icon} 
          className="w-5 h-5 cursor-pointer" 
          alt="search_icon" 
        />
        {/* Profile Icon with Dropdown */}
        <div className="relative group">
          <Image 
            src={assets.profile_icon} 
            className="w-6 h-6 cursor-pointer" 
            alt="profile_icon" 
          />
          {/* Dropdown Menu */}
          <div className="hidden group-hover:block absolute dropdown-menu right-0 pt-4">
            <div className="flex flex-col gap-2 w-36 py-3 px-5 bg-slate-100 text-gray-500 rounded shadow-lg">
              <p className="cursor-pointer hover:text-black">My Profile</p>
              <p className="cursor-pointer hover:text-black">Orders</p>
              <p className="cursor-pointer hover:text-black">Log out</p>
            </div>
          </div>
        </div>
        <Link href="/cart" className="relative">
          <Image src={assets.cart_icon} className="w-5 min-w-5" alt="cart_icon" />
          <p className="absolute right-[-5px] bottom-[-5px] w-4 text-center leading-4 bg-black text-white aspect-square rounded-full text-[8px]">4</p>
        </Link>
        <Image onClick={()=>setVisible(true) } src={assets.menu_icon} className="w-5 cursor-pointer sm:hidden" alt="menu-icon" />
      </div>

      {/*Sidebar menu for smaller screens */}

      <div className={`absolute top-0 right-0 bottom-0 overflow-hidden bg-white transition-all ${visible? 'w-full' : "w-0"}`}>
        <div className="flex flex-col text-gray-600">
          <div onClick={()=>setVisible(false)} className="flex cursor-pointer item-center gap-4 p-3" >
            <Image src={assets.dropdown_icon} alt="" className="h-4 rotate-180" />
            <p>Back</p>
          </div>
          <Link onClick={()=>setVisible(false)} className="py-6 pl-6 border" href="/">Home</Link>
          <Link onClick={()=>setVisible(false)} className="py-6 pl-6 border" href="/collection">Collection</Link>
          <Link onClick={()=>setVisible(false)} className="py-6 pl-6 border" href="/about">About</Link>
          <Link onClick={()=>setVisible(false)} className="py-6 pl-6 border" href="/contact">Contact</Link>
        </div>
      </div>

    </div>
  );
};

export default Navbar;
