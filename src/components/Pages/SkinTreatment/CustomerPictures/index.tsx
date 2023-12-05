import React from 'react'
import Image, {StaticImageData} from 'next/image';
import EffectButton from '~/components/EffectButton';
import BannerTitle from '~/assets/SkinTreatment/banner-title-2.png'
import { Carousel, IconButton } from "@material-tailwind/react";
import { ArrowLeftIcon, ArrowRightIcon } from "@heroicons/react/24/outline";

import Item12 from '~/assets/SkinTreatment/Item-12.png'
import Item13 from '~/assets/SkinTreatment/Item-13.png'
import Item14 from '~/assets/SkinTreatment/Item-14.png'
import Item15 from '~/assets/SkinTreatment/Item-15.png'
import Item16 from '~/assets/SkinTreatment/Item-16.png'
import Item17 from '~/assets/SkinTreatment/Item-17.png'

interface CustomerPicturesItem {
    link: StaticImageData,
    alt: string,
    step: string,
    title: string,
}

const customerPicturesItem: Array<CustomerPicturesItem> = [
    {
        link: Item12,
        alt: "Step 1",
        step: "(23 TUỔI)",
        title: "CHỊ THÙY LINH",
    },
    {
        link: Item13,
        alt: "Step 2",
        step: "(27 TUỔI)",
        title: "CHỊ NGỌC HÂN",
    },
    {
        link: Item14,
        alt: "Step 3",
        step: "(35 TUỔI)",
        title: "CHỊ TRÂN CHÂU",
    },
    {
        link: Item15,
        alt: "Step 4",
        step: "(27 TUỔI)",
        title: "CHỊ HỒNG NHUNG",
    },
    {
        link: Item16,
        alt: "Step 5",
        step: "(30 TUỔI)",
        title: "CHỊ MINH NGỌC",
    },
    {
        link: Item17,
        alt: "Step 6",
        step: "(24 TUỔI)",
        title: "CHỊ TUYẾT ANH",
    },
   
   
];

const CustomerPictures = () => {
  return (
    <div className="bg-boxtimeSpaColor w-full">
        <div className="w-full max-w-[1060px] m-auto text-center pt-20">
          <h1 className='bg-gradientText text-cosmetic font-bold lg:text-6xl text-4xl pb-4'>KHÁCH HÀNG ĐÃ TIN CHỌN</h1>
          <h2 className='text-white lg:text-4xl text-3xl font-medium pb-4'>DỊCH VỤ TẠI BÍCH TRÂM</h2>
        </div>
        <div className="hidden grid-cols-3 gap-5 mt-5 max-w-[1400px] m-auto sm:grid ">
            {customerPicturesItem.map((item, index) => (
            <div key={index} className='pb-28'>
                <div className="relative flex justify-center">
                    <Image
                        src={item.link}
                        alt={item.alt}
                        className='object-cover object-center'
                        width={400}
                    />
                    <div className="-bottom-20 absolute text-center">
                        <p className='bg-gradientText text-cosmetic mt-2 font-bold text-2xl'>{item.title}</p>
                        <p className='text-orange-900 font-bold mt-2 text-lg'>{item.step}</p>
                    </div>
                </div>
            </div>
            ))}
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
                            className="absolute btn-arrow top-32 h-8 w-8 transform -translate-y-2/4 left-2 bg-transparent border-none focus:outline-none rounded-full"
                        >
                            <ArrowLeftIcon strokeWidth={2} className="w-6 h-6 text-white" />
                        </button>
                    )}
                    nextArrow={({ handleNext }) => (
                        <button
                            onClick={handleNext}
                            className="absolute btn-arrow top-32 h-8 w-8 transform -translate-y-2/4 right-2 bg-transparent border-none focus:outline-none rounded-full"
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
               {customerPicturesItem.map((item, index) => (
                    <div key={index} className='pb-28'>
                        <div className="relative flex justify-center">
                            <Image
                                src={item.link}
                                alt={item.alt}
                                className='object-cover object-center'
                                width={620}
                            />
                            <div className="-bottom-28 absolute text-center">
                                <p className='bg-gradientText text-cosmetic mt-2 font-bold text-2xl'>{item.title}</p>
                                <p className='text-orange-900 font-bold mt-2 text-lg'>{item.step}</p>
                            </div>
                        </div>
                    </div>
                ))}
            </Carousel>
        </div>
        <div className="text-center pb-8">
            <EffectButton href={'/'} title='ĐĂNG KÝ MIỄN PHÍ'/>
        </div>
    </div>
    
  )
}

export default CustomerPictures
