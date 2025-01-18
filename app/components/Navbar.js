import React from 'react'
import Link from 'next/link.js'
import { assets } from "@/public/assets.js"
import Image from 'next/image';

const Navbar = () => {
  return (
    <div className="flex items-center justify-between ml-5 py-3 font-medium">
      <div>Amar's Clothing</div>
      <ul className="hidden sm:flex gap-5 text-sm mr-5 text-gray-700">
        {/* Individual Links */}
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

      <div>
        <Image src={assets.search_icon} className='w-5 cursor-pointer mr-5' alt="Search Icon" />
      </div>


    </div>
  );
};

export default Navbar;
