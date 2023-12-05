'use client'
import React from 'react'
import Image, {StaticImageData} from 'next/image';
import EffectButton from '~/components/EffectButton';

import Item14 from '~/assets/Waxxing/Item-14.png'
import Item15 from '~/assets/Waxxing/Item-15.png'
import Item16 from '~/assets/Waxxing/Item-16.png'
import Item17 from '~/assets/Waxxing/Item-17.png'
import Item18 from '~/assets/Waxxing/Item-18.png'
import Item19 from '~/assets/Waxxing/Item-19.png'


interface PopularityItem {
    image: StaticImageData;
    alt: string,
    title: string;
    description: string,
}

const popularityItem: PopularityItem[] = [
    {
        image: Item14,
        alt: "Item Spa",
        title: 'CHỊ KIỀU (25 TUỔI)',
        description: 'TRIỆT LÔNG VĨNH VIỄN VÙNG NÁCH SAU 3 BUỔI',
    },
    {
      image: Item15,
      alt: "Item Spa",
      title: 'CHỊ LY (27 TUỔI)',
      description: 'TRIỆT LÔNG NÁCH, TRỊ VIÊM NANG LÔNG',
    },
    {
        image: Item16,
        alt: "Item Spa",
        title: 'CHỊ CẨM (29 TUỔI)',
        description: 'SAU 4 BUỔI TRIỆT LÔNG TOÀN THÂN',
    },
    {
        image: Item17,
        alt: "Item Spa",
        title: 'CHỊ HÂN (32 TUỔI)',
        description: 'TRỊ LÔNG VÙNG BIKINI',
    },
    {
        image: Item18,
        alt: "Item Spa",
        title: 'CHỊ NGÂN (26 TUỔI)',
        description: 'TRIỆT LÔNG TAY, LÔNG CHÂN',
    },
    {
        image: Item19,
        alt: "Item Spa",
        title: 'CHỊ YẾN (33 TUỔI)',
        description: 'TRIỆT LÔNG MẶT, RIA MÉP',
    },
   
]

const ResultsChange = () => {
    return (
      <div className="bg-boxtimeSpaColor  w-full sm:block hidden">
        <div className="max-w-[1400px] m-auto py-5 px-10 text-center">
        <div className="py-5 text-center max-w-[1400px] m-auto">
            <h2 className='text-white sm:text-3xl text-2xl font-bold pb-4'>KẾT QUẢ</h2>
            <h1 className='bg-gradientText text-cosmetic font-bold sm:text-5xl text-3xl pb-4'>THAY ĐỔI RÕ RỆT</h1>
            <h1 className='bg-gradientText text-cosmetic font-bold sm:text-3xl text-2xl pb-4'>CHỈ SAU BUỔI ĐẦU TIÊN</h1>
        </div>
          <div className="sm:grid block grid-cols-3 gap-5">
            {popularityItem.map((item, index) => (
              <div key={index} className='m-auto pb-14'>
                <div className="relative">
                  <Image
                    src={item.image}
                    alt={item.alt}
                    className='object-cover object-center rounded-2xl'
                    width={820}
                    height={881}
                  />
                  <div className="absolute w-full -mt-10">
                    <p className='text-white mt-2 font-bold text-2xl'>{item.title}</p>
                    <p className='bg-gradientText text-cosmetic mt-2 font-bold text-xl'>{item.description}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
          <div className="text-center py-5">
            <EffectButton href={'/'} title='ĐĂNG KÝ TRIỆT LÔNG 149K'/>
          </div>
        </div>
      </div>
    )
  }
  
  export default ResultsChange;