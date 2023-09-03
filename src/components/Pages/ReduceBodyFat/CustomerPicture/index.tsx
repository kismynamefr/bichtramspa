'use client'
import React from 'react'
import Image, {StaticImageData} from 'next/image';
import { Carousel } from "@material-tailwind/react";
import { ArrowLeftIcon, ArrowRightIcon } from "@heroicons/react/24/outline";
import Pic1 from '~/assets/ReduceBodyFat/Item-23.png'
import Pic2 from '~/assets/ReduceBodyFat/Item-24.png'
import Pic3 from '~/assets/ReduceBodyFat/Item-25.png'

interface PicItems {
  image: StaticImageData,
  alt: string,
  title: string,
  location: string,
  descriptions: string,
}

const picItems: Array<PicItems> = [
  {
    image: Pic1,
    alt: "Pic 1",
    title: "KHÁCH HÀNG HUỆ TRÂN",
    location: "48 Tuổi - Bình Dương",
    descriptions: "Chị đã giảm được 7cm vòng bụng chỉ sau 3 buổi",
  },
  {
    image: Pic2,
    alt: "Pic 2",
    title: "KHÁCH HÀNG LÝ LAN",
    location: "35 Tuổi - Sài Gòn",
    descriptions: "Tôi đã giảm 11kg và lấy lại thân hình gọn gàng cân đối sau sinh con chỉ với liệu trình 5 buổi, giờ đồ nào cũng cân được hết.",
  },
  {
    image: Pic3,
    alt: "Pic 3",
    title: "KHÁCH HÀNG BÍCH VY",
    location: "50 Tuổi - Đồng Nai",
    descriptions: "Chị đã thành công giảm xuống 10kg trong vòng 3 buổi điều trị, chỉ số mỡ máu ở mức ổn định.",
  },

];

const CustomerPicture = () => {
  return (
    <div className="bg-ReduceBodyFat-6 w-full">
        <div className="sm:flex block w-full max-w-[1400px] m-auto items-center py-10">
          <div className="sm:w-1/3 w-full sm:pl-4 pl-0 sm:text-start text-center sm:px-0 px-3">
            <p className='sm:text-justify text-center text-white font-bold sm:text-2xl text-xl'>KHÁCH HÀNG</p>
            <h2 className='bg-gradientText font-bold sm:text-3xl text-3xl text-cosmetic sm:pb-4 pb-0'>GIẢM MỠ TOÀN THÂN</h2>
            <h2 className='bg-gradientText font-bold sm:text-5xl text-3xl text-cosmetic pb-4'>THÀNH CÔNG</h2>
          </div>
          <div className="sm:w-2/3 w-full sm:ml-52 ml-0 flex flex-wrap-reverse gap-4 justify-center">
          <Carousel
            transition={{ duration: 1 }}
            autoplay={true}
            loop={true}
            className="max-w-[800px] overflow-hidden"
            prevArrow={({ handlePrev }) => (
              <button
                  onClick={handlePrev}
                  className="absolute btn-arrow top-[135px] !w-8 !h-8 left-0 transform -translate-y-2/4 bg-transparent border-none focus:outline-none rounded-full"
              >
                  <ArrowLeftIcon strokeWidth={2} className="w-6 h-6 text-white" />
              </button>
            )}
          nextArrow={({ handleNext }) => (
              <button
                  onClick={handleNext}
                  className="absolute btn-arrow top-[135px] !w-8 !h-8 sm:right-[86px] right-0 transform -translate-y-2/4 bg-transparent border-none focus:outline-none rounded-full"
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
           {picItems.map((item, index) => (
            <div key={index}>
              <div className="relative pl-4 sm:ml-9">
                <Image
                  src={item.image}
                  alt={item.alt}
                  className='object-cover object-center'
                  width={790}
                  height={653}
                />
              </div>
              <div className="sm:w-[650px] w-[400px] px-12 text-start mt-5">
                <p className='bg-gradientText text-cosmetic mt-2 text-3xl font-bold'>{item.title}</p>
                <p className="bg-gradientText text-cosmetic font-bold text-2xl">{item.location}</p>
                <p className='text-white mt-2 text-lg text-justify'>{item.descriptions}</p>
            </div>
            </div>
           ))}
          </Carousel>
          </div>
        </div>
      </div>
  )
}

export default CustomerPicture;
