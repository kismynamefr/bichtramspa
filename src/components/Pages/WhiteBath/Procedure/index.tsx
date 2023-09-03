'use client'
import React from 'react'
import Image, {StaticImageData} from 'next/image';
import EffectButton from '~/components/EffectButton';

import Item14 from '~/assets/WhiteBath/Item-14.png'
import Item15 from '~/assets/WhiteBath/Item-15.png'
import Item16 from '~/assets/WhiteBath/Item-16.png'
import Item17 from '~/assets/WhiteBath/Item-17.png'
import Item18 from '~/assets/WhiteBath/Item-18.png'
import Item19 from '~/assets/WhiteBath/Item-19.png'
import Item20 from '~/assets/WhiteBath/Item-20.png'


interface PopularityItem {
    image: StaticImageData;
    alt: string,
    title: string;
    description: string,
}

const popularityItem: PopularityItem[] = [
    {
        image: Item15,
        alt: "Item Spa",
        title: 'CÔNG NGHỆ TẮM TRẮNG HIỆN ĐẠI HÀNG ĐẦU',
        description: 'Luxury Young Body được chuyển giao độc quyền từ Châu Âu, được chứng nhận bởi FDA (Hoa Kỳ).',
    },
    {
        image: Item16,
        alt: "Item Spa",
        title: 'TIẾT KIỆM THỜI GIAN VÀ CHI PHÍ',
        description: 'Dưỡng trắng nhanh gấp 10 lần so với các phương pháp tắm trắng thông thường.',
    },
    {
        image: Item17,
        alt: "Item Spa",
        title: 'HIỆU QUẢ VƯỢT TRỘI',
        description: 'Làn da bật 3 – 5 tone rõ rệt chỉ sau buổi đầu tiên. Cam kết không bắt nắng, không hồi tone.',
    },
    {
        image: Item18,
        alt: "Item Spa",
        title: 'AN TOÀN TUYỆT ĐỐI',
        description: 'Máy móc hiện đại, nguyên liệu thiên nhiên nhập khẩu, không gây kích ứng, không bào mòn da.',
    },
    {
        image: Item19,
        alt: "Item Spa",
        title: 'DỊCH VỤ CHUẨN 5 SAO',
        description: 'Không gian sang trọng, thoải mái, riêng tư, đội ngũ bác sĩ chuyên viên tư vấn tận tâm chuyên nghiệp.',
    },
    {
        image: Item20,
        alt: "Item Spa",
        title: 'QUY TRÌNH CÁ NHÂN HÓA',
        description: 'Bác sĩ trực tiếp thăm khám và theo dõi, tư vấn liệu trình phù hợp với từng khách hàng.',
    },
]

const Procedure = () => {
    return (
      <div className="bg-EyebrowSpray2 w-full">
        <div className="max-w-[1400px] m-auto py-5 px-10 text-center">
        <div className="py-5 text-center max-w-[1400px] m-auto">
            <h1 className='bg-gradientText text-cosmetic font-bold sm:text-5xl text-3xl pb-4'>6 ƯU ĐIỂM</h1>
            <h1 className='bg-gradientText text-cosmetic font-bold sm:text-5xl text-3xl pb-4'>KHI TẮM TRẮNG</h1>
            <h2 className='text-white sm:text-3xl text-2xl font-bold pb-4'>TẠI THẨM MỸ QUỐC TẾ ...</h2>
        </div>
          <div className="sm:grid block grid-cols-3 gap-5">
            {popularityItem.map((item, index) => (
              <div key={index} className='m-auto sm:pb-0 pb-14'>
                <div className="relative pb-40">
                  <Image
                    src={item.image}
                    alt={item.alt}
                    className='object-cover object-center rounded-2xl'
                    width={350}
                    height={432}
                  />
                  <div className="absolute w-full">
                    <p className='bg-gradientText text-cosmetic mt-2 font-bold text-2xl'>{item.title}</p>
                    <p className='text-white mt-2 font-bold text-base'>{item.description}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    )
  }
  
  export default Procedure;