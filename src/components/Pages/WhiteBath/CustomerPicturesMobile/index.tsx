import React from 'react'
import Image, {StaticImageData} from 'next/image';
import { Carousel, IconButton } from "@material-tailwind/react";
import { ArrowLeftIcon, ArrowRightIcon } from "@heroicons/react/24/outline";

import Item8 from  '~/assets/WhiteBath/Item-8.png'
import Item9 from  '~/assets/WhiteBath/Item-9.png'
import Item10 from '~/assets/WhiteBath/Item-10.png'
import Item11 from '~/assets/WhiteBath/Item-11.png'
import Item12 from '~/assets/WhiteBath/Item-12.png'

interface ProcedureItem {
    link: StaticImageData,
    alt: string,
    age: string,
    title: string,
    description: string,
}

const procedureItem: Array<ProcedureItem> = [
    {
        link: Item8,
        alt: "Item Spa",
        age: "(25 TUỔI)",
        title: "CHỊ HUYỀN TRANG",
        description : "TẮM TRẮNG LUXURY YOUNG BODY BẬT 3 TONE",
    },
    {
        link: Item9,
        alt: "Item Spa",
        age: "(28 TUỔI)",
        title: "CHỊ BÍCH HÂN",
        description : "TẮM TRẮNG PHI THUYỀN BẬT 4 TONE",
    },
    {
        link: Item10,
        alt: "Item Spa",
        age: "(30 TUỔI)",
        title: "CHỊ HỒNG OANH",
        description : "TẮM TRẮNG COLLAGEN BODY BẬT LIỀN 3 TONE",
    },
    {
        link: Item11,
        alt: "Item Spa",
        age: "(31 TUỔI)",
        title: "CHỊ NGÂN BÌNH",
        description : "TẮM TRẮNG COLLAGEN BODY BẬT 5 TONE",
    },
    {
        link: Item12,
        alt: "Item Spa",
        age: "(32 TUỔI)",
        title: "CHỊ YẾN NHI",
        description : "TẮM TRẮNG TOÀN THÂN BẬT LIỀN 3 TONE",
    },
];

const CustomerPicturesMobile = () => {
    return (
      <div className="sm:hidden block">
        <Carousel
          transition={{ duration: 1 }}
          autoplay={true}
          loop={true}
          className="max-w-[800px] overflow-hidden"
          prevArrow={({ handlePrev }) => (
            <button
                onClick={handlePrev}
                className="absolute btn-arrow top-[132px] !w-8 !h-8 left-1 transform -translate-y-2/4 bg-transparent border-none focus:outline-none rounded-full"
            >
                <ArrowLeftIcon strokeWidth={2} className="w-6 h-6 text-white" />
            </button>
          )}
        nextArrow={({ handleNext }) => (
            <button
                onClick={handleNext}
                className="absolute btn-arrow top-[132px] !w-8 !h-8 right-1 transform -translate-y-2/4 bg-transparent border-none focus:outline-none rounded-full"
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
            {procedureItem.map((item, index) => (
              <div key={index} className="flex justify-center items-center">
                <div className="relative h-[486px]">
                  <Image
                    src={item.link}
                    alt={item.alt}
                    className='object-cover object-center'
                    width={833}
                    height={567}
                  />
                  <div className="absolute top-3/4 left-1/2 transform -translate-x-1/2 -translate-y-1/2 text-center w-[342px]">
                    <p className='text-white mt-2 font-bold text-3xl'>{item.title}</p>
                    <p className='text-white font-bold mt-2 text-2xl'>{item.age}</p>
                    <p className='bg-gradientText text-cosmetic font-bold mt-2 text-2xl'>{item.description}</p>
                  </div>
                </div>
              </div>
            ))}
        </Carousel>
      </div>
    )
  }
  
  export default CustomerPicturesMobile;
  
