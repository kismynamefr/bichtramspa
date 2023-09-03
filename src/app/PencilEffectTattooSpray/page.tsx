'use client'
import React from 'react';
import CountDown from '~/components/CountDown';
import WhatIsPencilEffectTattooSpray from '~/components/Pages/PencilEffectTattooSpray/WhatIsCosmeticTattooing';
import QusestionPencilEffectTattooSpray from '~/components/Question/QusestionPencilEffectTattooSpray';
import Advantage from '~/components/Pages/PencilEffectTattooSpray/Advantage';
import Object from '~/components/Pages/PencilEffectTattooSpray/Object';
import Effective from '~/components/Pages/PencilEffectTattooSpray/Effective';
import Procedure from '~/components/Pages/PencilEffectTattooSpray/Procedure';
import Assurance from '~/components/Pages/PencilEffectTattooSpray/Assurance';



const PencilEffectTattooSpray: React.FC = () => {
  return (
    <>
        <div className='bg-PencilEffectTattooSpray w-full h-screen' />
        <CountDown/>
        <WhatIsPencilEffectTattooSpray/>
        <Advantage/>
        <Object/>
        <Effective/>
        <Procedure/>
        <Assurance/>
        <QusestionPencilEffectTattooSpray/>
    </>
  );
};

export default PencilEffectTattooSpray;
