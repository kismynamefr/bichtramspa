'use client'
import React from 'react'
import Image from 'next/image';
import Item1 from '~/assets/PencilEffectTattooSpray/item-1.png'

const WhatIsPencilEffectTattooSpray = () => {
  return (
    <div className="bg-BannerPencil-1 w-full">
      <div className="max-w-[1400px] m-auto py-5 px-10 flex items-center">
          <div className="w-2/4">
              <h2 className='text-white text-5xl font-bold pb-4'>PHUN MÀY</h2>
              <h2 className='text-white text-5xl font-bold pb-4'>HIỆU ỨNG BÚT</h2>
              <h1 className='bg-gradientText text-cosmetic font-bold text-2xl pb-4'>LÀ GÌ ?</h1>
              <p className='text-white text-base pb-4'>Phun mày hiệu ứng bút chì, hay còn được gọi là phun mày bột bút chì, một kỹ thuật phun mày cao cấp và hiện đại tạo ra hàng chân mày nhẹ nhàng với màu sắc tinh tế, tự nhiên theo đúng khuôn của lông mày thật. Kiểu dáng lông mày được tạo hình cũng rất đa dạng tùy thuộc vào sở thích hay khuôn mặt của mỗi người.</p>
          </div>
          <div className="w-2/4">
              <Image src={Item1} alt="Item Spa"/>
          </div>
      </div>
    </div>
  )
}
export default WhatIsPencilEffectTattooSpray;
