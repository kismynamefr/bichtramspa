'use client'
import React from 'react'
import Image, {StaticImageData} from 'next/image';
import EffectButton from '~/components/EffectButton';

import Item6 from '~/assets/EyebrowSpray/item-6.png'
import Item7 from '~/assets/EyebrowSpray/item-7.png'

interface DistinguishItem {
    image : StaticImageData,
    title : string,
    description1: string,
    description2: string,
    description3: string,
}

const distinguishItem: DistinguishItem[] = [
    {
      image: Item6,
      title: '',
      description1: 'Sử dụng đầu phun vi chạm, siêu nhỏ đi quả lắc tạo hạt trên bề mặt lông mày.',
      description2: 'Tạo dáng mày mềm mại theo khuôn đã định hình sẵn, sợi mày được phun rải hạt rất tỉ mỉ và mỏng mịn.',
      description3: 'Phù hợp với người có chân mày đã qua xử lý, người có sẵn khuôn lông mày nhưng nhạt màu, người muốn sở hữu chân mày sắc sảo, thời thượng.',
      
    },
    {
      image: Item7,
      title: 'ĐIÊU KHẮC CHÂN MÀY',
      description1: 'Sử dụng dao điêu khắc chuyên dụng siêu mảnh để khắc từng sợi lông mày như sợi lông mày thật.',
      description2: 'Tạo dáng mày theo khuôn mày tự nhiên của khách hàng, sợi mày điêu khắc đan xen tinh xảo với sợi mày thật.',
      description3: 'Phù hợp với người có chân mày nguyên thủy và chưa qua xử lý, người có lông mày thưa mỏng hoặc thiếu đầu - thiếu đuôi, người yêu thích kiểu chân mày mang vẻ đẹp tự nhiên.',
      
    },
]

const titleT = ['CÔNG NGHỆ', 'HIỆU QUẢ', 'ĐỐI TƯỢNG PHÙ HỢP']

const Distinguish = () => {
  return (
    <div className="max-w-[1400px] m-auto py-5 text-center">
      <div className="w-full max-w-[800px] m-auto py-5">
        <h2 className='text-white text-3xl font-bold pb-4'>PHÂN BIỆT</h2>
        <div className="flex gap-24 justify-center items-center pt-4">
          <h1 className='bg-gradientText text-cosmetic font-bold text-5xl pb-4'>PHUN XĂM CHÂN MÀY</h1>
          <h2 className='text-white text-3xl font-bold pb-4'>VÀ</h2>
          <h1 className='bg-gradientText text-cosmetic font-bold text-5xl pb-4'>ĐIÊU KHẮC CHÂN MÀY</h1>
        </div>
      </div>
      <div className="">
        <div className="flex gap-12 justify-center">
          {distinguishItem.map((item, index) => (
            <div key={index} className="">
              <Image src={item.image} alt='Item' width={476} height={330}/>
              <h1 className='bg-gradientText text-cosmetic font-bold text-3xl pb-4'>{item.title}</h1>
            </div>
          ))}
        </div>
        {titleT.map((title, index) => (
          <div key={index} className={`flex gap-4 border-b border-b-white px-2  py-5 ${index > 0 ? 'mt-4' : ''}`}>
            <div><h2 className='text-white text-3xl font-bold pb-4 w-[200px]'>{title}</h2></div>
            <div className="flex items-center gap-16">
              {distinguishItem.map((item, itemIndex) => (
                <p key={itemIndex} className='text-white text-lg text-justify pb-4 w-[476px]'>
                  {index === 0 ? item.description1 : index === 1 ? item.description2 : item.description3}
                </p>
              ))}
            </div>
          </div>
        ))}
      </div>
    </div>
  )
}

export default Distinguish;
