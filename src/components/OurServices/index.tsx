import React from 'react';
import Link from 'next/link'
import Image, { type StaticImageData } from "next/image";
import Service1 from '~/assets/OurServices/service-1.png';
import Service2 from '~/assets/OurServices/service-2.png';
import Service3 from '~/assets/OurServices/service-3.png';
import Service4 from '~/assets/OurServices/service-4.png';
import Service5 from '~/assets/OurServices/service-5.png';

interface ServiceItem {
  id: number;
  title: string;
  content: string;
  image: StaticImageData;
}

const serviceItems: ServiceItem[] = [
  {
    id: 1,
    title: 'PHUN XĂM THẨM MỸ',
    content: 'Phun xăm thẩm mỹ gồm các dịch vụ chính: Phun chân mày, Điêu khắc chân mày, Phun & Cấy môi, Phun mí, Thẩm mỹ vùng kín.',
    image: Service1,
  },
  {
    id: 2,
    title: 'ĐIỀU TRỊ DA',
    content: 'Phun xăm thẩm mỹ gồm các dịch vụ chính: Phun chân mày, Điêu khắc chân mày, Phun & Cấy môi, Phun mí, Thẩm mỹ vùng kín.',
    image: Service2,
  },
  {
    id: 3,
    title: 'TẮM TRẮNG',
    content: 'Dịch vụ tắm trắng toàn thân với hai công nghệ hiện đại: Luxury Young Body, Collagen Body.',
    image: Service3,
  },
  {
    id: 4,
    title: 'TRIỆT LÔNG VĨNH VIỄN',
    content: 'Triệt lông gồm các dịch vụ chính: Triệt lông bikini, Triệt lông nách, Triệt lông mặt, Triệt lông chân, Triệt lông toàn thân.',
    image: Service4,
  },
  {
    id: 5,
    title: 'GIẢM MỠ TOÀN THÂN',
    content: 'Giảm mỡ gồm các dịch vụ như: Giảm mỡ bụng, Giảm mỡ bắp tay, Giảm mỡ lưng, Giảm mỡ bụng dưới, Giảm mỡ đùi.',
    image: Service5,
  },
];

const OurServices = () => {
  return (
    <div className="w-full pb-10 z-10">
      <div className="mt-10">
        <div className="flex justify-center items-center p-10">
          <h1 className='text-mainSpaColor font-bold sm:text-3xl text-2xl custom-gradient-text'>DỊCH VỤ TẠI BÍCH TRÂM</h1>
        </div>
        <div className='flex flex-row flex-wrap max-w-1300 w-full mx-auto justify-center'>
        {serviceItems.map((service) => (
          <div key={service.id} className='sm:w-1/3 w-full sm:basis-1/3  p-4 pt-0 px-3 pb-5 '>
            <div className="rounded-2xl border border-green-800 h-550">
              <div className="sm:h-[480px] h-auto">
                <Image src={service.image} alt={service.title} className='rounded-t-2xl rounded-tr-2xl w-full'/>
                  <div className="text-mainSpaColor w-full text-center">
                      <h2 className='font-bold text-2xl uppercase pt-3'>{service.title}</h2>
                      <p className='text-justify px-4 py-2 text-base'>{service.content}</p>
                  </div>
                </div>
                <div className="flex gap-3 px-4 py-2 justify-center items-center mb-3 ">
                  <Link href={"/"} className='rounded-3xl font-semibold sm:text-lg text-base text-white custom-btn-contact px-4 py-1 text-center w-44'>
                    Nhận Tư Vấn
                  </Link>
                  <Link href={"/"} className='rounded-3xl font-semibold sm:text-lg text-base text-mainSpaColor custom-btn-more px-4 py-1 text-center w-44'>
                    Tìm hiểu thêm
                  </Link>
              </div>
            </div>
          </div>
        ))}
        </div>
      </div>
    </div>
  );
};

export default OurServices;
