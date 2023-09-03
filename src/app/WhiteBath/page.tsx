'use client'
import React from 'react';
import Image from 'next/image';
import BgWhiteBathMb from '~/assets/WhiteBath/bg-WhiteBath-1-mb.png'
import CountDown from '~/components/CountDown';
import Risks from '~/components/Pages/WhiteBath/Risks';
import BathingTechnology from '~/components/Pages/WhiteBath/BathingTechnology';
import CustomerPictures from '~/components/Pages/WhiteBath/CustomerPictures';
import CustomerComments from '~/components/Pages/WhiteBath/CustomerComments';
import WhiteBathProcess from '~/components/Pages/WhiteBath/WhiteBathProcess';
import Procedure from '~/components/Pages/WhiteBath/Procedure';
import Question from '~/components/Question/QusestionWhiteBath';


const WhiteBath = () => {
  return (
    <>
      <div className='sm:block hidden bg-WhiteBath-1 w-full h-screen' />
      <Image src={BgWhiteBathMb} alt='background WhiteBath mobile' className='sm:hidden block w-full'/>
      <CountDown/>
      <Risks/>
      <BathingTechnology/>
      <CustomerPictures/>
      <CustomerComments/>
      <WhiteBathProcess/>
      <Procedure/>
      <Question/>
    </>
  );
};
export default WhiteBath;
