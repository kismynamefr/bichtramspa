'use client'
import React from 'react';
import Image from 'next/image';
import BgWaxxingMb from '~/assets/Waxxing/bg-Waxxing-1-Mb.png'
import CountDown from '~/components/CountDown';
import Method from '~/components/Pages/Waxxing/Method';
import HairRemovalTechnology from '~/components/Pages/Waxxing/HairRemovalTechnology';
import ResultsChange from '~/components/Pages/Waxxing/ResultsChange';
import ResultsChangeMobile from '~/components/Pages/Waxxing/ResultsChangeMobile';
import CustomerComments from '~/components/Pages/Waxxing/CustomerComments';
import Procedure from '~/components/Pages/Waxxing/Procedure';
import ShouldChoose from '~/components/Pages/Waxxing/ShouldChoose';
import ShouldChooseMobile from '~/components/Pages/Waxxing/ShouldChooseMobile';
import Question from '~/components/Question/QusestionWaxxing';


const Waxxing = () => {
  return (
    <>
      <div className='sm:block hidden bg-Waxxing-1 w-full h-screen' />
      <Image src={BgWaxxingMb} alt='background WhiteBath mobile' className='sm:hidden block w-full'/>
      <CountDown/>
      <Method/>
      <HairRemovalTechnology/>
      <ResultsChange/>
      <ResultsChangeMobile/>
      <Procedure/>
      <ShouldChoose/>
      <ShouldChooseMobile/>
      <CustomerComments/>
      <Question/>
    </>
  );
};
export default Waxxing;
