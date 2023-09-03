'use client'
import React from 'react'
import Image, {StaticImageData} from 'next/image';
import EffectButton from '~/components/EffectButton';
import ServiceMobile from '../ServiceMobile';
import Item1 from '~/assets/SprayCosmeticTattooing/item-1.png'
import Item2 from '~/assets/SprayCosmeticTattooing/item-2.png'
import Item3 from '~/assets/SprayCosmeticTattooing/item-3.png'
import Item4 from '~/assets/SprayCosmeticTattooing/item-4.png'
import Item5 from '~/assets/SprayCosmeticTattooing/item-5.png'
import Item6 from '~/assets/SprayCosmeticTattooing/item-6.png'
import Item7 from '~/assets/SprayCosmeticTattooing/item-7.png'
import Item8 from '~/assets/SprayCosmeticTattooing/item-8.png'
import Item9 from '~/assets/SprayCosmeticTattooing/item-9.png'
import Item10 from '~/assets/SprayCosmeticTattooing/item-10.png'
import Item11 from '~/assets/SprayCosmeticTattooing/item-11.png'
import Item12 from '~/assets/SprayCosmeticTattooing/item-12.png'
import Item13 from '~/assets/SprayCosmeticTattooing/item-13.png'
import Item14 from '~/assets/SprayCosmeticTattooing/item-14.png'
import Item15 from '~/assets/SprayCosmeticTattooing/item-15.png'
import Item16 from '~/assets/SprayCosmeticTattooing/item-16.png'

const Service = () => {
  return (
    <div className="bg-mainSpaColor w-full">
        <div className="w-full max-w-[1060px] m-auto text-center pt-20">
          <h1 className='bg-gradientText text-cosmetic font-bold sm:text-6xl text-4xl pb-4'>CÁC DỊCH VỤ PHUN XĂM THẨM MỸ</h1>
          <h2 className='text-white sm:text-4xl text-3xl font-medium pb-4'>TẠI THẨM MỸ QUỐC TẾ LINH ANH</h2>
        </div>
        <div className="sm:block hidden">
          <div className="bg-boxImg max-w-[1440px] w-full m-auto flex flex-row items-center">
            <div className="pl-24 w-1/3 boxTitle">
              <div className='text-white text-5xl font-medium pb-4'>PHUN CHÂN MÀY</div>
              <EffectButton href={"/"} title='XEM CHI TIẾT'/>
            </div>
            <div className="flex w-2/3">
              {[Item1, Item2, Item3, Item4].map((item, index) => (
                <Image key={index} src={item} alt='Item Spa' className='itemCosmetic'/>
              ))}
            </div>
          </div>
          <div className="bg-boxImg max-w-[1440px] w-full m-auto flex flex-row items-center">
            <div className="flex w-2/3">
              {[Item5, Item6, Item7, Item8].map((item, index) => (
                <Image key={index} src={item} alt='Item Spa' className='itemCosmetic'/>
              ))}
            </div>
            <div className="pl-24 w-1/3 boxTitle">
              <h2 className='text-white text-5xl font-medium pb-4'>ĐIÊU KHẮC CHÂN MÀY</h2>
              <EffectButton href={"/"} title='XEM CHI TIẾT'/>
            </div>
          </div>
          <div className="bg-boxImg max-w-[1440px] w-full m-auto flex flex-row items-center">
            <div className="pl-24 w-1/3 boxTitle">
              <h2 className='text-white text-5xl font-medium pb-4'>PHUN & CẤY MÔI</h2>
              <EffectButton href={"/"} title='XEM CHI TIẾT'/>
            </div>
            <div className="flex w-2/3">
            {[Item9, Item10, Item11, Item12].map((item, index) => (
              <Image key={index} src={item} alt='Item Spa' className='itemCosmetic'/>
            ))}
            </div>
          </div>
          <div className="bg-boxImg max-w-[1440px] w-full m-auto flex flex-row items-center">
            <div className="flex w-2/3">
              {[Item13, Item14, Item15, Item16].map((item, index) => (
                <Image key={index} src={item} alt='Item Spa' className='itemCosmetic'/>
              ))}
            </div>
            <div className="pl-24 w-1/3 boxTitle">
              <h2 className='text-white text-5xl font-medium pb-4'>PHUN MÍ</h2>
              <EffectButton href={"/"} title='XEM CHI TIẾT'/>
            </div>
          </div>
        </div>
        <ServiceMobile/>
    </div>
  )
}

export default Service;
