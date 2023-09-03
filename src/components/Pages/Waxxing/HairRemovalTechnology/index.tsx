'use client'
import React from 'react'
import Image, {StaticImageData} from 'next/image';
import EffectButton from '~/components/EffectButton';

import Item20 from '~/assets/Waxxing/Item-20.png'
import Item11 from '~/assets/Waxxing/Item-11.png'
import Item12 from '~/assets/Waxxing/Item-12.png'
import Item13 from '~/assets/Waxxing/Item-13.png'


interface TechnologyItem {
    image: StaticImageData;
    alt: string,
    title: string;
    description: string,
}

const technologyItem:TechnologyItem[] = [
    {
        image: Item11,
        alt: "Item Spa",
        title: 'TRIỆT LÔNG HIỆU QUẢ GẤP 5 LẦN',
        description: 'Sự kết hợp giữa ánh sáng IPL và RF phá hủy đến 99% nang lông, ngăn lông mọc trở lại.',
    },
    {
        image: Item12,
        alt: "Item Spa",
        title: 'VÙNG DA SAU TRIỆT LÔNG TRẮNG SÁNG, LÁNG MỊN',
        description: 'Công nghệ kích thích tăng sinh collagen giúp khử thâm, làm sáng da vùng triệt.',
    },
    {
        image: Item13,
        alt: "Item Spa",
        title: 'HỖ TRỢ ĐIỀU TRỊ VIÊM DA, VIÊM NANG',
        description: 'Se khít lỗ chân lông giúp điều trị viêm nang lông, lông mọc ngược, ngăn ngừa mùi cơ thể.',
    },
]

const HairRemovalTechnology = () => {
    return (
      <div className="bg-Waxxing-3 sm:bg-Waxxing-3-MB w-full">
        <div className="max-w-[1400px] m-auto py-5 px-10 text-center">
        <div className="py-5 text-center max-w-[1400px] m-auto">
            <h2 className='text-white sm:text-3xl text-2xl font-bold pb-4'>TRIỆT LÔNG VĨNH VIỄN VỚI CÔNG NGHỆ ÁNH SÁNG</h2>
            <h1 className='bg-gradientText text-cosmetic font-bold sm:text-5xl text-3xl pb-4'>NANO LIGHT</h1>
        </div>
        <div className="sm:hidden block">
          <Image src={Item20} alt='Banner Mobile'/>
        </div>
          <div className="sm:flex block sm:mt-[500px] mt-0 gap-5">
            {technologyItem.map((item, index) => (
              <div key={index} className='m-auto pb-14'>
                <div className="relative">
                  <Image
                    src={item.image}
                    alt={item.alt}
                    className='object-cover object-center rounded-2xl'
                    width={860}
                    height={774}
                  />
                  <div className="absolute w-full sm:-mt-[160px] -mt-[140px]">
                    <p className='text-white mt-2 font-bold text-lg sm:max-w-[400px] max-w-[320px] m-auto'>{item.title}</p>
                    <p className='text-white !mt-2 font-bold sm:text-base text-sm sm:max-w-[400px] max-w-[320px] m-auto'>{item.description}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
          <div className="text-center py-5">
            <EffectButton href={'/'} title='ĐĂNG KÝ NHẬN TƯ VẤN'/>
          </div>
        </div>
      </div>
    )
  }
  
  export default HairRemovalTechnology;