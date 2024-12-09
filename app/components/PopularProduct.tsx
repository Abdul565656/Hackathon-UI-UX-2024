
'use client'
import Image from 'next/image'
import React from 'react'

const Product = () => {
  return (
   <div>
        <div className='px-8 py-12 text-[#2A254B] mt-12'>
          <h1 className='text-2xl'>Our popular products</h1>

          
          <div className='flex gap-8 mt-8'>
          
            <div className=' h-auto group'>
              <Image
                src='/images/sofa.jpeg'
                height={300}
                width={300}
                alt='sofa'
                className=' h-[80%] object-cover'
              />
              <div className='mt-4 text-[#2A254B]'>
                <p className='py-2'>The popular suede sofa</p>
                <p>$980</p>
              </div>
            </div>

            <div className=' h-auto group'>
              <Image
                src='/images/chair.jpeg'
                height={300}
                width={300}
                alt='chair'
                className=' h-[80%] object-cover'
              />
              <div className='mt-4 text-[#2A254B]'>
                <p className='py-2'>The Dandy chair</p>
                <p>$250</p>
              </div>
            </div>

            <div className='h-auto'>
              <Image
                src='/images/stool.jpeg'
                height={300}
                width={300}
                alt='chair'
                className=' h-[80%] object-cover'
              />
              <div className='mt-4 text-[#2A254B]'>
                <p className='py-2'>The Dandy chair</p>
                <p>$250</p>
              </div>
            </div>

          </div>

          <div className='my-10 flex justify-center items-center'>
            <button className='bg-[#F9F9F9] py-4 px-6 rounded-[5px] text-[#2A254B]'>
              View products
            </button>
          </div>
        </div>
    </div>
  )
}

export default Product;
