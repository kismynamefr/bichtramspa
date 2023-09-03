'use client'
import React from 'react'
import Image, {StaticImageData} from 'next/image';
import { Carousel } from "@material-tailwind/react";
import { ArrowLeftIcon, ArrowRightIcon } from "@heroicons/react/24/outline";

import BannerCustomerComments from '~/assets/WhiteBath/Item-comment.png'
import CommentItem1 from '~/assets/WhiteBath/Comment-mb-1.png'
import CommentItem2 from '~/assets/WhiteBath/Comment-mb-2.png'
import CommentItem3 from '~/assets/WhiteBath/Comment-mb-3.png'
import CommentItem4 from '~/assets/WhiteBath/Comment-mb-4.png'

interface CommentItems {
  image: StaticImageData,
  alt: string,
}

const commentItems: Array<CommentItems> = [
  {
    image: CommentItem1,
    alt: "Comment 1",
  },
  {
    image: CommentItem2,
    alt: "Comment 2",
  },
  {
    image: CommentItem3,
    alt: "Comment 3",
  },
  {
    image: CommentItem4,
    alt: "Comment 4",
  },
];

const CustomerComments = () => {
  return (
    <div className="bg-WhiteBath-6 w-full">
        <div className="sm:flex block w-full max-w-[1400px] m-auto items-center py-10">
          <div className="sm:w-1/3 w-full sm:pl-4 pl-0 sm:text-start text-center sm:px-0 px-3 sm:pb-0 pb-5">
            <h2 className='font-bold sm:text-5xl text-4xl text-white pb-4'>KHÁCH HÀNG</h2>
            <h2 className='font-bold sm:text-5xl text-4xl text-white pb-4'>REVIEW</h2>
            <h2 className='bg-gradientText font-bold sm:text-4xl text-xl text-cosmetic p-2'>HIỆU QUẢ TẮM TRẮNG TẠI ...</h2>
          </div>
          <div className="sm:w-2/3 w-full sm:ml-10 ml-0 sm:block hidden">
            <Image src={BannerCustomerComments} width={903} height={663} alt='Banner Spa'/>
          </div>
          <div className="sm:hidden block px-2">
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
           {commentItems.map((item, index) => (
            <div key={index}>
              <div className="relative">
                <Image
                  src={item.image}
                  alt={item.alt}
                  className='object-cover object-center'
                  width={800}
                  height={600}
                />
              </div>
            </div>
           ))}
          </Carousel>
      </div>
        </div>
      </div>
  )
}

export default CustomerComments;
