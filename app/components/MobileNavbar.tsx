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
         <ul className=''>
          <li>Home</li>
          <li>Products</li>
          <li>About us</li>
          <li>Cart</li>
         </ul>
      </SheetDescription>
    </SheetHeader>
  </SheetContent>
</Sheet>
    </div>
  )
}

export default MobileNavbar