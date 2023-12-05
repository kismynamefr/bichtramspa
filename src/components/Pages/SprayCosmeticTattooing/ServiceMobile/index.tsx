'use client'
import React from 'react'
import Image, {StaticImageData} from 'next/image';
import EffectButton from '~/components/EffectButton';
import Item1 from '~/assets/SprayCosmeticTattooing/Item-mb-1.png'
import Item2 from '~/assets/SprayCosmeticTattooing/Item-mb-2.png'
import Item3 from '~/assets/SprayCosmeticTattooing/Item-mb-3.png'
import Item4 from '~/assets/SprayCosmeticTattooing/Item-mb-4.png'
import Item5 from '~/assets/SprayCosmeticTattooing/Item-mb-5.png'
import Item6 from '~/assets/SprayCosmeticTattooing/Item-mb-6.png'
import Item7 from '~/assets/SprayCosmeticTattooing/Item-mb-7.png'
import Item8 from '~/assets/SprayCosmeticTattooing/Item-mb-8.png'
import Item9 from '~/assets/SprayCosmeticTattooing/Item-mb-9.png'
import Item10 from '~/assets/SprayCosmeticTattooing/Item-mb-10.png'
import Item11 from '~/assets/SprayCosmeticTattooing/Item-mb-11.png'
import Item12 from '~/assets/SprayCosmeticTattooing/Item-mb-12.png'
import Item13 from '~/assets/SprayCosmeticTattooing/Item-mb-13.png'
import Item14 from '~/assets/SprayCosmeticTattooing/Item-mb-14.png'
import Item15 from '~/assets/SprayCosmeticTattooing/Item-mb-15.png'
import Item16 from '~/assets/SprayCosmeticTattooing/Item-mb-16.png'

interface ServiceItem {
  image: StaticImageData;
  alt: string;
  description: string;
}


const serviceItems: ServiceItem[] = [
  {
    image: Item1,
    alt: 'Item Spa',
    description: 'PHUN MÀY TÁN BỘT HÀN QUỐC',
  },
  {
    image: Item2,
    alt: 'Item Spa',
    description: 'PHUN MÀY OMBRE',
  },
  {
    image: Item3,
    alt: 'Item Spa',
    description: 'PHUN MÀY VI CHẠM',
  },
  {
    image: Item4,
    alt: 'Item Spa',
    description: 'PHUN MÀY HIỆU ỨNG BÚT CHÌ',
  },
  {
    image: Item5,
    alt: 'Item Spa',
    description: 'ĐIÊU KHẮC SHADING',
  },
  {
    image: Item6,
    alt: 'Item Spa',
    description: 'ĐIÊU KHẮC CHÂN MÀY 6D',
  },
  {
    image: Item7,
    alt: 'Item Spa',
    description: 'ĐIÊU KHẮC CHÂN MÀY 9D',
  },
  {
    image: Item8,
    alt: 'Item Spa',
    description: 'ĐIÊU KHẮC CHÂN MÀY HAIRSTROKE',
  },
  {
    image: Item9,
    alt: 'Item Spa',
    description: 'PHUN MÔI PHA LÊ',
  },
  {
    image: Item10,
    alt: 'Item Spa',
    description: 'KHỬ THÂM MÔI',
  },
  {
    image: Item11,
    alt: 'Item Spa',
    description: 'PHUN MÔI XÍ MUỘI',
  },
  {
    image: Item12,
    alt: 'Item Spa',
    description: 'PHUN MÔI OMBRE',
  },
  {
    image: Item13,
    alt: 'Item Spa',
    description: 'PHUN MÍ MẮT DƯỚI',
  },
  {
    image: Item14,
    alt: 'Item Spa',
    description: 'PHUN MÍ EYELINER',
  },
  {
    image: Item15,
    alt: 'Item Spa',
    description: 'PHUN MÍ MẮT NAI',
  },
  {
    image: Item16,
    alt: 'Item Spa',
    description: 'PHUN MÍ MẮT MÈO',
  },
];

const serviceTitles = [
  'PHUN CHÂN MÀY',
  'ĐIÊU KHẮC CHÂN MÀY',
  'PHUN & CẤY MÔI',
  'PHUN MÍ',
];

const ServiceMobile = () => {
  return (
    <div className="lg:hidden block px-3">
      {serviceTitles.map((title, index) => (
      <div className="py-10">
          <div
            key={index}
            className="bg-boxImg shadow-cus max-w-[1440px] w-full m-auto rounded-2xl "
          >
          <div className="py-4 boxTitle">
            <div className="text-white sn:text-5xl text-3xl lg:text-start text-center font-bold pb-4">
              {title}
            </div>
          </div>
          <div className="w-full max-w-[336px] m-auto text-center">
            {serviceItems.slice(index * 4, index * 4 + 4).map((item, itemIndex) => (
              <div key={itemIndex} className="pb-5">
                <Image
                  src={item.image}
                  width={339}
                  height={165}
                  alt={item.alt}
                  className="rounded-2xl"
                />
                <p className="text-white py-6 text-xl">{item.description}</p>
              </div>
            ))}
          </div>
          <div className="text-center py-5">
            <EffectButton href={'/'} title="XEM CHI TIẾT" />
          </div>
        </div>
      </div>
      ))}
    </div>
  );
};

export default ServiceMobile;





