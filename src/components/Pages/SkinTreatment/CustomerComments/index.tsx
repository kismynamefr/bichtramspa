'use client'
import React from 'react'
import Image from 'next/image';

import BannerCustomerComments from '~/assets/SkinTreatment/Item-18.png'
import Frame1 from '~/assets/SkinTreatment/Frame-1.png'
import Frame2 from '~/assets/SkinTreatment/Frame-2.png'
import Frame3 from '~/assets/SkinTreatment/Frame-3.png'


const CustomerComments = () => {
  return (
    <div className="bg-boxtimeSpaColor w-full">
        <div className="sm:flex block w-full max-w-[1400px] m-auto items-center py-10">
          <div className="sm:w-1/3 w-full sm:pl-4 pl-0 sm:text-start text-center sm:px-0 px-3">
            <h2 className='bg-gradientText font-bold sm:text-5xl text-3xl text-cosmetic sm:pb-4 pb-0'>KHÁCH HÀNG</h2>
            <p className='sm:text-justify text-center text-white font-bold sm:text-2xl text-xl'>ĐÃ NÓI GÌ VỀ</p>
            <h2 className='bg-gradientText font-bold sm:text-5xl text-3xl text-cosmetic pb-4'>CHÚNG TÔI</h2>
          </div>
          <div className="sm:w-2/3 w-full sm:ml-10 ml-0 sm:block hidden">
            <Image src={BannerCustomerComments} width={903} height={663} alt='Banner Spa'/>
          </div>
          <div className="sm:w-2/3 w-full sm:ml-10 ml-0 sm:hidden flex flex-wrap-reverse gap-4 justify-center">
            <Image src={Frame1} width={345} height={285} alt='Banner Spa'/>
            <Image src={Frame2} width={345} height={285} alt='Banner Spa'/>
            <Image src={Frame3} width={345} height={285} alt='Banner Spa'/>
          </div>
        </div>
      </div>
  )
}

export default CustomerComments;
