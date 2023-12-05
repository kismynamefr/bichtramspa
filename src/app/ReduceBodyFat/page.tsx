'use client'
import React from 'react';
import Image from 'next/image';
import BgReduceBodyFatMb from '~/assets/Banner/banner-mobile02.png'
import CountDown from '~/components/CountDown';
import ShouldChoose from '~/components/Pages/ReduceBodyFat/ShouldChoose';
import StatusObesity from '~/components/Pages/ReduceBodyFat/StatusObesity';
import Service from '~/components/Pages/ReduceBodyFat/Service';
import FatLossProcess from '~/components/Pages/ReduceBodyFat/FatLossProcess';
import Advantage from '~/components/Pages/ReduceBodyFat/Advantage';
import SlimmingTechnology from '~/components/Pages/ReduceBodyFat/SlimmingTechnology';
import CustomerPicture from '~/components/Pages/ReduceBodyFat/CustomerPicture';



const ReduceBodyFat = () => {
  return (
    <>
      <div className='sm:block hidden bg-ReduceBodyFat-1 w-full h-screen' />
      <Image src={BgReduceBodyFatMb} alt='background WhiteBath mobile' className='sm:hidden block w-full'/>
      <CountDown/>
      <StatusObesity/>
      <Service/>
      <SlimmingTechnology/>
      {/* <Advantage/> */}
      <FatLossProcess/>
      {/* <CustomerPicture/> */}
      <ShouldChoose/>
    </>
  );
};
export default ReduceBodyFat;
