'use client'
import React from 'react'
import Image, {StaticImageData} from 'next/image';
import { Carousel, IconButton } from "@material-tailwind/react";
import { ArrowLeftIcon, ArrowRightIcon } from "@heroicons/react/24/outline";

import Item14 from '~/assets/Waxxing/Item-14.png'
import Item15 from '~/assets/Waxxing/Item-15.png'
import Item16 from '~/assets/Waxxing/Item-16.png'
import Item17 from '~/assets/Waxxing/Item-17.png'
import Item18 from '~/assets/Waxxing/Item-18.png'
import Item19 from '~/assets/Waxxing/Item-19.png'


interface PopularityItem {
    image: StaticImageData;
    alt: string,
    title: string;
    description: string,
}

const popularityItem: PopularityItem[] = [
    {
        image: Item14,
        alt: "Item Spa",
        title: 'CHỊ KIỀU (25 TUỔI)',
        description: 'TRIỆT LÔNG VĨNH VIỄN VÙNG NÁCH SAU 3 BUỔI',
    },
    {
      image: Item15,
      alt: "Item Spa",
      title: 'CHỊ LY (27 TUỔI)',
      description: 'TRIỆT LÔNG NÁCH, TRỊ VIÊM NANG LÔNG',
    },
    {
        image: Item16,
        alt: "Item Spa",
        title: 'CHỊ CẨM (29 TUỔI)',
        description: 'SAU 4 BUỔI TRIỆT LÔNG TOÀN THÂN',
    },
    {
        image: Item17,
        alt: "Item Spa",
        title: 'CHỊ HÂN (32 TUỔI)',
        description: 'TRỊ LÔNG VÙNG BIKINI',
    },
    {
        image: Item18,
        alt: "Item Spa",
        title: 'CHỊ NGÂN (26 TUỔI)',
        description: 'TRIỆT LÔNG TAY, LÔNG CHÂN',
    },
    {
        image: Item19,
        alt: "Item Spa",
        title: 'CHỊ YẾN (33 TUỔI)',
        description: 'TRIỆT LÔNG MẶT, RIA MÉP',
    },
   
]

const ResultsChangeMobile = () => {
    return (
      <div className="bg-Waxxing-4 w-full sm:hidden block">
        <div className="max-w-[1400px] m-auto py-5 px-10 text-center">
        <div className="py-5 text-center max-w-[1400px] m-auto">
            <h2 className='text-white sm:text-3xl text-2xl font-bold pb-4'>KẾT QUẢ</h2>
            <h1 className='bg-gradientText text-cosmetic font-bold sm:text-5xl text-3xl pb-4'>THAY ĐỔI RÕ RỆT</h1>
            <h1 className='bg-gradientText text-cosmetic font-bold sm:text-3xl text-2xl pb-4'>CHỈ SAU BUỔI ĐẦU TIÊN</h1>
        </div>
        <Carousel
          transition={{ duration: 1 }}
          autoplay={true}
          loop={true}
          className="max-w-[800px] overflow-hidden"
          prevArrow={({ handlePrev }) => (
            <button
                onClick={handlePrev}
                className="absolute btn-arrow top-[204px] !w-8 !h-8 left-1 transform -translate-y-2/4 bg-transparent border-none focus:outline-none rounded-full"
            >
                <ArrowLeftIcon strokeWidth={2} className="w-6 h-6 text-white" />
            </button>
          )}
          nextArrow={({ handleNext }) => (
            <button
                onClick={handleNext}
                className="absolute btn-arrow top-[204px] !w-8 !h-8 right-1 transform -translate-y-2/4 bg-transparent border-none focus:outline-none rounded-full"
            >
                <ArrowRightIcon strokeWidth={2} className="w-6 h-6 text-white" />
            </button>
          )}
          navigation={({ setActiveIndex, activeIndex, length }) => (
            <div className="!hidden absolute bottom-4 left-2/4 z-50 -translate-x-2/4 gap-2">
                {new Array(length).fill("").map((_, i) => (
                    <span
                        key={i}
                        className={`block h-1 cursor-pointer rounded-2xl transition-all ${
                            activeIndex === i ? "bg-white w-8" : "bg-white/50 w-4"
                        }`}
                        onClick={() => setActiveIndex(i)}
                    />
                ))}
            </div>
              )}
          >
            {popularityItem.map((item, index) => (
              <div key={index} className='m-auto pb-14'>
                <div className="relative">
                  <Image
                    src={item.image}
                    alt={item.alt}
                    className='object-cover object-center rounded-2xl'
                    width={820}
                    height={881}
                  />
                  <div className="absolute w-full -mt-10">
                    <p className='text-white mt-2 font-bold text-2xl'>{item.title}</p>
                    <p className='bg-gradientText text-cosmetic mt-2 font-bold text-xl'>{item.description}</p>
                  </div>
                </div>
              </div>
            ))}
        </Carousel>
         
        </div>
      </div>
    )
  }
  
  export default ResultsChangeMobile;