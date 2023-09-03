'use client'
import React from 'react'
import Image from 'next/image';
import Icon2 from '~/assets/SprayCosmeticTattooing/icon-2.png'
import Icon3 from '~/assets/SprayCosmeticTattooing/icon-3.png'
import Icon4 from '~/assets/SprayCosmeticTattooing/icon-4.png'
import BannerCosmitec from '~/assets/SprayCosmeticTattooing/banner-1.png'


const WhatIsCosmeticTattooing = () => {
  return (
    <div className="bg-cosmetic2 w-full">
        <div className="sm:flex block w-full max-w-[1514px] m-auto items-center">
          <div className="sm:w-6/12 w-full sm:pl-4 pl-0 sm:text-start text-center sm:px-0 px-3">
            <h2 className='bg-gradientText font-bold sm:text-4xl text-2xl text-cosmetic pb-4'>PHUN XĂM THẨM MỸ LÀ GÌ?</h2>
            <p className='text-justify text-white sm:text-lg text-base'>Phun xăm thẩm mỹ là phương pháp sử dụng máy phun xăm với đầu kim siêu nhỏ để đưa mực xăm vào da, từ đó giải quyết các vấn đề như lông mày nhợt nhạt, đuôi mắt ngắn, môi thâm sạm xỉn màu…</p>
            <div className="justify-center items-center absolute sm:flex hidden">
              <Image src={Icon2} alt='Icon Spa' className='w-[172px] h-[177px] relative left-9'/>
              <Image src={Icon3} alt='Icon Spa' className='w-[208px] h-[202px] relative top-9'/>
              <Image src={Icon4} alt='Icon Spa' className='w-[245px] h-[238px] relative -top-5 -left-10'/>
            </div>
          </div>
          <div className="sm:w-6/12 w-full sm:ml-10 ml-0">
            <Image src={BannerCosmitec} alt='Banner Spa' className='w-[550px]'/>
          </div>
        </div>
      </div>
  )
}

export default WhatIsCosmeticTattooing;
