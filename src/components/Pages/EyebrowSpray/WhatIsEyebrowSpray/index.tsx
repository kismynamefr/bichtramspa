'use client'
import React from 'react'
import Image, {StaticImageData} from 'next/image';
import EffectButton from '~/components/EffectButton';
import Distinguish from '~/components/Pages/EyebrowSpray/Distinguish';

import Item1 from '~/assets/EyebrowSpray/item-1.png'
import Item2 from '~/assets/EyebrowSpray/item-2.png'
import Item3 from '~/assets/EyebrowSpray/item-3.png'
import Item4 from '~/assets/EyebrowSpray/item-4.png'
import Item5 from '~/assets/EyebrowSpray/item-5.png'
import Hot from '~/assets/Header/hot.png'


interface PopularityItem {
    image: StaticImageData;
    alt: string,
    title: string;
}

const popularityItem: PopularityItem[] = [
    {
        image: Item1,
        alt: "Item Spa",
        title: 'PHUN MÀY TÁN BỘT HÀN QUỐC',
    },
    {
        image: Item2,
        alt: "Item Spa",
        title: 'PHUN MÀY VI CHẠM',
    },
    {
        image: Item3,
        alt: "Item Spa",
        title: 'PHUN MÀY OMBRE',
    },
    {
        image: Item4,
        alt: "Item Spa",
        title: 'PHUN MÀY TÁN BỘT',
    },
    {
        image: Item5,
        alt: "Item Spa",
        title: 'PHUN MÀY HIỆu ỨNG BÚT CHÌ',
    },
]

const WhatIsWhatIsEyebrowSpray = () => {
  return (
    <div className="bg-EyebrowSpray2 w-full">
      <div className="max-w-[1400px] m-auto py-5 px-10 text-center">
          <div className="w-full max-w-[700px] m-auto">
              <h1 className='bg-gradientText text-cosmetic font-bold text-5xl pb-4'>PHUN XĂM CHÂN MÀY </h1>
              <h2 className='text-white text-3xl font-bold pb-4'>LÀ GÌ?</h2>
              <p className='text-white text-justify text-base pb-4'>Phun xăm chân mày sử dụng thiết bị chuyên dụng có gắn một đầu kim tròn hoặc dẹt cực mảnh để lấy mực và phẩy mực lên khuôn chân mày đã thiết kế trước đó. Đây là kỹ thuật thẩm mỹ ít xâm lấn nhưng mang lại hiệu quả cao, giúp bạn sở hữu hàng chân mày thanh tú, sắc nét, tôn lên thần thái và vẻ đẹp của gương mặt.</p>
          </div>
          <div className="grid grid-cols-3">
            <div className="text-start mt-10">
                <h2 className='text-white text-3xl font-bold pb-4'>CÁC PHƯƠNG PHÁP</h2>
                <h2 className='text-white text-3xl font-bold pb-4'>PHUN CHÂN MÀY</h2>
                <h1 className='bg-gradientText text-cosmetic font-bold text-5xl pb-4'>ĐƯỢC ƯA</h1>
                <h1 className='bg-gradientText text-cosmetic font-bold text-5xl pb-4'>CHUỘNG NHẤT</h1>
            </div>
            {popularityItem.map((item, index) => (
                <div key={index} className='m-auto'>
                <div className="relative pb-5">
                    <Image
                        src={item.image}
                        alt={item.alt}
                        className='object-cover object-center'
                        width={460}
                        height={375}
                    />
                    <div className="absolute -mt-20 w-full">
                        <p className='text-white mt-2 font-bold text-sm'>{item.title}</p>
                        <EffectButton href={'/'} title='TÌM HIỂU THÊM'/>
                    </div>
                </div>
            </div>
            ))}
          </div>
      </div>
      <Distinguish/>
    </div>
  )
}
export default WhatIsWhatIsEyebrowSpray;
