import Image from 'next/image'
import React from 'react'

const Touch = () => {
  return (
    <div>

           <div className='flex justify-between'>
              <div className='w-[650px] h-[485px] p-16 font-light'>
                <h4 className='text-2xl'>From a studio in London to a global brand with over 400 outlets</h4>
                <br />
                <p className='text-xl'>When we started Avion, the idea was simple. Make high quality furniture affordable and available for the mass market. 
                  <br />
                  <br />
                  Handmade, and lovingly crafted furniture and homeware is what we live, breathe and design so our Chelsea boutique become the hotbed for the London interior design community.</p>

                  <button className='mt-16 bg-[#F9F9F9] pt-4 pb-4 pr-8 pl-8'>Get In Touch</button>

              </div>


              <div className='flex w-[650px] h-[500px]'>
                <Image
                 src="/images/room.jpeg"
                 alt="room"
                 width={400}
                 height={100}
                 className='w-full h-full object-cover'
                />
              </div>
           </div>


    </div>
  )
}

export default Touch;
