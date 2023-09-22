import React from 'react'
import Image, {StaticImageData} from 'next/image';
import EffectButton from '~/components/EffectButton';
import CustomerPicturesMobile from '../CustomerPicturesMobile';

import Item8 from  '~/assets/WhiteBath/Item-8.png'
import Item9 from  '~/assets/WhiteBath/Item-9.png'
import Item10 from '~/assets/WhiteBath/Item-10.png'
import Item11 from '~/assets/WhiteBath/Item-11.png'
import Item12 from '~/assets/WhiteBath/Item-12.png'
import Item13 from '~/assets/WhiteBath/Item-13.png'

interface ProcedureItem {
    link: StaticImageData,
    alt: string,
    age: string,
    title: string,
    description: string,
}

const procedureItem: Array<ProcedureItem> = [
    {
        link: Item8,
        alt: "Item Spa",
        age: "(25 TUỔI)",
        title: "CHỊ HUYỀN TRANG",
        description : "TẮM TRẮNG LUXURY YOUNG BODY BẬT 3 TONE",
    },
    {
        link: Item9,
        alt: "Item Spa",
        age: "(28 TUỔI)",
        title: "CHỊ BÍCH HÂN",
        description : "TẮM TRẮNG PHI THUYỀN BẬT 4 TONE",
    },
    {
        link: Item10,
        alt: "Item Spa",
        age: "(30 TUỔI)",
        title: "CHỊ HỒNG OANH",
        description : "TẮM TRẮNG COLLAGEN BODY BẬT LIỀN 3 TONE",
    },
    {
        link: Item11,
        alt: "Item Spa",
        age: "(31 TUỔI)",
        title: "CHỊ NGÂN BÌNH",
        description : "TẮM TRẮNG COLLAGEN BODY BẬT 5 TONE",
    },
    {
        link: Item12,
        alt: "Item Spa",
        age: "(32 TUỔI)",
        title: "CHỊ YẾN NHI",
        description : "TẮM TRẮNG TOÀN THÂN BẬT LIỀN 3 TONE",
    },
];

const CustomerPictures = () => {
    const topItems = procedureItem.slice(0, 3); 
    const bottomItems = procedureItem.slice(3, 5); 
  
    return (
      <div className="sm:bg-WhiteBath-4 bg-WhiteBath-4-MB w-full">
        <div className="py-5 text-center max-w-[1400px] m-auto">
          <h2 className='text-white text-5xl font-bold pb-4'>HƠN 1 TRIỆU KHÁCH HÀNG</h2>
          <h1 className='bg-gradientText text-cosmetic font-bold text-3xl pb-4'>TẮM TRẮNG THÀNH CÔNG TẠI BÍCH TRÂM</h1>
          <div className="flex justify-center sm:px-0 px-12">
            <Image src={Item13} width={520} height={239} alt='Item 13 Spa'/>
          </div>
        </div>
      <div className="sm:block hidden">
        <div className="grid grid-cols-2 gap-5 mt-5 max-w-[924px] m-auto pb-36">
          {bottomItems.map((item, index) => (
            <div key={index} className='m-auto'>
              <div className="relative flex">
                <Image
                  src={item.link}
                  alt={item.alt}
                  className='object-cover object-center'
                  width={833}
                  height={567}
                />
               <div className="w-full max-w-sm text-center -bottom-32 absolute">
                  <p className='text-white mt-2 font-bold text-3xl'>{item.title}</p>
                  <p className='text-white font-bold mt-2 text-2xl'>{item.age}</p>
                  <p className='bg-gradientText text-cosmetic font-bold mt-2 text-2xl'>{item.description}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
        <div className="grid grid-cols-3 gap-5 mt-5 max-w-[1400px] m-auto pb-36">
          {topItems.map((item, index) => (
            <div key={index}>
              <div className="relative ">
                <Image
                  src={item.link}
                  alt={item.alt}
                  className='object-cover object-center'
                  width={833}
                  height={567}
                />
               <div className="w-full max-w-sm text-center -bottom-32 absolute">
                  <p className='text-white mt-2 font-bold text-3xl'>{item.title}</p>
                  <p className='text-white font-bold mt-2 text-2xl'>{item.age}</p>
                  <p className='bg-gradientText text-cosmetic font-bold mt-2 text-2xl'>{item.description}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
      <CustomerPicturesMobile/>
       <div className="text-center pb-10">
            <EffectButton href={'/'} title='ĐĂNG KÝ NGAY'/>
       </div>
      </div>
    )
  }
  
  export default CustomerPictures;
  
