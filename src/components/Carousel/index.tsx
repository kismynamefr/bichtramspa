'use client'
import React from "react";
import { Carousel, IconButton } from "@material-tailwind/react";
import { ArrowLeftIcon, ArrowRightIcon } from "@heroicons/react/24/outline";
import Image, { type StaticImageData } from "next/image";
import banner1 from "~/assets/Banner/banner-01.png";
import banner2 from "~/assets/Banner/banner-02.png";
import banner3 from "~/assets/Banner/banner-03.png";
import banner1Mb from "~/assets/Banner/banner-mobile01.png";
import banner2Mb from "~/assets/Banner/banner-mobile02.png";
import banner3Mb from "~/assets/Banner/banner-mobile03.png";

interface TypeImageList {
    link: StaticImageData;
    alt: string;
    className: string;
}

const imageList: Array<TypeImageList> = [
    {
        link: banner1,
        alt: "image 1",
        className: "object-cover w-full",
    },
    {
        link: banner2,
        alt: "image 2",
        className: "object-cover w-full",
    },
    {
        link: banner3,
        alt: "image 3",
        className: "object-cover w-full",
    },
];

const mobileImageList: Array<TypeImageList> = [
    {
        link: banner1Mb,
        alt: "image 1",
        className: "object-cover w-full",
    },
    {
        link: banner2Mb,
        alt: "image 2",
        className: "object-cover w-full",
    },
    {
        link: banner3Mb,
        alt: "image 3",
        className: "object-cover w-full",
    },
];

const CarouselComponent: React.FC = () => {
    return (
        <div>
            <div className="hidden sm:block">
                <Carousel
                    transition={{ duration: 1 }}
                    autoplay={true}
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
                    {imageList.map(({ link, alt, className }) => (
                        <Image key={alt} src={link} alt={alt} className={className} />
                    ))}
                </Carousel>
            </div>
            <div className="block sm:hidden">
                <Carousel
                    transition={{ duration: 1 }}
                    autoplay={true}
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
                    {mobileImageList.map(({ link, alt, className }) => (
                        <Image key={alt} src={link} alt={alt} className={className} />
                    ))}
                </Carousel>
            </div>
        </div>
    );
};

export default CarouselComponent;
