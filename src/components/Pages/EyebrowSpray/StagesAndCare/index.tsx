'use client'
import React from 'react'
import Image, {StaticImageData} from 'next/image';

import Stages1 from '~/assets/EyebrowSpray/stages-1.png'
import Stages2 from '~/assets/EyebrowSpray/stages-2.png'
import Stages3 from '~/assets/EyebrowSpray/stages-3.png'
import Stages4 from '~/assets/EyebrowSpray/stages-4.png'
import Stages5 from '~/assets/EyebrowSpray/stages-5.png'
import Stages6 from '~/assets/EyebrowSpray/stages-5.png'


interface PopularityItem {
    image: StaticImageData;
    alt: string,
    title: string;
    description: string;
}

const popularityItem: PopularityItem[] = [
    {
        image: Stages1,
        alt: "Stages Spa",
        title: 'NGÀY 1',
        description: 'Màu lên sắc nét. Hơi rát, đỏ nhẹ. Kiêng nước và mỹ phẩm trong 3 ngày đầu sau khi phun xăm.',
    },
    {
        image: Stages2,
        alt: "Stages Spa",
        title: 'NGÀY 2',
        description: 'Màu đậm hơn so với khi mới làm xong. Bôi thuốc và vệ sinh mày theo chỉ dẫn của chuyên viên...',
    },
    {
        image: Stages3,
        alt: "Stages Spa",
        title: 'NGÀY 3-7',
        description: 'Mày đang kết mài. Hạn chế ăn thực phẩm gây sưng mủ: thịt bò, rau muống, hải sản,...',
    },
    {
        image: Stages4,
        alt: "Stages Spa",
        title: 'NGÀY 7-10',
        description: 'Mày bắt đầu bong. Thời gian bong tùy theo cơ địa. Để mày bong tự nhiên, không dùng tay gỡ,...',
    },
    {
        image: Stages5,
        alt: "Stages Spa",
        title: 'NGÀY 10-20',
        description: 'Da mày còn non. Màu lên chưa đều. Uống nhiều nước và bổ sung vitamin để màu lên chuẩn...',
    },
    {
        image: Stages6,
        alt: "Stages Spa",
        title: 'NGÀY 20-45',
        description: 'Da hồi phục. Màu bắt đầu ổn định. Khách hàng quay lại kiểm tra sau 45 ngày.',
    },
]

const StagesAndCare = () => {
  return (
    <div className="bg-EyebrowSpray7 w-full">
      <div className="max-w-[1400px] m-auto py-5 px-10 text-center">
          <div className="w-full max-w-[700px] m-auto">
              <h1 className='bg-gradientText text-cosmetic font-bold text-5xl pb-4'>CÁC GIAI ĐOẠN VÀ CHĂM SÓC</h1>
              <h2 className='text-white text-3xl font-bold pb-4'>SAU KHI PHUN CHÂN MÀY</h2>
          </div>
          <div className="grid grid-cols-3">
            {popularityItem.map((item, index) => (
                <div key={index} className='m-auto'>
                <div className="relative pb-56">
                    <Image
                        src={item.image}
                        alt={item.alt}
                        className='object-cover object-center'
                        width={204}
                        height={204}
                    />
                    <div className="absolute mt-4 w-full border border-white p-2 rounded-xl">
                        <p className='text-white mt-2 font-bold text-2xl'>{item.title}</p>
                        <p className='text-white mt-2 text-base'>{item.description}</p>
                    </div>
                </div>
            </div>
            ))}
          </div>
      </div>
    </div>
  )
}
export default StagesAndCare;
