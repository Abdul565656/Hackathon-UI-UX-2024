import Image from 'next/image'
import React from 'react'

const Ceramics = () => {
  return (
   <div>
        <div className="px-2 md:px-8 py-12 text-[#2A254B] mt-12">
          <h1 className="text-2xl font-semibold">New Ceramics</h1>

          {/* Product Items */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-2 mt-12">
            <div className="md:w-[320px] md:h-[320px] w-28 h-44">
              <Image
                src="/images/chair.jpeg"
                height={600}
                width={600}
                alt="chair"
                className="w-full h-full object-cover"
              />
              <div className="mt-4 text-[#2A254B]">
                <p className="py-2 text-sm">The Dendy Chair</p>
                <p className="text-sm">$250</p>
              </div>
            </div>

            <div className="md:w-[320px] md:h-[320px] w-28 h-44">
              <Image
                src="/images/card2.jpeg"
                height={250}
                width={250}
                alt="vase"
                className="w-full h-full object-cover"
              />
              <div className="mt-4 text-[#2A254B]">
                <p className="py-2 text-sm">Rustic VaseSet</p>
                <p className="text-sm">$155</p>
              </div>
            </div>
            <div className="md:w-[320px] md:h-[320px] w-28 h-44">
              <Image
                src="/images/card3.jpeg"
                height={600}
                width={600}
                alt="silky vase"
                className="w-full h-full object-cover"
              />
              <div className="mt-4 text-[#2A254B]">
                <p className="py-2 text-sm">The Silky Vase</p>
                <p className="text-sm">$125</p>
              </div>
            </div>
            <div className="md:w-[320px] md:h-[320px] w-28 h-44">
              <Image
                src="/images/card4.jpeg"
                height={600}
                width={600}
                alt="lamp"
                className="w-full h-full object-cover"
              />
              <div className="mt-4 text-[#2A254B]">
                <p className="py-2 text-sm">The Lucky Lamp</p>
                <p className="text-sm">$399</p>
              </div>
            </div>
          </div>

          {/* View Collection Button */}
          <div className=" flex justify-center items-center md:mt-24 mt-20">
            <button className="bg-[#F9F9F9] py-3 px-5 rounded-[5px] text-[#2A254B]">
              View collection
            </button>
          </div>
        </div>
    </div>
  )
}

export default Ceramics;
