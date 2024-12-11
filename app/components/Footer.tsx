
import Link from 'next/link';
import React from 'react';
import { FaLinkedin, FaInstagram, FaFacebookSquare, FaTwitter, FaPinterest } from "react-icons/fa";
import { IoLogoSkype } from "react-icons/io";

const Footer = () => {
  return (
    <div>
      
           <div className='flex bg-[#2A254B] justify-between items-center p-20 text-white leading-9 font-thin'>

           <div className=''>
            <ul>
              <h3 className='text-xl'>Menu</h3>
              <li>New arrivals</li>
              <li>Best sellers</li>
              <li>Recently viewed</li>
              <li>Popular this week</li>
              <li>All products</li>
              </ul>
           </div>

           <div>
           <ul>
              <h3 className='text-xl'>Categories</h3>
              <li>Crockery</li>
              <li>Furniture</li>
              <li>Homeware</li>
              <li>Plant pots</li>
              <li>Chairs</li>
            </ul>
           </div>

           <div>
           <ul>
              <h3 className='text-xl'>Our Company</h3>
              <li>About us</li>
              <li>Vacancies</li>
              <li>Contact us</li>
              <li>Privacy</li>
              <li>Returns policy</li>
            </ul>
           </div>

           <div className='mb-20'>
           <ul>
            <h3 className='text-xl'>Join our mailing list</h3>
            <br />
              <input type="text" placeholder='your@email.com'  className='pr-40 pl-40 p-2 pt-4 pb-2 bg-[#FFFFFF26]'/>
              <button className='pt-4 pb-2 pr-8 pl-8 bg-white text-black'>Sign up</button>
            </ul>
           </div>
           </div>

           <div className='bg-[#2A254B]'>
            <hr className='border-t border-white ml-16 mr-16' />

            <div className='flex justify-between p-6 ml-12 mr-12'>

              <div className='text-white'>Copyright 2022 Avion LTD</div>
              <div className='flex space-x-8 text-xl text-white'>
              <FaLinkedin/>
              <FaInstagram/>
              <FaFacebookSquare/>
              <FaTwitter/>
              <FaPinterest/>
              </div>
            </div>
           </div>


    </div>
  );
};

export default Footer;
