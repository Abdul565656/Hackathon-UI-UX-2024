
import Image from 'next/image'
import React from 'react'

const Touch = () => {
  return (
    <>
      <section>
        <div className="py-12 text-[#2A254B] mt-12">
          <div className="flex">
            <div className="w-full  h-auto px-4 py-8 flex flex-col justify-between">
              <div>
                <h1 className="text-2xl">
                  From a studio in London to a global brand with <br /> over 400 outlets
                </h1>
                <h1 className="py-6 text-lg">
                  When we started Avion, the idea was simple. Make high-quality furniture <br />
                  affordable and available for the mass market.
                </h1>
                <h1 className="text-base">
                  Handmade and lovingly crafted furniture and homeware is what we live, <br />
                  breathe, and design, so our Chelsea boutique became the hotbed for the <br />
                  London interior design community.
                </h1>
              </div>
              <div className="my-10">
                <button className="bg-[#F9F9F9] py-4 px-4 rounded-[5px] text-[#2A254B]">
                  Get in touch
                </button>
              </div>
            </div>

            <div>
              <Image
                src='/images/room.jpeg'
                height={350}
                width={350}
                alt="room"
                className="ml-64"
              />
            </div>
          </div>
        </div>
      </section>
    </>
  )
}

export default Touch;
