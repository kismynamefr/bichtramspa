'use client'
import React from 'react'
import Image, {StaticImageData} from 'next/image';

import TitleCenter from '~/assets/Waxxing/Title-1.png'
import Item7 from '~/assets/Waxxing/Item-7.png'
import Item8 from '~/assets/Waxxing/Item-8.png'
import Item9 from '~/assets/Waxxing/Item-9.png'
import Item10 from '~/assets/Waxxing/Item-10.png'
import Item7MB from '~/assets/Waxxing/Item-7-mb.png'
import Item8MB from '~/assets/Waxxing/Item-9-mb.png'
import Item9MB from '~/assets/Waxxing/Item-8-mb.png'
import Item10MB from '~/assets/Waxxing/Item-10-mb.png'


interface AdvantageItem {
    imageSrc: StaticImageData;
    imageMobile : StaticImageData;
    alt: string;
    title: string;
}

const advantageItem: AdvantageItem[] = [
    {
        imageSrc: Item7,
        imageMobile :Item7MB,
        alt: 'Item Spa',
        title: 'PHƯƠNG PHÁP LỖI THỜI KHIẾN DA ĐAU RÁT, SẦN SÙI MẤT THẨM MỸ',
    },
    {
        imageSrc: Item8,
        imageMobile :Item8MB,
        alt: 'Item Spa',
        title: 'KHÔNG TRỊ TẬN GỐC KHIẾN LÔNG MỌC NHANH VÀ CỨNG HƠN',
    },
    {
        imageSrc: Item9,
        imageMobile :Item9MB,
        alt: 'Item Spa',
        title: 'DỄ BỊ VIÊM NANG LÔNG, LÔNG MỌC NGƯỢC',
    },
    {
        imageSrc: Item10,
        imageMobile :Item10MB,
        alt: 'Item Spa',
        title: 'VÙNG DA NÁCH VÀ VÙNG BIKINI THÂM XỈN KHIẾN BẠN TỰ TI',
    },
];

const Method = () => {
    const firstColumn = advantageItem.slice(0, 2);
    const secondColumn = advantageItem.slice(2);
  
    return (
      <div className="bg-boxtimeSpaColor w-full">
        <div className="py-5 text-center max-w-[1400px] m-auto">
          <div className="flex justify-center sm:px-0 px-12">
            <Image src={TitleCenter} width={727} height={228} alt='Item Spa' />
          </div>
        </div>
        <div className="w-full max-w-[1400px] m-auto flex sm:flex-nowrap flex-wrap sm:justify-normal justify-around">
          <div className="flex flex-col mt-10 m-auto gap-20">
            {firstColumn.map((item, index) => (
              <div key={index} className='w-full '>
                <div className="relative flex">
                  <div className="">
                    <Image src={item.imageSrc} width={1142} height={420} alt={item.alt} className='sm:block hidden'/>
                    <Image src={item.imageMobile} width={1142} height={420} alt={item.alt} className='sm:hidden block'/>
                  </div>
                  <div className='absolute sm:right-0 right-1 sm:w-[440px] w-[220px] sm:top-20 top-9'>
                    <h3 className="text-white sm:text-2xl text-xs font-bold mt-3">{item.title}</h3>
                  </div>
                </div>
              </div>
            ))}
          </div>
          <div className="flex flex-col  m-auto gap-14 sm:mt-52 mt-14">
            {secondColumn.map((item, index) => (
              <div key={index} className='w-full '>
              <div className="relative flex">
                <div className="">
                  <Image src={item.imageSrc} width={1142} height={420} alt={item.alt} className='sm:block hidden'/>
                  <Image src={item.imageMobile} width={1142} height={420} alt={item.alt} className='sm:hidden block'/>
                </div>
                <div className='absolute sm:left-10 left-6 sm:w-[400px] w-[220px] sm:top-20 top-9'>
                  <h3 className="text-white sm:text-2xl text-xs font-bold mt-3">{item.title}</h3>
                </div>
              </div>
            </div>
            ))}
          </div>
        </div>
      </div>
    );
  };
  
  export default Method;
