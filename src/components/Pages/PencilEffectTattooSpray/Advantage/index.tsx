'use client'
import React from 'react'
import Image, {StaticImageData} from 'next/image';
import Item2 from '~/assets/PencilEffectTattooSpray/item-2.png'
import Item3 from '~/assets/PencilEffectTattooSpray/item-3.png'
import Item4 from '~/assets/PencilEffectTattooSpray/item-4.png'
import Item5 from '~/assets/PencilEffectTattooSpray/item-5.png'

interface AdvantageItem {
  image: StaticImageData;
  title: string;
}

const advantageItems: AdvantageItem[] = [
  {
    image: Item2,
    title: 'Tạo đường viền cho hàng chân mày mềm mại và đẹp tự nhiên.',
  },
  {
    image: Item3,
    title: 'Có khả năng chịu được tác động môi trường và duy trì độ bền trên 5 năm.',
  },
  {
    image: Item4,
    title: 'Đảm bảo không đau, không xâm lấn, không cần thời gian nghỉ dưỡng.',
  },
];

const Advantage = () => {
  return (
    <div className="bg-BannerPencil-2 w-full">
      <div className="max-w-[1400px] m-auto py-5 px-10 flex items-center">
          <div className="w-3/5">
              <h1 className='bg-gradientText text-cosmetic font-bold text-5xl pb-4'>ƯU ĐIỂM</h1>
              <h2 className='text-white text-4xl font-bold pb-4'>PHUN MÀY HIỆU ÚNG BÚT CHÌ</h2>
              <div className="flex text-center gap-8">
              {advantageItems.map((item, index) => (
              <div key={index} className="">
                  <div className="h-[272px]">
                      <Image src={item.image} alt='Item Spa'/>
                  </div>
                  <p className='text-white text-justify'>{item.title}</p>
              </div>
              ))}
              </div>
          </div>
          <div className="w-2/5">
              <Image src={Item5} alt="Item Spa"/>
          </div>
      </div>
    </div>
  )
}

export default Advantage;
