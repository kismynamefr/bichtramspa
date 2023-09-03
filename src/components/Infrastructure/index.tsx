'use client'
import React from 'react';
import { Carousel} from "@material-tailwind/react";
import { ArrowLeftIcon, ArrowRightIcon } from "@heroicons/react/24/outline";
import Image, { type StaticImageData } from "next/image";
import PicturesCustomers from '../PicturesCustomers';
import Item1 from '~/assets/Infrastructure/item-1.png';
import Item2 from '~/assets/Infrastructure/item-2.png';
import Item3 from '~/assets/Infrastructure/item-3.png';
import Item4 from '~/assets/Infrastructure/item-4.png';
import Item5 from '~/assets/Infrastructure/item-5.png';
import Item6 from '~/assets/Infrastructure/item-6.png';

interface TypeImageList {
    link: StaticImageData,
    alt: string,
    title: string,
}

const imageList: Array<TypeImageList> = [
    {
        link: Item1,
        alt: "image 1",
        title: "PHÒNG ĐIỀU TRỊ DA",
    },
    {
        link: Item2,
        alt: "image 2",
        title: "PHÒNG ĐIỀU TRỊ DA",
    },
    {
        link: Item3,
        alt: "image 3",
        title: "QUẦY LỄ TÂN",
    },
    {
        link: Item4,
        alt: "image 4",
        title: "SẢNH CHỜ",
    },
    {
        link: Item5,
        alt: "image 5",
        title: "PHÒNG PHUN XĂM",
    },
    {
        link: Item6,
        alt: "image 6",
        title: "PHÒNG TẮM TRẮNG",
    }
];

const Infrastructure: React.FunctionComponent<any> = () => {
    return (
        <div className='bg-infrastructure w-full z-20 -mt-28'>
            <div className="mt-24">
                <div className="flex justify-center items-center p-10">
                    <h1 className='text-white font-bold text-2xl text-center'>HÌNH ẢNH CƠ SỞ VẬT CHẤT</h1>
                </div>
                <div className="mx-4 hidden sm:block">
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
                    {imageList.map((item, index) => (
                        index % 2 === 0 && (
                            <div key={item.alt}>
                                <div className='flex gap-4 justify-center'>
                                    {[item, imageList[index + 1]].map((subItem) => (
                                        subItem ? (
                                            <div className='relative flex gap-3 justify-center' key={subItem.alt}>
                                                <Image
                                                    className="rounded-lg"
                                                    src={subItem.link}
                                                    alt={subItem.alt}
                                                    width={570}
                                                    height={475}
                                                />
                                                <div className="absolute bottom-6 left-1/2 transform -translate-x-1/2 w-80">
                                                    <div className="btn-title bg-black text-white font-bold text-center py-2">
                                                        {subItem.title}
                                                    </div>
                                                </div>
                                            </div>
                                        ) : null
                                    ))}
                                </div>
                            </div>
                        )
                    ))}
                    </Carousel>
                </div>
                <div className="mx-4 block sm:hidden">
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
                    {imageList.map((item) => (
                        <div key={item.alt} className="">
                            <div className='relative flex gap-3 justify-center'>
                                <Image
                                    className="rounded-lg"
                                    src={item.link}
                                    alt={item.alt}
                                    width={570}
                                    height={475}
                                />
                                <div className="absolute bottom-6 left-1/2 transform -translate-x-1/2 w-80">
                                    <div className="btn-title bg-black text-white font-bold text-center py-2">
                                        {item.title}
                                    </div>
                                </div>
                            </div>
                        </div>
                    ))}   
                    </Carousel>
                </div>
            </div>
            <PicturesCustomers />
        </div>
    );
}
export default Infrastructure;
