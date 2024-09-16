'use client'
import Link from 'next/link';

import React from 'react';
import { MdMenuOpen } from "react-icons/md";
import {
    Sheet,
    SheetContent,
    SheetDescription,
    SheetHeader,
    SheetTitle,
    SheetTrigger,
  } from "@/components/ui/sheet"
  
const Navbar: React.FC = () => {
  return (
    <nav className="fixed top-0 w-full z-50 bg-white bg-opacity-30 backdrop-blur-lg shadow-md">
      <div className="container mx-auto px-4 py-3 flex justify-between items-center">
        {/* Logo */}
        <div className="flex items-center">
          {/* <Image src="#" alt="Logo" width={40} height={40} /> */}
          <span className="text-xl font-bold text-gray-800 ml-2">MyBlog</span>
        </div>

        {/* Navigation Links */}
        <div className="hidden md:flex space-x-6 items-center">
          <Link href="/" passHref>
            <span className="text-gray-800 hover:text-blue-600 font-semibold transition cursor-pointer">Home</span>
          </Link>
          <Link href="/about" passHref>
            <span className="text-gray-800 hover:text-blue-600 font-semibold transition cursor-pointer">About</span>
          </Link>
          <Link href="/contact" passHref>
            <span className="text-gray-800 hover:text-blue-600 font-semibold transition cursor-pointer">Contact</span>
          </Link>
        </div>

        {/* Buttons */}
        <div className="hidden md:flex space-x-4">
          <Link href="/login" passHref>
            <span className="px-4 py-2 text-sm text-gray-800 border border-gray-300 rounded-md hover:bg-black hover:text-white transition cursor-pointer">Login</span>
          </Link>
          <Link href="/signup" passHref>
            <span className="px-4 py-2 text-sm text-white bg-black rounded-md hover:bg-inherit border hover:text-black active:bg-slate-300 hover:border-gray-300 transition cursor-pointer">Sign Up</span>
          </Link>
        </div>

        {/* Mobile Menu Button */}
        <div className='md:hidden'>
      <Sheet>
        <SheetTrigger>
        <MdMenuOpen className='text-3xl'/> {/* ya react icon h  */}
        </SheetTrigger>
        <SheetContent className="bg-white p-4 pt-5 rounded-lg shadow-lg">
          <SheetHeader>
            <SheetTitle className="text-center text-gray-800 text-2xl font-semibold">Menu</SheetTitle>
            <SheetDescription className="text-gray-600">
             <div className='flex flex-col gap-4'>
             <div className='font-semibold hover:text-black'>Home</div>
             <div className='font-semibold hover:text-black'>About</div>
             <div className='font-semibold hover:text-black'>Blog</div>
             <div className="flex justify-center pt-4 space-x-4">
  <Link href="/login" passHref>
    <span className="px-4 py-2 text-sm font-medium text-gray-800 border border-gray-300 rounded-md hover:bg-black hover:text-white transition cursor-pointer">
      Login
    </span>
  </Link>
  <Link href="/signup" passHref>
    <span className="px-4 py-2 text-sm font-medium text-white bg-black rounded-md hover:bg-blue-700 transition cursor-pointer">
      Sign Up
    </span>
  </Link>
</div>
             </div>
            </SheetDescription>
          </SheetHeader>
        </SheetContent>
      </Sheet>
    </div>
      </div>

      {/* Mobile Menu */}
      

     

    </nav>
  );
};

export default Navbar;
