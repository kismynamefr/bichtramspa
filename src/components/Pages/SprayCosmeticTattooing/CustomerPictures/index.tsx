'use client'
import React from 'react'
import Image, {StaticImageData} from 'next/image';
import { Carousel, IconButton } from "@material-tailwind/react";
import { ArrowLeftIcon, ArrowRightIcon } from "@heroicons/react/24/outline";

interface Item {
  image: StaticImageData;
  name: string;
  title: string;
}

import ImgItem1 from '~/assets/SprayCosmeticTattooing/img-1.png'
import ImgItem2 from '~/assets/SprayCosmeticTattooing/img-2.png'
import ImgItem3 from '~/assets/SprayCosmeticTattooing/img-3.png'
import ImgItem4 from '~/assets/SprayCosmeticTattooing/img-4.png'
import ImgItem5 from '~/assets/SprayCosmeticTattooing/img-5.png'

const items: Item[] = [
    {
      image: ImgItem1,
      name: 'CHỊ NGỌC NGÀ (35 TUỔI)',
      title: 'PHUN XĂM LẠI MÀY TRỔ ĐỎ',
    },
    {
      image: ImgItem2,
      name: 'CHỊ ÁNH NGÂN (30 TUỔI)',
      title: 'PHUN COMBO MÀY MÔI PHONG THỦY',
    },
    {
      image: ImgItem3,
      name: 'CHỊ HẠNH UYÊN (26 TUỔI)',
      title: 'PHUN MÔI COLLAGEN TRỊ THÂM XỈN',
    },
    {
      image: ImgItem4,
      name: 'ANH TẤN PHÁT (34 TUỔI)',
      title: 'PHUN MÀY PHONG THỦY',
    },
    {
      image: ImgItem5,
      name: 'CHỊ NGUYỆT ĐAN (28 TUỔI)',
      title: 'PHUN MÀY MÔI KHẮC PHỤC MÔI THÂM MÀY NHẠT',
    },
  ];

const CustomerPictures = () => {
  return (
    <div className="bg-cosmetic5 w-full">
        <div className="w-full max-w-[1060px] m-auto text-center pt-10">
          <h2 className='text-white text-4xl font-medium pb-4'>HÌNH ẢNH</h2>
          <h1 className='bg-gradientText text-cosmetic font-bold sm:text-6xl text-4xl pb-4'>KHÁCH HÀNG PHUN</h1>
          <h1 className='bg-gradientText text-cosmetic font-bold sm:text-6xl text-4xl pb-4'>XĂM THÀNH CÔNG</h1>
          <h2 className='text-white sm:text-4xl text-2xl font-medium pb-4'>TẠI THẨM MỸ VIỆN ...</h2>
        </div>
        <div className="max-w-[1300px] m-auto sm:block hidden">
          <div className="flex flex-row flex-wrap justify-center gap-14">
          {items.map((item, index) => (
            <div key={index} className="text-center">
              <Image src={item.image} alt='Item' className='w-[390px] h-[260px] object-cover'/>
              <div className="">
                <p className='text-white font-medium text-xl'>{item.name}</p>
                <p className='bg-gradientText text-cosmetic font-bold text-base max-w-[300px] m-auto'>{item.title}</p>
              </div>
            </div>
          ))}
          </div>
        </div>
        <div className="sm:hidden block">
            <Carousel
                transition={{ duration: 1 }}
                autoplay={true}
                loop={true}
                className="max-w-[800px] overflow-hidden"
                prevArrow={({ handlePrev }) => (
                    <button
                        onClick={handlePrev}
                        className="absolute btn-arrow top-[132px] w-8 h-8 left-1 transform -translate-y-2/4 bg-transparent border-none focus:outline-none rounded-full"
                    >
                        <ArrowLeftIcon strokeWidth={2} className="w-6 h-6 text-white" />
                    </button>
                )}
                nextArrow={({ handleNext }) => (
                    <button
                        onClick={handleNext}
                        className="absolute btn-arrow top-[132px] w-8 h-8 right-1 transform -translate-y-2/4 bg-transparent border-none focus:outline-none rounded-full"
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
            {items.map((item, index) => (
              <div key={index} className="text-center">
                <Image src={item.image} alt='Item' className='w-[390px] h-[260px] object-cover'/>
                <div className="">
                  <p className='text-white font-medium text-xl'>{item.name}</p>
                  <p className='bg-gradientText text-cosmetic font-bold text-base max-w-[300px] m-auto'>{item.title}</p>
                </div>
              </div>
            ))}
            </Carousel>
        </div>
      </div>
  )
}

export default CustomerPictures;
