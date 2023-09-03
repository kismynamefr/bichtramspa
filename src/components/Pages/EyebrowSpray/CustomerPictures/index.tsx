'use client'
import React from 'react'
import Image, {StaticImageData} from 'next/image';

import Item13 from '~/assets/EyebrowSpray/item-13.png'
import Item14 from '~/assets/EyebrowSpray/item-14.png'
import Item15 from '~/assets/EyebrowSpray/item-15.png'
import Item16 from '~/assets/EyebrowSpray/item-16.png'



interface PopularityItem {
    image: StaticImageData;
    alt: string,
    title: string,
    description: string,
}

const popularityItem: PopularityItem[] = [
    {
        image: Item13,
        alt: "Item Spa",
        title: "CHỊ NGỌC LINH - 29 TUỔI",
        description: "Wow, không tin được là chân mày bị phun hỏng trước kia đã được các master bên Linh Anh chỉnh sửa ngoạn mục vậy luôn. Like mạnh nha!",
    },
    {
        image: Item14,
        alt: "Item Spa",
        title: "CHỊ HỒNG GẤM - 31 TUỔI",
        description: "Từ ngày phun chân mày phong thủy bên Linh Anh về, công việc của chị thông thuận lắm, cảm ơn Linh Anh nhé!",
    },
    {
        image: Item15,
        alt: "Item Spa",
        title: "ANH HẢI ĐĂNG - 35 TUỔI",
        description: "Uớc biết Linh Anh sớm hơn để qua phun mày phong thủy, chuyện kinh doanh của Đăng cải thiện rất nhiều, tuyệt vời.",
    },
    {
        image: Item16,
        alt: "Item Spa",
        title: "CHỊ HỒNG HẠNH - 40 TUỔI",
        description: "Chân mày chị bị trổ đỏ nhìn sợ luôn, may mắn được bạn giới thiệu qua Linh Anh phun lại nên giờ đi đâu ai cũng khen",
    },
]

const CustomerPictures = () => {
    return (
      <div className="bg-EyebrowSpray6 w-full">
        <div className="max-w-[1400px] m-auto py-20 px-10 text-center">
            <div className="w-full max-w-[700px] m-auto">
                <h1 className='bg-gradientText text-cosmetic font-bold text-5xl pb-4'>KHÁCH HÀNG ĐÃ NÓI GÌ</h1>
                <h2 className='text-white text-4xl font-bold pb-4'>SAU KHI PHUN XĂM CHÂN MÀY</h2>
                <h2 className='text-white text-3xl font-bold pb-4'>TẠI LINH ANH</h2>
            </div>
            <div className="flex flex-wrap justify-center">
              {popularityItem.map((item, index) => (
                  <div key={index} className="w-[511px] pb-5 px-4">
                      <Image
                          src={item.image}
                          alt={item.alt}
                          className='object-cover object-center rounded-2xl'
                          width={511}
                          height={377}
                      />
                      <div className="pt-5">
                          <p className='bg-gradientText text-cosmetic font-bold text-2xl pb-4'>{item.title}</p>
                          <p className='text-white text-base font-bold pb-4'>{item.description}</p>
                      </div>
                  </div>
              ))}
            </div>
        </div>
      </div>
    )
  }
  
  export default CustomerPictures;
  