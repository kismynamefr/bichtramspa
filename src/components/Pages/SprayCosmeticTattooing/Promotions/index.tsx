'use client'
import React from 'react'
import Image, {StaticImageData} from 'next/image';
import { Carousel, IconButton } from "@material-tailwind/react";
import { ArrowLeftIcon, ArrowRightIcon } from "@heroicons/react/24/outline";
import EffectButton from '~/components/EffectButton';

import BannerCarousel1 from '~/assets/SprayCosmeticTattooing/banner-2.png'
import BannerCarousel2 from '~/assets/SprayCosmeticTattooing/banner-3.png'
import BannerCarousel3 from '~/assets/SprayCosmeticTattooing/banner-4.png'

interface TypeBannerList {
  link: StaticImageData;
  alt: string;
}

const bannerList: Array<TypeBannerList> = [
  {
      link: BannerCarousel1,
      alt: "banner carousel",
  },
  {
      link: BannerCarousel2,
      alt: "banner carousel",
  },
  {
      link: BannerCarousel3,
      alt: "banner carousel",
  },
];

const Promotions = () => {
  return (
    <div className="bg-cosmetic6 w-full py-7 sm:pb-7 pb-16">
        <div className="sm:flex block justify-center items-center gap-10 sm:text-start text-center">
            <div className="">
                <p className='bg-gradientText text-cosmetic font-bold text-4xl max-w-[400px]'>CÁC CHƯƠNG TRÌNH KHUYẾN MÃI</p>
                <p className='text-white font-medium text-4xl'>HIỆN CÓ TẠI BÍCH TRÂM</p>
            </div>
            <div className="sm:block hidden">
                <Carousel
                    transition={{ duration: 1 }}
                    autoplay={true}
                    loop={true}
                    className="max-w-[800px] overflow-hidden"
                    prevArrow={({ handlePrev }) => (
                        <button
                            onClick={handlePrev}
                            className="absolute btn-arrow top-2/4 transform -translate-y-2/4 left-24 bg-transparent border-none focus:outline-none rounded-full"
                        >
                            <ArrowLeftIcon strokeWidth={2} className="w-6 h-6 text-white" />
                        </button>
                    )}
                    nextArrow={({ handleNext }) => (
                        <button
                            onClick={handleNext}
                            className="absolute btn-arrow top-2/4 transform -translate-y-2/4 right-24 bg-transparent border-none focus:outline-none rounded-full"
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
                {bannerList.map((item) => (
                    <div key={item.alt} className="">
                    <div className='relative flex gap-3 justify-center'>
                        <Image
                            className="rounded-lg"
                            src={item.link}
                            alt={item.alt}
                            width={500}
                            height={336}
                        />
                        <div className="absolute bottom-14 left-3/4 transform -translate-x-1/2 w-80">
                            <EffectButton href={"/"} title='ĐĂNG KÝ NGAY'/>
                        </div>
                    </div>
                </div>
                ))}
                </Carousel>
            </div>
            <div className="max-w-[1300px] m-auto sm:hidden block">
          <div className="flex flex-row flex-wrap justify-center gap-14">
          {bannerList.map((item) => (
                    <div key={item.alt} className="">
                    <div className='relative flex gap-3 justify-center'>
                        <Image
                            className="rounded-lg"
                            src={item.link}
                            alt={item.alt}
                            width={500}
                            height={336}
                        />
                        <div className="absolute -bottom-7 left-48 transform -translate-x-1/2 w-80">
                            <EffectButton href={"/"} title='ĐĂNG KÝ NGAY'/>
                        </div>
                    </div>
                </div>
                ))}
          </div>
        </div>
        </div>
    </div>
  )
}

export default Promotions;
