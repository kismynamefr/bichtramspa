'use client'
import React from 'react'
import Image, {StaticImageData} from 'next/image';
import EffectButton from '~/components/EffectButton';
import Item1 from '~/assets/ReduceBodyFat/Item-1.png'
import Item2 from '~/assets/ReduceBodyFat/Item-2.png'
import Item3 from '~/assets/ReduceBodyFat/Item-3.png'
import Item4 from '~/assets/ReduceBodyFat/Item-4.png'
import Item5 from '~/assets/ReduceBodyFat/Item-5.png'
import Item6 from '~/assets/ReduceBodyFat/Item-6.png'


interface ServiceItem {
    image: StaticImageData;
    alt: string,
    title: string;
    description: string;
}

const serviceItem: ServiceItem[] = [
    {
        image: Item1,
        alt: "Item Spa",
        title: 'GIẢM MỠ BỤNG',
        description: 'Giảm mỡ bụng giúp loại bỏ hoàn toàn mỡ nội tạng ở vùng bụng lấy lại vòng eo thon gọn.'
    },
    {
        image: Item2,
        alt: "Item Spa",
        title: 'GIẢM MỠ BẮP TAY',
        description: 'Giảm mỡ bắp tay là dịch vụ ứng dụng công nghệ cao giúp "vắt kiệt" mỡ bắp tay một cách nhanh chóng, an toàn.',
    },
    {
        image: Item3,
        alt: "Item Spa",
        title: 'GIẢM MỠ LƯNG',
        description: 'Giảm mỡ lưng bằng công nghệ giảm béo độc quyền chỉ có tại Bích Trâm, thấy được kết quả ngay lần đầu thực hiện.',

    },
    {
        image: Item4,
        alt: "Item Spa",
        title: 'GIẢM MỠ BỤNG DƯỚI',
        description: 'Giảm mỡ bụng dưới giúp loại bỏ hoàn toàn những ngấn mỡ khiến bạn mặc cảm, sẵn sàng diện mọi phong cách.',

    },
    {
        image: Item5,
        alt: "Item Spa",
        title: 'GIẢM MỠ ĐÙI',
        description: 'Mỡ đùi sẽ tan biến ngay với công nghệ giảm béo độc được chuyển giao từ Hoa Kỳ, trả lại vóc dáng thọn gọn.',

    },
    {
        image: Item6,
        alt: "Item Spa",
        title: 'CẤY CHỈ GIẢM BÉO',
        description: 'Cấy chỉ giảm béo là phương pháp châm cứu phương đông sử dụng chỉ sinh học chuyên dụng để giảm béo hiệu quả.',

    },
]

const Service = () => {
  return (
    <div className="bg-SkinTreatment-2 w-full">
      <div className="max-w-[1400px] m-auto py-20 px-10 text-center">
          <div className="w-full max-w-[700px] m-auto">
              <h2 className='text-white text-3xl font-bold pb-4'>CÁC DỊCH VỤ</h2>
              <h1 className='bg-gradientText text-cosmetic font-bold sm:text-5xl text-4xl pb-4'>GIẢM MỠ TOÀN THÂN</h1>
              <h2 className='text-white text-3xl font-bold pb-4'>CÔNG NGHỆ CAO TẠI BÍCH TRÂM</h2>
          </div>
          <div className="grid-cols-3 pt-10 gap-5 sm:grid block">
            {serviceItem.map((item, index) => (
                <div key={index} className="m-auto sm:pb-0 pb-5">
                    <div className="relative pb-5 boxImage overflow-hidden">
                        <Image
                        src={item.image}
                        alt={item.alt}
                        className="object-cover object-center rounded-2xl"
                        width={436}
                        height={355}
                        />
                        <div className="absolute -mt-20 w-full">
                            <p className="bg-gradientText text-cosmetic mt-2 font-bold text-3xl">{item.title}</p>
                        </div>
                        <div className="absolute w-full bg-content-OutstandingServices flex flex-col items-center sm:py-16 py-0">
                            <p className="bg-gradientText text-cosmetic mt-2 font-bold sm:text-2xl text-xl">{item.title}</p>
                            <p className="text-white text-justify sm:text-xl text-base max-w-xs m-auto sm:px-0 px-3">{item.description}</p>
                            <div className="sm:mb-0 mb-10">
                                <EffectButton href={'/'} title="TÌM HIỂU THÊM" />
                            </div>
                        </div>
                    </div>
                </div>
            ))}
          </div>
          
      </div>
    </div>
  )
}
export default Service;
