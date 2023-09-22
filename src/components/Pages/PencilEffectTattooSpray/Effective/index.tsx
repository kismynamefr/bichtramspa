'use client'
import React from 'react'
import Image, {StaticImageData} from 'next/image';
import { Carousel} from "@material-tailwind/react";
import { ArrowLeftIcon, ArrowRightIcon } from "@heroicons/react/24/outline";
import Banner1 from '~/assets/PencilEffectTattooSpray/banner-1.png'
import Banner2 from '~/assets/PencilEffectTattooSpray/banner-2.png'
import Banner3 from '~/assets/PencilEffectTattooSpray/banner-3.png'

interface TypeImageList {
    link: StaticImageData,
    alt: string,
    name: string,
    title: string,
    description: string,
}

const imageList: Array<TypeImageList> = [
    {
        link: Banner2,
        alt: "banner 2",
        name: "Chị Ngọc Hương - 34 tuổi",
        title: "QUẢN LÝ NHÀ HÀNG",
        description : "Phun mày hiệu ứng bút chì khắc phục chân mày từng bị xăm hỏng",
    },
    {
        link: Banner1,
        alt: "banner 1",
        name: "Chị Hồng Nhung - 28 tuổi",
        title: "NHÂN VIÊN VĂN PHÒNG",
        description : "Phun mày hiệu ứng bút chì khắc phục khuyết điểm lông mày thưa thớt",
    },
    {
        link: Banner3,
        alt: "banner 3",
        name: "Chị Kim Ngân - 31 tuổi",
        title: "KINH DOANH BẤT ĐỘNG SẢN",
        description : "Phun mày hiệu ứng bút chì khắc phục dáng mày lệch, không cân đối",
    },
   
];

const Effective = () => {
  return (
    <div className="bg-BannerPencil-4 w-full">
        <div className="max-w-[1400px] m-auto py-5">
            <div className="text-center">
                <h1 className='bg-gradientText text-cosmetic font-bold text-5xl pb-4'>HIỆU QUẢ</h1>
                <h2 className='text-white text-3xl font-bold pb-4'>PHUN MÀY HIỆU ỨNG BÚT CHÌ TẠI BÍCH TRÂM</h2>
            </div>
            <div className="flex gap-5">
            <Carousel
                transition={{ duration: 1 }}
                autoplay={false}
                loop={true}
                className="max-h-[900px] overflow-hidden"
                prevArrow={({ handlePrev }) => (
                    <button
                        onClick={handlePrev}
                        className="absolute btn-arrow top-2/4 transform -translate-y-2/4 left-4 bg-transparent border-none focus:outline-none rounded-full"
                    >
                        <ArrowLeftIcon strokeWidth={2} className="w-6 h-6 text-white" />
                    </button>
                )}
                nextArrow={({ handleNext }) => (
                    <button
                        onClick={handleNext}
                        className="absolute btn-arrow top-2/4 transform -translate-y-2/4 right-4 bg-transparent border-none focus:outline-none rounded-full"
                    >
                        <ArrowRightIcon strokeWidth={2} className="w-6 h-6 text-white" />
                    </button>
                )}
                navigation={({ setActiveIndex, activeIndex, length }) => (
                    <div className="absolute bottom-4 left-2/4 z-50 !hidden -translate-x-2/4 gap-2">
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
                {imageList.map((item) => (
                    <div key={item.alt} className="">
                        <div className='relative flex gap-3 justify-center'>
                            <Image
                                className="rounded-lg"
                                src={item.link}
                                alt={item.alt}
                                width={832}
                                height={575}
                            />
                            <div className="absolute bottom-36 left-1/4">
                                <div className=" text-white font-bold">
                                    {item.name}
                                </div>
                                <div className=" text-white ">
                                    {item.title}
                                </div>
                            </div>
                            <div className="absolute bottom-6 ml-9 transform -translate-x-1/2 w-96">
                                <div className=" text-white py-2">
                                    {item.description}
                                </div>
                            </div>
                        </div>
                    </div>
                ))}   
            </Carousel>
            </div>
        </div>
    </div>
  )
}

export default Effective;
