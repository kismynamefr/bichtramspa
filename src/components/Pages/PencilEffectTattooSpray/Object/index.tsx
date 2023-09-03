import React from 'react'
import Image, {StaticImageData} from 'next/image';

import Item6 from '~/assets/PencilEffectTattooSpray/item-6.png'
import Item7 from '~/assets/PencilEffectTattooSpray/item-7.png'
import Item8 from '~/assets/PencilEffectTattooSpray/item-8.png'
import Item9 from '~/assets/PencilEffectTattooSpray/item-9.png'

interface ObjectItem {
    image: StaticImageData;
    title: string;
}

const objectItem: ObjectItem[] = [
    {
      image: Item6,
      title: 'Lông mày thưa, nhạt màu cần tạo đường nét sắc sảo hơn.',
    },
    {
      image: Item7,
      title: 'Từng phun xăm hỏng, mày trổ xanh trổ đỏ.',
    },
    {
      image: Item8,
      title: 'Muốn lông mày có màu sắc lạ nhưng không thích nhuộm lông mày.',
    },
    {
      image: Item9,
      title: 'Những ai muốn tiết kiệm thời gian trang điểm.',
    },
];

const Object = () => {
  return (
    <div className="bg-BannerPencil-3 w-full">
        <div className="max-w-[1400px] m-auto py-5">
            <div className="text-center">
                <h1 className='bg-gradientText text-cosmetic font-bold text-5xl pb-4'>ĐỐI TƯỢNG</h1>
                <h2 className='text-white text-3xl font-bold pb-4'>NÊN PHUN MÀY HIỆU ỨNG BÚT CHÌ</h2>
            </div>
            <div className="flex gap-5">
                {objectItem.map((item, index) => (
                <div key={index} className="">
                    <div className="">
                        <Image src={item.image} alt='Item Spa' className='w-[335px] h-[465px]'/>
                        <p className='text-white ml-8 w-[250px] relative -top-24 text-sm'>{item.title}</p>
                    </div>
                </div>
                ))}
            </div>
        </div>
    </div>
  )
}

export default Object