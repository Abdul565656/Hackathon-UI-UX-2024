import React from 'react'
import {
    Sheet,
    SheetContent,
    SheetDescription,
    SheetHeader,
    SheetTitle,
    SheetTrigger,
  } from "@/components/ui/sheet"
import { IoMenu } from "react-icons/io5";
import { FaHome, FaBox, FaInfoCircle, FaShoppingCart } from 'react-icons/fa';
import Link from 'next/link';


const MobileNavbar = () => {
  return (
    <div>
           <Sheet>
  <SheetTrigger>
  <IoMenu />
  </SheetTrigger>
  <SheetContent>
    <SheetHeader>
      <SheetTitle></SheetTitle>
      <SheetDescription>
      <ul className="flex flex-col items-center space-y-6 bg-white p-6 rounded-lg shadow-lg text-gray-700 text-lg">
        <Link href='/'><li className="flex items-center space-x-2 hover:text-blue-500 cursor-pointer">
          <FaHome className="w-6 h-6" />
          <span>Home</span>
        </li></Link>
        <Link href='/ProductListing'><li className="flex items-center space-x-2 hover:text-blue-500 cursor-pointer">
          <FaBox className="w-6 h-6" />
          <span>Products</span>
        </li></Link>
        <Link href='/Aboutus'><li className="flex items-center space-x-2 hover:text-blue-500 cursor-pointer">
          <FaInfoCircle className="w-6 h-6" />
          <span>About Us</span>
        </li></Link>
        <Link href='/Cart'><li className="flex items-center space-x-2 hover:text-blue-500 cursor-pointer">
          <FaShoppingCart className="w-6 h-6" />
          <span>Cart</span>
        </li></Link>
        <Link href='/SeeAllProducts'><li className="flex items-center space-x-2 hover:text-blue-500 cursor-pointer">
          <FaShoppingCart className="w-6 h-6" />
          <span>See all products</span>
        </li></Link>
      </ul>
      </SheetDescription>
    </SheetHeader>
  </SheetContent>
</Sheet>
    </div>
  )
}

export default MobileNavbar