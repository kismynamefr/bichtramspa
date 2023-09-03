import React from 'react'
import Image, {StaticImageData} from 'next/image';

import Item10 from '~/assets/PencilEffectTattooSpray/item-10.png'
import Item12 from '~/assets/PencilEffectTattooSpray/item-12.png'
import Item13 from '~/assets/PencilEffectTattooSpray/item-13.png'
import Item14 from '~/assets/PencilEffectTattooSpray/item-14.png'
import Item15 from '~/assets/PencilEffectTattooSpray/item-15.png'

interface ProcedureItem {
    link: StaticImageData,
    alt: string,
    step: string,
    title: string,
    description: string,
}

const procedureItem: Array<ProcedureItem> = [
    {
        link: Item10,
        alt: "Step 1",
        step: "BƯỚC 1",
        title: "THĂM KHÁM VÀ TƯ VẤN",
        description : "Khách hàng được Chuyên gia tư vấn tình trạng và chọn dáng mày ưng ý.",
    },
    {
        link: Item13,
        alt: "Step 2",
        step: "BƯỚC 2",
        title: "PHÁC HỌA DÁNG MÀY PHÙ HỢP",
        description : "Master phác thảo dáng mày đúng tỷ lệ khuôn mặt của bạn.",
    },
    {
        link: Item12,
        alt: "Step 3",
        step: "BƯỚC 3",
        title: "VỆ SINH Ủ TÊ",
        description : "KTV tiến hành vệ sinh và ủ tê cho khách hàng khoảng 15-30 phút.",
    },
    {
        link: Item14,
        alt: "Step 4",
        step: "BƯỚC 4",
        title: "TIẾN HÀNH PHUN XĂM CHÂN MÀY",
        description : "Chuyên gia sử dụng thiết bị phun xăm chuyên dụng đưa màu mực vào lớp thượng bì của chân mày.",
    },
    {
        link: Item15,
        alt: "Step 5",
        step: "BƯỚC 5",
        title: "KIỂM TRA VÀ DẶN DÒ",
        description : "Khách hàng được kiểm tra và dặn dò kỹ lưỡng cách chăm sóc sau khi phun xăm.",
    },
];

const Procedure = () => {
    const topItems = procedureItem.slice(0, 3); 
    const bottomItems = procedureItem.slice(3, 5); 
  
    return (
      <div className="bg-EyebrowSpray5 w-full">
        <div className="py-5 text-center max-w-[1400px] m-auto">
          <h1 className='bg-gradientText text-cosmetic font-bold text-5xl pb-4'>QUY TRÌNH PHUN XĂM CHÂN MÀY</h1>
          <h2 className='text-white text-3xl font-bold pb-4'>TẠI ...</h2>
        </div>
        <div className="grid grid-cols-3 gap-5 mt-5 max-w-[1400px] m-auto">
          {topItems.map((item, index) => (
            <div key={index}>
              <div className="relative flex">
                <Image
                  src={item.link}
                  alt={item.alt}
                  className='object-cover object-center'
                  width={833}
                  height={567}
                />
                <div className="w-44 bottom-16 left-[246px] absolute">
                  <p className='bg-gradientText text-cosmetic font-bold mt-2 text-lg'>{item.step}</p>
                  <p className='text-white mt-2 font-bold text-sm'>{item.title}</p>
                  <p className='text-white mt-2 text-sm'>{item.description}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
        <div className="grid grid-cols-2 gap-5 mt-5 max-w-[924px] m-auto">
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
                <div className="w-44 bottom-16 left-[248px] absolute">
                  <p className='bg-gradientText text-cosmetic font-bold mt-2 text-lg'>{item.step}</p>
                  <p className='text-white mt-2 font-bold text-sm'>{item.title}</p>
                  <p className='text-white mt-2 text-sm'>{item.description}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    )
  }
  
  export default Procedure;
  
