'use client'
import React from 'react'
import Image, {StaticImageData} from 'next/image';

import BannerCustomerComments from '~/assets/Waxxing/pic-comment.png'
import CommentItem1 from '~/assets/Waxxing/Comment-mb-1.png'
import CommentItem2 from '~/assets/Waxxing/Comment-mb-2.png'
import CommentItem3 from '~/assets/Waxxing/Comment-mb-3.png'

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
];

const CustomerComments = () => {
  return (
    <div className="bg-Waxxing-6 w-full">
        <div className="sm:flex block w-full max-w-[1400px] m-auto items-center py-10">
          <div className="sm:w-1/3 w-full sm:pl-4 pl-0 sm:text-start text-center sm:px-0 px-3">
            <h2 className='bg-gradientText font-bold sm:text-4xl text-2xl text-cosmetic p-2'>FEEDBACK</h2>
            <h2 className='font-bold sm:text-5xl text-2xl text-white pb-4'>KHÁCH HÀNG SAU LIỆU TRÌNH TRIỆT LÔNG TẠI LINH ANH</h2>
          </div>
          <div className="sm:w-2/3 w-full sm:ml-10 ml-0  sm:block hidden">
            <Image src={BannerCustomerComments} width={903} height={663} alt='Banner Spa'/>
          </div>
          <div className="sm:hidden block py-5">
          {commentItems.map((item, index) => (
            <div key={index}>
              <div className="relative pb-4">
                <Image
                  src={item.image}
                  alt={item.alt}
                  className='object-cover object-center'
                  width={712}
                  height={408}
                />
              </div>
            </div>
           ))}
          </div>
        </div>
      </div>
  )
}

export default CustomerComments;
