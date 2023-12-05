'use client'
import React from 'react';
import Image from 'next/image';
import BgCosmeticMb from '~/assets/Banner/banner-mobile03.png'
import CountDown from '~/components/CountDown';
import QuestionSprayCosmeticTattooing from '~/components/Question/QusestionSprayCosmeticTattooing';
import WhatIsCosmeticTattooing from '~/components/Pages/SprayCosmeticTattooing/WhatIsCosmeticTattooing';
import Advantage from '~/components/Pages/SprayCosmeticTattooing/Advantage'
import ShouldChoose from '~/components/Pages/SprayCosmeticTattooing/ShouldChoose'
import Service from '~/components/Pages/SprayCosmeticTattooing/Service'
import CustomerPictures from '~/components/Pages/SprayCosmeticTattooing/CustomerPictures'
import Promotions from '~/components/Pages/SprayCosmeticTattooing/Promotions'

const SprayCosmeticTattooing = () => {
  return (
    <>
      <div className='sm:block hidden bg-cosmetic w-full h-screen' />
      <Image src={BgCosmeticMb} alt='background cosmetic mobile' className='sm:hidden block w-full'/>
      <CountDown/>
      <WhatIsCosmeticTattooing/>
      <Advantage/>
      <ShouldChoose/>
      <Service/>
      <CustomerPictures/>
      <Promotions/>
      <QuestionSprayCosmeticTattooing/>
    </>
  );
};
export default SprayCosmeticTattooing;
