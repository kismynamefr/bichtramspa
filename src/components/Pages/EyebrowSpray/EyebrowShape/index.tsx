'use client'
import React from 'react'
import Image, {StaticImageData} from 'next/image';

import Item8 from '~/assets/EyebrowSpray/item-8.png'
import Item9 from '~/assets/EyebrowSpray/item-9.png'
import Item10 from '~/assets/EyebrowSpray/item-10.png'
import Item11 from '~/assets/EyebrowSpray/item-11.png'
import Item12 from '~/assets/EyebrowSpray/item-12.png'

interface EyebrowShapeItem {
  image: StaticImageData;
  alt: string,
  title: string;
}

const eyebrowShapeItem: EyebrowShapeItem[] = [
  {
      image: Item8,
      alt: "Item Spa",
      title: 'DÁNG MÀY LÁ LIỄU',
  },
  {
      image: Item9,
      alt: "Item Spa",
      title: 'DÁNG MÀY CHỮ V',
  },
  {
      image: Item10,
      alt: "Item Spa",
      title: 'DÁNG MÀY NGÀI (MÀY TẦM)',
  },
  {
      image: Item11,
      alt: "Item Spa",
      title: 'DÁNG MÀY TRĂNG NON',
  },
  {
      image: Item12,
      alt: "Item Spa",
      title: 'DÁNG MÀY NGANG',
  },
]

const EyebrowShape = () => {
  return (
    <div className="bg-EyebrowSpray3 w-full">
      <div className="max-w-[1400px] m-auto p-10 ">
          <div className="w-full max-w-[700px]">
              <h2 className='text-white text-3xl font-bold pb-4'>CÁC DÁNG MÀY</h2>
              <h1 className='bg-gradientText text-cosmetic font-bold text-5xl pb-4'>HỢP PHONG THỦY</h1>
              <p className='text-white text-justify text-base pb-4'>Theo quan niệm Á Đông, mỗi đường nét trên gương mặt đều liên quan mật thiết đến vận mệnh. Việc sở hữu hàng chân mày hợp nhân tướng, phong thủy sẽ giúp bạn "thay sắc đổi vận", thu hút may mắn và thăng hoa hơn về mọi mặt trong cuộc sống như tình duyên, công việc, tài lộc...</p>
          </div>
          <div className="grid grid-cols-3 w-[700px] ml-28">
            {eyebrowShapeItem.slice(0, 2).map((item, index) => (
              <div key={index}>
                <div className="relative pb-5">
                  <Image
                    src={item.image}
                    alt={item.alt}
                    className='object-cover object-center'
                    width={176}
                    height={176}
                  />
                    <p className='text-white mt-2 font-bold text-sm text-center w-[160px]'>{item.title}</p>
                </div>
              </div>
            ))}
          </div>
          <div className="grid grid-cols-3 w-[700px]">
            {eyebrowShapeItem.slice(2).map((item, index) => (
              <div key={index}>
                <div className="relative pb-5">
                  <Image
                    src={item.image}
                    alt={item.alt}
                    className='object-cover object-center'
                    width={176}
                    height={176}
                  />
                    <p className='text-white mt-2 font-bold text-sm text-center w-[160px]'>{item.title}</p>
                </div>
              </div>
            ))}
          </div>

      </div>
    </div>
  )
}
export default EyebrowShape;
