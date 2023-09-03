'use client'
import React from 'react';
import CountDown from '~/components/CountDown';
import WhatIsWhatIsEyebrowSpray from '~/components/Pages/EyebrowSpray/WhatIsEyebrowSpray';
import EyebrowShape from '~/components/Pages/EyebrowSpray/EyebrowShape';
import EyebrowsColor from '~/components/Pages/EyebrowSpray/EyebrowsColor';
import Procedure from '~/components/Pages/EyebrowSpray/Procedure';
import ShouldChoose from '~/components/Pages/SprayCosmeticTattooing/ShouldChoose'
import CustomerPictures from '~/components/Pages/EyebrowSpray/CustomerPictures'
import StagesAndCare from '~/components/Pages/EyebrowSpray/StagesAndCare'


const EyebrowSpray: React.FC = () => {
  return (
    <>
        <div className='bg-EyebrowSpray w-full h-screen' />
        <CountDown/>
        <WhatIsWhatIsEyebrowSpray/>
        <EyebrowShape/>
        <EyebrowsColor/>
        <Procedure/>
        <CustomerPictures/>
        <ShouldChoose/>
        <StagesAndCare/>
    </>
  );
};

export default EyebrowSpray;
