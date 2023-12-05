'use client'
import React from 'react'
import Image, {StaticImageData} from 'next/image';
import EffectButton from '~/components/EffectButton';

import Icon5 from '~/assets/SprayCosmeticTattooing/icon-5.png'
import Icon6 from '~/assets/SprayCosmeticTattooing/icon-6.png'
import Icon7 from '~/assets/SprayCosmeticTattooing/icon-7.png'
import Icon8 from '~/assets/SprayCosmeticTattooing/icon-8.png'


interface AdvantageItem {
    imageSrc: StaticImageData;
    alt: string;
    className: string;
    title: string;
    marginTop: string;
}

const advantageItem: AdvantageItem[] = [
    {
        imageSrc: Icon5,
        alt: 'Icon Spa',
        className: 'w-64 m-auto rounded-full border-4 border-white',
        title: '',
        marginTop: '',
    },
    {
        imageSrc: Icon6,
        alt: 'Icon Spa',
        className: 'w-60 m-auto rounded-full border-4 border-white',
        title: '',
        marginTop: 'mt-20',
    },
    {
        imageSrc: Icon7,
        alt: 'Icon Spa',
        className: 'w-60 m-auto rounded-full border-4 border-white',
        title: '',
        marginTop: 'mt-20',
    },
    {
        imageSrc: Icon8,
        alt: 'Icon Spa',
        className: 'w-64 m-auto rounded-full border-4 border-white',
        title: '',
        marginTop: '',
    },
];

const Advantage = () => {
  return (
    <div className="bg-boxtimeSpaColor h-[1000px] w-full">
        <div className="w-full max-w-[1060px] m-auto text-center py-20">
          <h1 className='bg-gradientText text-cosmetic font-bold md:text-6xl text-4xl pb-4'>ƯU ĐIỂM</h1>
          <div className="">
            <h2 className='text-white md:text-4xl text-2xl font-medium pb-4'>KHI SỬ DỤNG CÔNG NGHỆ</h2>
            <h2 className='text-white md:text-4xl text-2xl font-medium pb-4'>PHUN XĂM THẨM MỸ</h2>
          </div>
        </div>
        <div className="w-full max-w-[1400px] m-auto flex md:flex-nowrap flex-wrap md:justify-normal justify-around">
          {advantageItem.map((block, index) => (
            <div key={index} className={`md:w-[360px] w-[160px] md:pb-0 pb-3 ${block.marginTop}`}>
              <Image src={block.imageSrc} alt={block.alt} className={block.className} />
              <p className='text-white text-center pt-4'>{block.title}</p>
            </div>
          ))}
        </div>
        <div className="text-center">
          <EffectButton href={"/"} title='ĐĂNG KÝ NHẬN TƯ VẤN'/>
        </div>
        <div className="w-full max-w-[1060px] m-auto text-center pt-20 lg:block hidden">
          <h2 className='text-white lg:text-4xl text-2xl font-medium pb-4'>TẠI SAO NÊN CHỌN</h2>
          <h1 className='bg-gradientText text-cosmetic font-bold lg:text-6xl text-4xl pb-4'>PHUN XĂM THẨM MỸ</h1>
          <h2 className='text-white lg:text-4xl text-2xl font-medium pb-4'>TẠI BÍCH TRÂM ?</h2>
        </div>
      </div>
  )
}
export default Advantage;
