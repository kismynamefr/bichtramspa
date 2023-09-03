'use client'
import React from 'react';
import Image from 'next/image';
import BgSkinTreatmentMb from '~/assets/SkinTreatment/bg-SkinTreatment-1-mb.png'
import CountDown from '~/components/CountDown';
import OutstandingServices from '~/components/Pages/SkinTreatment/OutstandingServices';
import SkinTreatmentTechnologies from '~/components/Pages/SkinTreatment/SkinTreatmentTechnologies';
import CustomerPictures from '~/components/Pages/SkinTreatment/CustomerPictures';
import CustomerComments from '~/components/Pages/SkinTreatment/CustomerComments';
import Standard from '~/components/Pages/SkinTreatment/Standard';
import Advantage from '~/components/Pages/SkinTreatment/Advantage';


const SkinTreatment = () => {
  return (
    <>
      <div className='sm:block hidden bg-SkinTreatment-1 w-full h-screen' />
      <Image src={BgSkinTreatmentMb} alt='background SkinTreatment mobile' className='sm:hidden block w-full'/>
      <CountDown/>
      <OutstandingServices/>
      <SkinTreatmentTechnologies/>
      <CustomerPictures/>
      <CustomerComments/>
      <Standard/>
      <Advantage/>
    </>
  );
};
export default SkinTreatment;
