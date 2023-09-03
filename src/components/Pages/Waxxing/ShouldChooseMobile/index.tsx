'use client'
import React from 'react'
import { Carousel, IconButton } from "@material-tailwind/react";
import { ArrowLeftIcon, ArrowRightIcon } from "@heroicons/react/24/outline";
import Image, { type StaticImageData } from "next/image";
import BgBoxTitile from '~/assets/Waxxing/bg-boxTitle.png'
import BannerCenter from '~/assets/Waxxing/banner-title-5.png'
import Item1 from '~/assets/Waxxing/Item-1.png'
import Item2 from '~/assets/Waxxing/Item-2.png'
import Item3 from '~/assets/Waxxing/Item-3.png'
import Item4 from '~/assets/Waxxing/Item-4.png'
import Item5 from '~/assets/Waxxing/Item-5.png'
import Item6 from '~/assets/Waxxing/Item-6.png'

interface BoxBlock {
    image: StaticImageData;
    alt: string;
    title: string;
}

const boxBlocks: BoxBlock[] = [
    {
      image: Item1,
      alt: 'Item Spa',
      title: 'Công nghệ triệt lông vĩnh viễn mới nhất 2023.',
    },
    {
      image: Item2,
      alt: 'Item Spa',
      title: 'Không gian sang trọng, đảm bảo sự riêng tư, thoải mái.',
    },
    {
      image: Item3,
      alt: 'Item Spa',
      title: 'Không đau, an toàn, hiệu quả ngay lần đầu thực hiện.',
    },
    {
      image: Item4,
      alt: 'Item Spa',
      title: 'Đội ngũ kỹ thuật viên chuyên nghiệp, chu đáo.',
    },
    {
      image: Item5,
      alt: 'Item Spa',
      title: 'Bảo hành, cam kết hiệu quả bằng văn bản.',
    },
    {
      image: Item6,
      alt: 'Item Spa',
      title: 'Trang thiết bị hiện đại, đảm bảo khử khuẩn tiệt trùng.',
    },
];

const ShouldChooseMobile = () => {
  return (
    <div className="bg-Waxxing-5-MB w-full h-[620px] sm:hidden block">
      <div className="max-w-[1070px] relative m-auto flex flex-col justify-center items-center h-screen">
        <Carousel
            transition={{ duration: 1 }}
            autoplay={true}
            loop={true}
            className="max-w-[800px] overflow-hidden"
            prevArrow={({ handlePrev }) => (
              <button
                  onClick={handlePrev}
                  className="absolute btn-arrow top-[230px] !w-8 !h-8 left-0 transform -translate-y-2/4 bg-transparent border-none focus:outline-none rounded-full"
              >
                  <ArrowLeftIcon strokeWidth={2} className="w-6 h-6 text-white" />
              </button>
            )}
          nextArrow={({ handleNext }) => (
              <button
                  onClick={handleNext}
                  className="absolute btn-arrow top-[230px] !w-8 !h-8 right-0 transform -translate-y-2/4 bg-transparent border-none focus:outline-none rounded-full"
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
           {boxBlocks.map((item, index) => (
            <div key={index}>
              <div className="relative">
                <Image
                  src={item.image}
                  alt={item.alt}
                  className='object-cover object-center'
                  width={800}
                  height={600}
                />
                  <Image src={BgBoxTitile} alt='Box Title' />
                  <div className="text-white text-center text-xl p-7 -mt-[114px]">
                  <p>{item.title}</p>
                </div>
              </div>
            </div>
           ))}
          </Carousel>
      </div>
    </div>
  
  )
}

export default ShouldChooseMobile;
